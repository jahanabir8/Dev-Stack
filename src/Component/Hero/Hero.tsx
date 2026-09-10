// import React from "react";
import Banner from "../../assets/Banner.png";

const Hero = () => {
  return (
    <div className="hero-section px-5 pt-12.5 lg:pt-24 py-8 lg:pb-28">
      <div className="container md:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          <div className="banner-content max-w-xl md:col-span-2">
            <h2 className="text-3xl lg:text-6xl font-bold text-center md:text-start">
             Build Your Ideal <br />
              <span className="bg-linear-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">
                 Development Stack
              </span>
            </h2>
            <p className="text-[18px] my-6 text-center md:text-start">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="flex justify-center md:justify-start gap-5 text-center">
              <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] w-42.5 py-2 rounded-[7px] cursor-pointer text-white">
                Explore Technologies
              </button>
              <button className="w-42.5 py-2 rounded-[7px] cursor-pointer border-2 border-[#e5e7eb] bg-transparent hover:bg-linear-to-r from-[#F97316] to-[#EC4899] hover:text-white transition-colors duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
          <div className="banner-img md:col-span-1">
            <img className="w-full" src={Banner} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
