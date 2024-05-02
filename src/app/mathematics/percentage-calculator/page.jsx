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
    <>
      <div className="w-full sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 dark:bg-slate-900 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Percentage Calculator</h1>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="originalNumber">
              Original Number:
            </label>
            <input className="border border-gray-300 rounded p-2 w-full" type="number" id="originalNumber" value={originalNumber} onChange={handleOriginalNumberChange} />
          </div>
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="percentage">
              Percentage (%):
            </label>
            <input className="border border-gray-300 rounded p-2 w-full" type="number" id="percentage" value={percentage} onChange={handlePercentageChange} />
          </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md mt-4" onClick={calculatePercentage}>
          Calculate Percentage
        </button>
        {result !== null && (
          <div className="mt-4">
            <p className="text-xl font-bold mb-2">Result:</p>
            <p className="text-lg">{`${percentage}% of ${originalNumber} is ${result}`}</p>
          </div>
        )}
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Features and Functionality:</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li className="mb-2">
            <strong>Easy Percentage Calculation:</strong> - CalcPlus&apos;s Percentage Calculator simplifies the process of calculating percentages. Enter the values, and the
            calculator swiftly computes the percentage.
          </li>
          <li className="mb-2">
            <strong>User-Friendly Interface:</strong> - The Percentage Calculator boasts an intuitive interface for seamless interaction. Input your values, and receive the
            percentage result promptly.
          </li>
          <li className="mb-2">
            <strong>Immediate Results:</strong> - Experience instant feedback with real-time percentage calculation. Upon entering values, the calculator promptly displays the
            percentage.
          </li>
          <li className="mb-2">
            <strong>Input Validation:</strong> - Ensure accurate results with input validation. The calculator validates user input to accept only valid numerical values,
            preventing errors in calculations.
          </li>
          <li className="mb-2">
            <strong>Mobile-Friendly Design:</strong> - Access the Percentage Calculator effortlessly across various devices. Whether on a smartphone, tablet, or desktop, CalcPlus
            ensures a seamless and responsive user experience.
          </li>
          <li className="mb-2">
            <strong>Time-Saving and Convenient: </strong> - Save time with CalcPlus&apos;s Percentage Calculator, eliminating the need for manual calculations. Obtain precise
            percentage values within seconds, allowing you to focus on other tasks.
          </li>
        </ol>
        <p className="text-sm mt-4">
          <strong>Disclaimer:</strong> Please note that CalcPlus&apos;s Percentage Calculator serves informational purposes only and should not replace professional financial or
          mathematical advice. Users are encouraged to verify the accuracy of percentage calculations for their specific requirements. CalcPlus does not assume responsibility for
          any inaccuracies or errors resulting from the use of the calculator.
        </p>
      </div>
    </>
  );
}

export default PercentageCalculator;
