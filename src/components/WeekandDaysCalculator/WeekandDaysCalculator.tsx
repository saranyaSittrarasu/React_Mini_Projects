import React, { useState } from "react";

const WeekandDaysCalculator: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | undefined>(undefined);
  const [date, setDate] = useState<string>("");

  const calculateDate = (date: number) => {
    if (date > 0) {
      const weeks = Math.floor(date / 7);
      const days = Math.abs(date) % 7;
      setDate(`Weeks: ${weeks} Days: ${days}`);
    } else if (date < 0) {
      setDate("Please enter a positive number");
    } else {
      setDate("Please enter a number greater than 0");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Month and Date Calculator
      </h1>
      <input
        type="number"
        value={inputValue === undefined ? "" : inputValue}
        onChange={(e) => {
          const value = e.target.valueAsNumber;
          setInputValue(isNaN(value) ? undefined : value);
        }}
        className="border-2 border-gray-300 p-2 rounded w-full mb-4"
        placeholder="Enter number of days"
      />
      <button
        onClick={() => {
          if (inputValue !== undefined) {
            calculateDate(inputValue);
          } else {
            setDate("Please enter a valid number");
          }
        }}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Calculate
      </button>
      <div className="mt-4 text-center">{date}</div>
    </div>
  );
};

export default WeekandDaysCalculator;
