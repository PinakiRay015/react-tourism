import React from "react";

const Price = () => {
  return (
    <div className="price-card h-screen w-[25vw] border border-zinc-300 rounded-lg sticky top-0 mr-5 p-6 hidden lg:block">
      <header className="text-[#05073C]">
        From $<span className="font-semibold text-xl">1,200</span>
      </header>
      {/* date and time select  */}
      <div className="border border-zinc-300 w-full h-36 rounded-lg my-5">
        {/* date select  */}
        <div className="border-b border-zinc-300 h-[50%] flex  items-center px-3 gap-4">
          <div className="bg-zinc-300 w-12 h-12 rounded"></div>
          <div>
            <span>From</span>
            <p>
              date <span>to</span> date
            </p>
          </div>
        </div>
        {/* time select  */}
        <div className="flex items-center px-3 gap-4 h-[50%]">
          <div className="bg-zinc-300 w-12 h-12 rounded"></div>
          <div>
            <span>Time</span>
            <p>choose time</p>
          </div>
        </div>
      </div>

      {/* tikets section  */}
      <div className="py-3">
        <header className="text-[#05073C] font-semibold text-xl">
          Tickets
        </header>
        {/* ticket category */}
        <div>
          {/* for adults  */}
          <div className="flex justify-between items-center py-2">
            <p>
              Adult (18+ years) $<span>282.00</span>
            </p>
            <div className="flex gap-3 items-center">
              <span>+</span>
              <p>0</p>
              <span>-</span>
            </div>
          </div>

          {/* for youth  */}
          <div className="flex justify-between items-center py-2">
            <p>
              Youth (13-17 years) $<span>168.00</span>
            </p>
            <div className="flex gap-3 items-center">
              <span>+</span>
              <p>0</p>
              <span>-</span>
            </div>
          </div>

          {/* for children */}
          <div className="flex justify-between items-center py-2">
            <p>
              Children (0-12 years) $<span>80.00</span>
            </p>
            <div className="flex gap-3 items-center">
              <span>+</span>
              <p>0</p>
              <span>-</span>
            </div>
          </div>
        </div>
      </div>

      {/* add extra section  */}
      <div className="py-3 border-b border-zinc-400" >
        <header className="text-[#05073C] font-semibold text-xl">
          Add Extra
        </header>
        <div className="py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p>Add Service per booking</p>
          </div>
          <p>
            <span>$</span>40
          </p>
        </div>

        <div className="py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p>Add Service per Person</p>
          </div>
          <p>
            <span>$</span>40
          </p>
        </div>
      </div>

        {/* total price section */}
      <div className="py-5 flex items-center justify-between" >
        <h3 className="text-2xl font-bold" >Total:</h3>
        <p><span>$</span> 0</p>
      </div>

    <button className="bg-orange-600 text-white py-4 w-full rounded-lg" >Book Now</button>

    </div>
  );
};

export default Price;
