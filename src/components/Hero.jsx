import React from "react";
import {
  destination1,
  destination2,
  destination3,
  destination4,
} from "../utils";
const Hero = () => {
  return (
    <div className="w-full h-fit py-3">
      <div className="max-w-screen-xl mx-auto px-3 h-[90vh]">
        <h1 className="font-bold text-4xl" >
          Phi Phi Islands Adventure Day Trip with <br /> Seaview Lunch by V. Marine
          Tour
        </h1>

        {/* img grid  */}
        <div className="grid grid-cols-6 grid-rows-4 gap-1 py-8" >
            <div className="col-span-6 row-span-2 md:col-span-4 md:row-span-4 h-[100%]" >
                <img className="w-full h-full object-cover" src={destination1} alt="" />
            </div>
            <div className="col-span-2  row-span-2 md:col-span-2 md:row-span-2 h-[100%]" >
                <img className="w-full h-full object-cover" src={destination2} alt="" />
            </div>
            <div className="row-span-2 col-span-2 md:col-span-1 h-[100%]" >
            <img className="w-full h-full object-cover" src={destination3} alt="" />

            </div>
            <div className="row-span-2 col-span-2 md:col-span-1 h-[100%] " >
            <img className="w-full h-full object-cover" src={destination4} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
