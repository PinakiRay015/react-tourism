import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Cal = () => {
  const [value, onChange] = useState([null, null]);

  // Function to get the current month and year
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Calculate the first month and the second month
  const firstMonth = new Date(currentYear, currentMonth);
  const secondMonth = new Date(currentYear, currentMonth + 1);

  return (
    <div className='w-full h-fit py-4'>
      <div className='max-w-screen-xl mx-auto border-b px-4'>
        <h1 className='text-4xl font-bold py-3'>Plan your trip</h1>
        <div className="flex space-x-8 py-4">
          {/* First Calendar */}
          <Calendar
            className="rounded-lg border-none w-full"
            selectRange
            onChange={onChange}
            value={value}
            activeStartDate={firstMonth}
          />

          {/* Second Calendar */}
          <Calendar
            className="rounded-lg border-none hidden sm:block w-full"
            selectRange
            onChange={onChange}
            value={value}
            activeStartDate={secondMonth}
          />
        </div>
      </div>
    </div>
  );
};

export default Cal;
