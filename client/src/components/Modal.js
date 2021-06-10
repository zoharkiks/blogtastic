import React from "react";
import { Link } from "react-router-dom";
import {Blob1,Blob2} from './Blob'
// Framer Motion
import { motion } from "framer-motion";


// Animation Variants
const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.5, when: "beforeChildren", staggerChildren:.7 },
  },
};

const headingVariants={
  hidden: {
    opacity: 0,
    x:-100,
  },

  visible: {
    opacity: 1,
    x:0,
    transition: { type: "tween",duration:0.5}
  },
}


const Modal = () => {
  return (
    <div className="callToAction">
      <motion.div variants={containerVariants} initial='hidden' animate='visible'
        className="bg-[#F1DAC4] h-[19.5rem] relative  font-montserrat sm:h-[22rem] lg:w-[100vw] "
      >
          <div className="flex flex-col px-4 pt-[44px] pb[182px] md:px-8  ">
          <motion.h1 variants={headingVariants} className='text-[33px] z-[5] leading-[41px] font-semibold sm:py-4 sm:text-[42px] lg:text-[58px]'>Welcome to Blogtastic</motion.h1>
          <motion.span variants={headingVariants} className='text-2xl  w-64 mt-2 z-[5] sm:py-[.5rem] sm:text-[2rem] lg:text-[2.5rem] lg:w-[35rem]'> Your Home of Great Articles</motion.span>
          <motion.span variants={headingVariants} className="bg-[#F26419] text-[#F1DAC4] mt-5 h-14 w-32 rounded-[26px] text-center py-[6px] font-bold text-[18px] leading-[22px] lg:w-40 lg:text-[22px] ">
          <Link to={"/allArticles"}>Start Exploring</Link>
          </motion.span>

          </div>

           <div className="absolute top-[4rem] right-[2rem] h-36 w-36 z-[4] opacity-40 sm:h-48 sm:w-48 sm:top-28 sm:right-44 lg:h-72 lg:w-72 lg:top-12 lg:right-72 ">
           <Blob1>
              </Blob1> 
             </div> 
             <div className="absolute right-[1rem] bottom-[1rem] h-36 w-36 z-1 sm:h-48 sm:w-48 lg:h-72 lg:w-72">
             <Blob2 className=''></Blob2>
             </div>
         
      </motion.div>
      
    </div>
  );
};

export default Modal;
