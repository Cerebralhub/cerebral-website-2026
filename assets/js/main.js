/* ==========================================================================
   Cerebral Hub — interactions
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Sticky header
     ------------------------------------------------------------------ */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------ */
  var toggle = document.querySelector('.nav__toggle');
  var drawer = document.querySelector('.nav__drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      drawer.classList.toggle('is-open', !open);
      document.body.style.overflow = !open ? 'hidden' : '';
    });

    drawer.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        drawer.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        drawer.classList.remove('is-open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  /* ------------------------------------------------------------------
     Scroll reveal
     ------------------------------------------------------------------ */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = entry.target.dataset.delay || 0;
            setTimeout(function () { entry.target.classList.add('is-in'); }, Number(delay));
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
      revealables.forEach(function (el) { io.observe(el); });
    }
  }

  /* ------------------------------------------------------------------
     Animated counters
     ------------------------------------------------------------------ */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var run = function (el) {
      var target = parseFloat(el.dataset.count);
      var suffix = el.dataset.suffix || '';
      if (reduceMotion) { el.textContent = target + suffix; return; }
      var start = null;
      var dur = 1400;
      var tick = function (ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      counters.forEach(run);
    } else {
      var co = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { run(entry.target); co.unobserve(entry.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { co.observe(el); });
    }
  }

  /* ------------------------------------------------------------------
     FAQ accordion
     ------------------------------------------------------------------ */
  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq__q');
    var panel = item.querySelector('.faq__a');
    if (!btn || !panel) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      faqItems.forEach(function (other) {
        if (other === item) return;
        other.classList.remove('is-open');
        other.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq__a').style.height = '0px';
      });

      item.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      panel.style.height = isOpen ? '0px' : panel.firstElementChild.offsetHeight + 'px';
    });
  });

  window.addEventListener('resize', function () {
    document.querySelectorAll('.faq__item.is-open .faq__a').forEach(function (p) {
      p.style.height = p.firstElementChild.offsetHeight + 'px';
    });
  });

  /* ------------------------------------------------------------------
     Marquee — duplicate the track so the loop is seamless
     ------------------------------------------------------------------ */
  document.querySelectorAll('.marquee__track').forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  /* ------------------------------------------------------------------
     Contact form — posts to FormSubmit, which emails the enquiry on
     to cerebralhubit@gmail.com. Submits over fetch so the visitor stays
     on the page; falls back to a normal POST (and the ?sent=1 redirect)
     if fetch is unavailable or the request fails.
     ------------------------------------------------------------------ */
  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    var status = contactForm.querySelector('.form-status');
    var submitBtn = contactForm.querySelector('[type="submit"]');

    var setStatus = function (msg, state) {
      if (!status) return;
      status.textContent = msg;
      status.classList.remove('is-ok', 'is-error');
      if (state) status.classList.add(state);
    };

    /* returning from the no-JS redirect */
    if (/[?&]sent=1/.test(window.location.search)) {
      setStatus('Thanks — your message is on its way. We’ll get back to you within 24 hours.', 'is-ok');
    }

    contactForm.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) return; /* let the browser post normally */

      if (!contactForm.checkValidity()) {
        e.preventDefault();
        setStatus('Please fill in your name, a valid email address and a message.', 'is-error');
        var firstInvalid = contactForm.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      e.preventDefault();
      var original = submitBtn ? submitBtn.textContent.trim() : '';
      if (submitBtn) { submitBtn.disabled = true; }
      setStatus('Sending…');

      fetch('https://formsubmit.co/ajax/cerebralhubit@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(contactForm)
      })
        .then(function (res) { return res.json().catch(function () { return {}; }).then(function (data) { return { ok: res.ok, data: data }; }); })
        .then(function (r) {
          if (!r.ok || String(r.data && r.data.success) === 'false') throw new Error('rejected');
          setStatus('Thanks — your message is on its way. We’ll get back to you within 24 hours.', 'is-ok');
          contactForm.reset();
          if (submitBtn) { submitBtn.disabled = false; }
        })
        .catch(function () {
          /* hand it to the browser so nothing is lost — form.submit() does
             not re-fire this handler, so there is no loop here */
          if (submitBtn) { submitBtn.disabled = false; }
          contactForm.submit();
        });
    });
  }

  document.querySelectorAll('[data-newsletter]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input');
      var btn = form.querySelector('button');
      if (btn) {
        var original = btn.textContent;
        btn.textContent = 'Subscribed';
        setTimeout(function () { btn.textContent = original; }, 2600);
      }
      if (input) input.value = '';
    });
  });

  /* ------------------------------------------------------------------
     Current year
     ------------------------------------------------------------------ */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
