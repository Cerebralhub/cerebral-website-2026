import React from "react";
import {ContactForm} from "../components/ContactForm";

export const Contact = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-24 max-w-7xl">
      <div className=" grid md:grid-cols-2 md:space-x-10">
        {/* contact form  */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-semibold mb-4 text-cerebralGrey-600">
            Have a question ? Let's <br /> get in touch with you.
          </h2>
          <p className="text-cerebralGrey-500 mb-12">
            Fill up the Form and our team will get back to within 24 hrs
          </p>
          <ContactForm />
        </div>
        {/* address and location */}
        <div className="order-1 md:order-2 mb-16 md:mb-0">
          <div className="grid md:grid-cols-2 space-y-6 md:space-y-0">
            {/* location  */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg text-cerebralGrey-700">
                Location
              </h3>
              <p className="text-cerebralGrey-500">
                47, Oba Yekini Street, Ikate Elegushi,Lekki, Lagos.
              </p>
              <p className="text-cerebralGrey-500">
                35, Julius Nyerere Crescent, Asokoro District, Abuja.
              </p>
            </div>
            {/* contact us */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg text-cerebralGrey-700">
                Contact Us
              </h3>
              <div>
                {" "}
                <p className="text-cerebralGrey-500">+234 704 000 6622</p>
                <a
                  href="mailTo:info@cerebralhub.com"
                  className="text-cerebralOrange-600 hover:text-cerebralGrey-500 cursor-pointer"
                >
                  info@cerebralhub.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
