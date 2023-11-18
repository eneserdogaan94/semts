import React from "react";
import PageSection from "./PageSection";

import contactImage from "../assets/SEMTLOGO-1.png";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <PageSection
      name="İLETİŞİM"

    >
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {
          
        }
        <div className="w-full lg:w-1/2 h-full p-4 flex items-center">
          <img
            src={contactImage}
            alt="contact us"
            className="rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple"
          />

          <p className=" py-12 max-w-md">
          </p>

          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
          </div>
          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
          </div>
        </div>

        {/* right */}

        <div className="w-full lg:w-1/2 h-full rounded-xl p-4">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
