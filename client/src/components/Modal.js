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
          <h1 className='text-[33px] leading-[41px] font-semibold '>Welcome to BlogTastic</h1>
          <span className="bg-[#F26419] text-[#F1DAC4] mt-7 h-12 w-32 rounded-[20px] text-center py-[2px] font-bold text-[18px] leading-[22px] ">
          <Link to={"/allArticles"}> Explore Articles</Link>
          </span>

          </div>

           <div className="absolute top-[4rem] right-[3rem] z-[4] ">
           <Blob1>
              </Blob1> 
             </div> 
             <div className="absolute right-[1rem] bottom-[3rem] z-1">
             <Blob2 className=''></Blob2>
             </div>
         
      </div>
      
    </div>
  );
};

export default Modal;
