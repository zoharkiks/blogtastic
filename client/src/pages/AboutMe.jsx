import React from "react";
// Import Framer Motion
import { motion, AnimatePresence } from "framer-motion";

 // Animation Variants
 const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: .5,
      delayChildren:.5,
    },
  },

};

const headingVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: "tween",  
      ease:'easeIn',
      duration: 0.7,
    },
  },
};



const AboutMe = () => {
  return (
    <div className="aboutMe">
      <motion.div variants={containerVariants} initial='hidden' animate='visible' className="bg-[#9448BC] text-[#F1DAC4] flex flex-col items-center py-4 px-5 font-montserrat space-y-5">
        <motion.div variants={headingVariants} className=" rounded-full h-36 w-36 shadow-2xl flex items-center justify-center filter grayscale overflow-hidden sm:h-48 sm:w-48 lg:h-56 lg:w-56 ">
          <img
            className="object-contain "
            src="https://i.ibb.co/3yqvFDH/00100s-PORTRAIT-00100-BURST20201223233932207-COVER.jpg"
            alt=""
          />
        </motion.div>
        <motion.p variants={headingVariants} className="leading-loose font-medium text-xl text-left sm:text-[1.5rem] lg:px-28 ">
          Hi everyone, my name is Zohar Williams, creator of Blogtastic. My goal
          with Blogtastic is simple, to publish articles that are both
          entertaining 🎬 and full of insights 🧠. I really hope you enjoy the
          articles on this blog. Please do share with your friends and family 😃
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
