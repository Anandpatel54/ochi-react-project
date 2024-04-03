/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <div className="flex gap-5 w-full h-screen bg-[#F1F1F1] py-20 font-['Founders_Grotesk_X-Condensed']">
      <div className="w-1/2 h-full flex flex-col text-black justify-between">
        <div className="heading">
          <h1 className="uppercase leading-none -mb-[2vw] text-[8vw] font-semibold">
            Eye-
          </h1>
          <h1 className="uppercase leading-none -mb-[2vw] text-[8vw] font-semibold">
            Opening
          </h1>
        </div>
        <h3 className="text-6xl ml-10">ochi.</h3>
      </div>
      <div className="w-1/2">
        <h1 className="uppercase text-black leading-none -mb-10 text-[8vw] font-semibold">
          Presentations
        </h1>
        <div className="dets text-black font-['Neue_Montreal'] ">
          <a className="block text-xl mt-10" href="#">
            Facebook
          </a>
          <a className="block text-xl mt-10" href="#">
            Instagram
          </a>
          <a className="block text-xl mt-10" href="#">
            Twitwer
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
