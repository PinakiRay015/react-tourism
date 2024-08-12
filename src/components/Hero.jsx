import React, { useState } from "react";
import { FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { places } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Ratings from "./Ratings";
import TourOverview from "./TourOverview";
import Packages from "./Packages";
import TourPlan from "./TourPlan";
import Price from "./Price";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div>
      {/* Banner section  */}

      <div className="max-w-screen-xl mx-auto px-3 h-[100%]">
        <header className="flex justify-between my-5">
          <p>Home - Tours - Phuket</p>
          <p>The 10 Best Phuket Tours & Excursions</p>
        </header>
        <div className="flex gap-4 my-5">
          <p className="text-[#EB662B] bg-orange-100 px-6 py-2 rounded-2xl">
            BestSeller
          </p>
          <p className="bg-zinc-300 px-6 py-2 rounded-2xl">Free cancellation</p>
        </div>

        {/* places section  */}
        <Slider className="mx-4" {...settings}>
          {places.map((Element, id) => {
            return (
              <section key={id} className="h-fit py-3">
                {/* heading of the place */}
                <h1 className="font-semibold text-4xl">{Element.placeName}</h1>

                {/* ratings and wishlist point and share section */}
                <div className="flex items-center justify-between py-2">
                  {/* ratings point and location section */}
                  <div className="flex items-center gap-10">
                    <Ratings rating={Element.rating} />
                    <p>{Element.location}</p>
                    <p>{Element.booked}</p>
                  </div>

                  {/* share and wishlist point */}
                  <div className="flex items-center gap-10">
                    <i className="text-2xl text-red-600">
                      <FaRegHeart />
                    </i>
                    <i className="text-2xl text-red-600">
                      <FaRegShareSquare />
                    </i>
                  </div>
                </div>

                {/* img grid */}
                <div className="grid grid-cols-6 grid-rows-4 gap-1 h-[55vh]">
                  <div className="col-span-6 row-span-2 md:col-span-4 md:row-span-4 h-[100%]">
                    <img
                      className="w-full h-full object-cover"
                      src={Element.img1}
                      alt=""
                    />
                  </div>
                  <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 h-[100%]">
                    <img
                      className="w-full h-full object-cover"
                      src={Element.img2}
                      alt=""
                    />
                  </div>
                  <div className="row-span-2 col-span-2 md:col-span-1 h-[100%]">
                    <img
                      className="w-full h-full object-cover"
                      src={Element.img3}
                      alt=""
                    />
                  </div>
                  <div className="row-span-2 col-span-2 md:col-span-1 h-[100%]">
                    <img
                      className="w-full h-full object-cover"
                      src={Element.img4}
                      alt=""
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </Slider>     
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-between" >
        <div className="" >
          <TourOverview place={places[currentSlide]} />
          <Packages />
          <TourPlan place={places[currentSlide]} />
        </div>
        <Price />
      </div>
    </div>
  );
};

export default Hero;
