import React from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

const Banner = () => {
  return (
    <div className="relative">
      <NavBar className="fixed" />
      <motion.div
        className="mx-96"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-6xl font-bold text-blue-400 text-center text-uppercase heading position-relative pb-12">
          THE NEXT THING IN DIGITAL INDUSTRY
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <motion.img
          src="/about.webp"
          alt="about"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h4
          className="md:w-1/2 px-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="font-bold">
            WE CREATE GREAT IDEAS FOR YOUR PRODUCTS AND SERVICES
          </div>{" "}
          <br /> Kyptronix LLP Is one of the pinnacle renowned digital
          advertising corporations catering To patrons everywhere in the world.
          Our services are focused On Branding, Advertising, and Marketing &
          digital commercial enterprise techniques. We've handpicked over 300
          On-body workers who have profound knowledge & actual-Time experience
          In all of the components of virtual advertising. We have to a tendency
          to believe that smart looking website is the first impression. Web
          designing in a powerful way of just not an only professions, how in a
          passion for our company.
        </motion.h4>
      </div>
    </div>
  );
};

export default Banner;
