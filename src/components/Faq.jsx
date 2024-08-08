import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { faqs } from "../constants";
const Faq = () => {
  const [boxHeight, setBoxHeight] = useState(false);

  const toggleFaq = () => {
    setBoxHeight(!boxHeight);
  };
  return (
    <div className="max-w-screen-xl mx-auto h-fit py-4">
      <div className="max-w-4xl px-4">
        <h1 className="text-4xl font-bold">FAQ</h1>
        <div>
          {faqs.map((Element, id) => (
            <div
              key={id}
              className={`my-3 border border-zinc-300 px-3 py-4 rounded-lg overflow-hidden transition-all ease-out duration-150 ${
                boxHeight ? "h-fit" : "h-14"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{Element.question}</h3>
                <i onClick={toggleFaq} className="cursor-pointer">
                  <FaCaretDown />
                </i>
              </div>
              <p className="text-gray-600 text-sm pt-3">
                {Element.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
