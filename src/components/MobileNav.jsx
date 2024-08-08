import React from "react";
import { mobileNavMenu } from "../constants";

const MobileNav = () => {
  return (
    <div className="w-full h-fit fixed sm:hidden bottom-0 z-10">
      <div className="max-w-screen-xl h-24 bg-black px-3 rounded-t-xl">
        <nav className="flex justify-between items-center h-[100%] px-4">
          {mobileNavMenu.map((Element, id) => (
            <div key={id} className="text-white flex flex-col items-center">
              <i className="text-4xl">{<Element.icon />}</i>
              <p>{Element.item}</p>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
