import React from "react";

export const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row flex-grow h-full gap-12 sm:gap-36">
      <div className="flex flex-col justify-center items-center md:items-start gap-12 mx-12 w-[75vw] sm:w-[40em] sm:mx-24">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-400">
          Drive your dream, without Hassle
        </h1>
        <div className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 flex flex-col items-start gap-12">
          <p>
            At Digiauto we care about your dream wheel. We help you find the
            best car you always wanted. So you can relax, have fun driving your
            dream vehicle.
          </p>
          <button className="flex flex-col items-center justify-center  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-2/4">
            Learn more
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          className="h-full"
          src="/car.svg"
          alt="car"
          style={{ width: "55%", marginLeft: "20%" }}
        />
      </div>
    </div>
  );
};
