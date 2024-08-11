import React from "react";
import { faqs } from "../constants";
const Faq = () => {


  return (
    <div className="max-w-screen-xl mx-auto h-fit py-4">
      <div className="max-w-4xl px-4">
        <h1 className="text-4xl font-bold">FAQ</h1>
        <div>
          {faqs.map((Element , id)=>(
            <details key={id} className="border border-zinc-400 px-2 py-5 my-2 rounded-lg" >
              <summary className="font-bold" >{Element.question}</summary>
              <p className="text-gray-600 text-sm  px-5 py-1" >{Element.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
