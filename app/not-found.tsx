import React from "react";

const Notfound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full flex flex-col gap-y-[0.5rem] text-center justify-center items-center">
        <img
          src="/images/logo.svg"
          className="md:w-[30%] w-[50%] h-auto mb-[1rem] grayscale opacity-30"
        />
        <p className="text-[14px]">Back to main page</p>
        <h1 className="text-[33px] font-[800]">404 not found</h1>
        <a href="/" className="btn btn-primary btn-lg max-w-[250px] w-full">
          Back
        </a>
      </div>
    </div>
  );
};

export default Notfound;
