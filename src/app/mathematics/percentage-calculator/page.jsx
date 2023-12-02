"use client";
import React, { useState } from "react";

function PercentageCalculator() {
  const [originalNumber, setOriginalNumber] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState(null);

  const calculatePercentage = () => {
    const number = parseFloat(originalNumber);
    const percent = parseFloat(percentage);

    if (!isNaN(number) && !isNaN(percent)) {
      const calculatedPercentage = (percent / 100) * number;
      setResult(calculatedPercentage.toFixed(2));
    } else {
      setResult(null);
    }
  };

  const handleOriginalNumberChange = (e) => {
    setOriginalNumber(e.target.value);
    setResult(null); // Reset result when the original number changes
  };

  const handlePercentageChange = (e) => {
    setPercentage(e.target.value);
    setResult(null); // Reset result when the percentage changes
  };

  return (
    <div className="w-full sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Percentage Calculator</h1>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-grow">
          <label className="text-lg mb-2" htmlFor="originalNumber">
            Original Number:
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="number"
            id="originalNumber"
            value={originalNumber}
            onChange={handleOriginalNumberChange}
          />
        </div>
        <div className="flex-grow">
          <label className="text-lg mb-2" htmlFor="percentage">
            Percentage (%):
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="number"
            id="percentage"
            value={percentage}
            onChange={handlePercentageChange}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
        onClick={calculatePercentage}
      >
        Calculate Percentage
      </button>
      {result !== null && (
        <div className="mt-4">
          <p className="text-xl font-bold mb-2">Result:</p>
          <p className="text-lg">{`${percentage}% of ${originalNumber} is ${result}`}</p>
        </div>
      )}
    </div>
  );
}

export default PercentageCalculator;
