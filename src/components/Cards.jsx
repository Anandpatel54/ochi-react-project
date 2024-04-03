/* eslint-disable no-unused-vars */
import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute uppercase px-5 py-1 rounded-full border-2 left-2.5 bottom-10">
            reating5.Oonclutch
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute uppercase px-5 py-1 rounded-full border-2 left-1 bottom-6">
            businessbootcampa
            <br />
            lumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
