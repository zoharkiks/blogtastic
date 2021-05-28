import React from "react";


const Modal = () => {
  return (
    <div className="callToAction">  
      <div className="bg-white   h-70 flex flex-col items-center space-y-6 p-4 font-montserrat ">
        <h1 className='text-2xl p-2 '>Welcome to Blogtastic</h1>
        <div className=" border-4 border-gray-300 w-full h-full flex justify-evenly p-2 ">
          <img
            className="rounded-full h-36 w-36"
            src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
            alt=""
          />
          <img
          className='rounded-full h-36 w-36'
            src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
 