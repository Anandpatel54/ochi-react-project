/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 bg-[#F1F1F1]">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight text-black'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="relative cardContainer w-1/2 h-[70vh]"
          >
            <h2 className="uppercase absolute flex translate-x-1/2 top-1/2 -translate-y-1/2 right-0 z-[9] overflow-hidden leading-none tracking-tight text-8xl text-[#CDEA68]">
              {"fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h2>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="relative cardContainer w-1/2 h-[70vh]"
          >
            <h2 className="uppercase absolute flex translate-x-1/2 top-1/2 -translate-y-1/2 right-full z-[9] overflow-hidden leading-none tracking-tight text-8xl text-[#CDEA68]">
              {"vise".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h2>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
