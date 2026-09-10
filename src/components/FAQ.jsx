import React from "react";

const faqs = [
  {
    index: 1,
    question: "What services does Cerebral Hub provide?",
    answer:
      "We specialize in digital marketing, content strategy, PR, animation, motion graphics, and branding. Each service is tailored to help you connect with your audience, grow your brand, and reach your goals.",
  },
  {
    index: 2,
    question: "How does Cerebral Hub approach new projects?",
    answer:
      "We start by understanding your brand's goals, challenges, and audience. Then, we develop a customized strategy focused on delivering measurable results and maximizing engagement.",
  },
  {
    index: 3,
    question: "Who do you work with?",
    answer:
      "Our clients range from startups to established brands across various industries and government organizations. We adapt our approach to meet each organization's unique needs, regardless of size or sector.",
  },
  {
    index: 4,
    question: "How can we track the results of your services?",
    answer:
      "We provide regular performance reports and insights, allowing you to see the impact of our strategies and measure success against key metrics.",
  },
  {
    index: 5,
    question: "How do I get started with Cerebral Hub?",
    answer:
      "Simply reach out via our website or contact page. Our team will happily discuss your needs, and goals, and how we can help bring your vision to life.",
  },
];

const FAQ = () => {
  return (
    <div>
      <section className="text-cerebralGrey-600">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
          <h2 class="mb-8 text-4xl font-extrabold ">
            Frequently asked questions
          </h2>
          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-x-16  dark:border-gray-700 md:grid-cols-2">
            {faqs.map(faq => (
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {faq.question}
                </h3>
                <p className="text-cerebralGrey-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
