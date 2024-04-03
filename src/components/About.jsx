import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full p-20 bg-[#CDEA67] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-10 pt-20 border-t-[1px] border-[#a1b562] mt-20">
        <div className="w-1/2 ">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="px-10 py-6 mt-5 flex items-center gap-5 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-[#b0c859] rounded-3xl overflow-hidden bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg)]"></div>
      </div>
    </div>
  );
}

export default About;
