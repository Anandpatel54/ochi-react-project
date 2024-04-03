/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-[#F1F1F1] pt-1"
    >
      <div className="textstructure mt-52">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker ml-14">
              <div className="w-fit flex items-end overflow-hidden">
                {index == 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-5 rounded-md w-[9vw] h-[6vw] bg-green-500 relative -top-[1.2vw] bg-cover bg-cente bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)]">
                  </motion.div>
                )}
                <h1 className="text-[#212121] pt-[2vw] -mb-[1vw] flex items-center h-full uppercase text-[9vw] font-bold leading-[7vw] font-['Founders_Grotesk_X-Condensed']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-[5vw] flex justify-between items-center py-5 px-20">
        {["For Public and Private companies", "From the first ptch to IPO"].map(
          (item, index) => (
            <p className="text-md font-light tracing-tight leading-none text-[#212121] font-['Neue_Montreal']">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5 text-[#212121] font-['Neue_Montreal']">
          <div className="px-5 py-2 border-[2px] border-zinc-400 rounded-full font-light text-md uppercase">
            start the project
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-[2px] border-zinc-400 rounded-full font-ligh">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
