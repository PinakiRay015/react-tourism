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
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1185,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 876,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className="max-w-screen-xl mx-auto h-fit py-6">
      <div className="max-w-screen-xl px-6 ">
        <h1 className="text-3xl font-bold">You might also like...</h1>
        <div className="py-5">
            <Slider className="mx-1"  {...settings} >
          {similarTour.map((Element, id) => (
            <div key={id} className="container border h-[348px] !w-full rounded-md cursor-pointer">
                <div className="w-fit mx-auto" >
              <img className="" src={Element.img} alt="" />
                </div>
              <div className="border-b p-2">
                <p className="text-xs text-zinc-500 pb-2">{Element.location}</p>
                <h3 className="text-sm text-zinc-700 font-semibold ">
                  {Element.title}
                </h3>
                <Ratings rating={Element.rating} />
              </div>
              <footer className="flex justify-between pt-3 px-1">
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
