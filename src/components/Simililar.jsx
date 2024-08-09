import React from "react";
import Ratings from "./Ratings";
import { similarTour } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Simililar = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
  return (
    <div className="max-w-screen-xl mx-auto h-fit py-6">
      <div className="max-w-4xl px-6">
        <h1 className="text-3xl font-bold">You might also like...</h1>
        <div className="py-5 ">
            <Slider className="mx-1"  {...settings} >
          {similarTour.map((Element, id) => (
            <div key={id} className="border h-[348px] p-1 rounded-md relative cursor-pointer">
              <img src={Element.img} alt="" />
              <div className="border-b py-2">
                <p className="text-xs text-zinc-500 pb-2">{Element.location}</p>
                <h3 className="text-sm text-zinc-700 font-semibold ">
                  {Element.title}
                </h3>
                <Ratings rating={Element.rating} />
              </div>
              <footer className="flex justify-between absolute w-full left-0 bottom-2 px-1">
                <p className="text-xs text-zinc-500 ">
                  <span>{Element.days}</span> days
                </p>
                <p className="text-xs text-zinc-500 ">
                  From <span className="text-black">{Element.price}</span>
                </p>
              </footer>
            </div>
          ))}
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default Simililar;
