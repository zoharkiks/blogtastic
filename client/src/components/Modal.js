import React from "react";

const Modal = () => {
  return (
    <div className="callToAction">
      <div className="bg-white   h-70 flex flex-col items-center space-y-6 p-4 font-montserrat sm:h-[22rem] lg:grid lg:grid-cols-2 lg:px-10 ">
        <h1 className="text-2xl p-2 sm:text-4xl ">Welcome to Blogtastic</h1>
        
        <div className=" border-4 border-gray-300 grid grid-cols-2 p-2 gap-2 place-items-center lg:py-10 lg:absolute lg:right-[2rem] "> 
          <img
            className=" h-36 w-36 sm:h-52 sm:w-52 lg:relative lg:top-[-2rem] "
            src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
            alt=""
          />
          <img
            className=" h-36 w-36 sm:h-52 sm:w-52 lg:relative lg:bottom-[-2rem]"
            src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
