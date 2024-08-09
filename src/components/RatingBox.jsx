import React from "react";
import { customerRatings } from "../constants";
const RatingBox = () => {
  return (
    <div className="ratingBox grid grid-cols-6 grid-rows-4 grid-flow-row gap-1 py-3">
      {customerRatings.map((Element, id) => {
        return (
          <div key={id} className="py-3 flex items-center justify-between px-8 col-span-3 bg-[#EB662B0A]">
            <div className="flex flex-col gap-1">
              <p>{Element.tag}</p>
              <span>{Element.span}</span>
            </div>
            <div>
              <p>{Element.rating}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingBox;
