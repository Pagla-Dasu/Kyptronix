import React from "react";
import NavBar from "./NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div className="px-48 py-36 max-md:px-12 max-md:py-24">
          <div className="text-sm bg-yellow-100 w-36 rounded-full text-center px-2 py-3 mb-4 text-yellow-700 font-bold">
            ABOUT US
          </div>
          <div className="flex gap-10 max-md:flex-col">
            <div className="w-1/2 max-md:w-full">
              <h1 className="text-4xl font-bold text-blue-800 pb-4">
                ABOUT US
              </h1>
              <h4 className="text-xl font-semibold pb-4">
                History of a Leading Brand Thinking to grow, aiming to achieve
              </h4>
              <h6>
                Kyptronix LLP Is one of the top famend digital advertising
                organizations catering To patrons everywhere within the world.
                Our services are focused On Branding, advertising, and marketing
                & virtual industrial employer techniques. we've got handpicked
                over three hundred On-frame people who have profound expertise &
                real-Time experience In all of the additives of digital
                advertising. Website Development | Website Design |Graphics
                Design | Digital Marketing
              </h6>
            </div>
            <div className="w-1/2 flex justify-center max-md:w-full">
              <img src="/about.webp" alt="about" className="" />
            </div>
          </div>
          <div className="pt-48 flex flex-col items-center">
            <div className="text-sm bg-yellow-100 w-36 rounded-full text-center px-2 py-3 mb-4 text-yellow-700 font-bold">
              Work Culture
            </div>
            <h1 className="text-4xl font-bold text-blue-800 pb-4">
              Work Culture
            </h1>
            <h6 className="text-center">
              Kyptronix LLP Is One Of The Top Renowned Digital Marketing
              Agencies Catering to Client All Over The World. Our Services Are
              Focussed On Branding, marketing And Digital Business Strategies.
              We Have HandPicket Over 300 On-Staff Experience Who Have Profound
              Knowledge And Real-Time Exprience in All The Aspects of Digital
              Marketing.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
