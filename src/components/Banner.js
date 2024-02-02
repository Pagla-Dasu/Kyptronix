import React from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

const Banner = () => {
  return (
    <div className="relative">
      <NavBar className="fixed" />
      <div className="flex flex-col md:flex-row items-center justify-center">
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
          Kyptronix LLP is one of the top renowned digital marketing
          organizations catering to patrons worldwide. Our services are focused
          on branding, advertising, marketing, and virtual company strategies.
          We've handpicked over 300 on-frame individuals who have profound
          expertise and real-time experience in all aspects of digital
          marketing. Website Development | Website Design | Graphics Design |
          Digital Marketing
        </motion.h4>
      </div>
    </div>
  );
};

export default Banner;

