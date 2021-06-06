import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="bg-[#9448BC] text-[#F1DAC4] flex flex-col items-center py-4 px-5 font-montserrat space-y-5">
        <div className=" rounded-full h-36 w-36 shadow-2xl flex items-center justify-center filter grayscale overflow-hidden ">
          <img
            className="object-contain "
            src="https://i.ibb.co/3yqvFDH/00100s-PORTRAIT-00100-BURST20201223233932207-COVER.jpg"
            alt=""
          />
        </div>
        <p className="leading-loose font-medium text-xl text-left ">
          Hi everyone, my name is Zohar Williams, creator of Blogtastic. My goal
          with Blogtastic is simple, to publish articles that are both
          entertaining 🎬 and full of insights 🧠. I really hope you enjoy the
          articles on this blog. Please do share with your friends and family 😃
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
