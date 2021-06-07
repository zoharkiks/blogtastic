import React from "react";
import { Link } from "react-router-dom";
import {Blob1,Blob2} from './Blob'
const Modal = () => {
  return (
    <div className="callToAction">
      <div
        className="bg-[#F1DAC4] h-[19.5rem] relative  font-montserrat sm:h-[22rem] lg:grid lg:grid-cols-2 lg:px-10 "
      >
          <div className="flex flex-col px-4 pt-[44px] pb[182px]  ">
          <h1 className='text-[33px] leading-[41px] font-semibold sm:py-4 sm:text-[42px]'>Welcome to BlogTastic</h1>
          <span className='text-2xl  w-64 mt-2 z-[5] sm:py-[.5rem] sm:text-[2rem]'> Your Home of Great Articles</span>
          <span className="bg-[#F26419] text-[#F1DAC4] mt-5 h-14 w-32 rounded-[26px] text-center py-[6px] font-bold text-[18px] leading-[22px] ">
          <Link to={"/allArticles"}>Start Exploring</Link>
          </span>

          </div>

           <div className="absolute top-[4rem] right-[2rem] h-36 w-36 z-[4] opacity-40 sm:h-48 sm:w-48 sm:top-28 sm:right-44 ">
           <Blob1>
              </Blob1> 
             </div> 
             <div className="absolute right-[1rem] bottom-[1rem] h-36 w-36 z-1 sm:h-48 sm:w-48">
             <Blob2 className=''></Blob2>
             </div>
         
      </div>
      
    </div>
  );
};

export default Modal;
