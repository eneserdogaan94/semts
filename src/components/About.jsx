import React from "react";

import codeImage from "../assets/semt3.jpg";
import PageSection from "./PageSection";

const About = () => {
  return (
    <PageSection
      name="HAKKIMIZDA"
    >
      <div className="col-auto flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* left */}

        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
         AAAA
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          aaa
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          aaa
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          aaa
          </p>
        </div>
        {/* right */}
        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
          <img
            src={codeImage}
            alt="code"
            className="rounded-lg shadow-lg shadow-thBlue"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default About;
