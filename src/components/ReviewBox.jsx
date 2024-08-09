import React, { useState } from "react";
import { review } from "../constants";
const ReviewBox = () => {
  const [viewReview, setViewReview] = useState(false);
  const [trackView , setTrackView] = useState(false);
  const toggleReview = () => {
    setViewReview(!viewReview)
    setTrackView(!trackView)
  };

  const count = !trackView ? 3 : 6;

  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <div className="max-w-4xl px-4">
        {review.slice(0 , count).map((Element, id) => {
          return (
            <div key={id} className="py-6">
              <header className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                  <p className="bg-black inline-block text-white py-1 px-2 rounded-full">
                    {Element.usernameShort}
                  </p>
                  <h3 className="">{Element.usernameLong}</h3>
                </div>
                <div>
                  <p>{Element.date}</p>
                </div>
              </header>
              <main>
                <h1 className="py-4 pl-6">{Element.heading}</h1>
                <p className="">{Element.paragraph}</p>
                <div className=" flex gap-3 py-3">
                  {Element.imgseries.map((img) => (
                    <img className="w-24" src={img} alt="" />
                  ))}
                </div>
              </main>
              <footer className="flex gap-5 py-2">
                <p>Helpfull</p>
                <p>Not helpfull</p>
              </footer>
            </div>
          );
        })}

        <button
          onClick={toggleReview}
          className="border border-orange-500 px-5 py-3 rounded-lg font-semibold text-orange-500"
        >
          {viewReview ? "See less reviews" : "See more reviews"}
        </button>
      </div>
    </div>
  );
};

export default ReviewBox;
