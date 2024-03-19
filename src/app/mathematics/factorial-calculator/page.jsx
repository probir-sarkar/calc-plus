"use client";
import React, { useState } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const calculateFactorial = () => {
    const num = parseInt(number);

    if (!isNaN(num) && num >= 0) {
      let factorial = 1;
      for (let i = 2; i <= num; i++) {
        factorial *= i;
      }
      setResult(factorial);
    } else {
      setResult(null);
    }
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    setResult(null); // Reset result when the number changes
  };

  return (
    <>
      <div className="w-full sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Factorial Calculator</h1>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="number">
              Enter a Number:
            </label>
            <input
              className="border border-gray-300 rounded p-2 w-full"
              type="number"
              id="number"
              value={number}
              onChange={handleNumberChange}
            />
          </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md mt-4" onClick={calculateFactorial}>
          Calculate Factorial
        </button>
        {result !== null && (
          <div className="mt-4">
            <p className="text-xl font-bold mb-2">Result:</p>
            <p className="text-lg">{`Factorial of ${number} is ${result}`}</p>
          </div>
        )}
      </div>
      <div className="text-gray-700 mt-10">
        <h2 className="text-2xl font-bold mb-4">Features and Functionality:</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li className="mb-2">
            <strong>Easy Factorial Calculation:</strong> - CalcPlus&apos;s Factorial Calculator simplifies the process
            of calculating factorials. Enter a number, and the calculator swiftly computes its factorial value.
          </li>
          <li className="mb-2">
            <strong>User-Friendly Interface:</strong> - The Factorial Calculator boasts an intuitive interface for
            seamless interaction. Input your desired number, and receive the factorial result promptly.
          </li>
          <li className="mb-2">
            <strong>Immediate Results:</strong> - Experience instant feedback with real-time factorial calculation. Upon
            entering a number, the calculator promptly displays its factorial value.
          </li>
          <li className="mb-2">
            <strong>Input Validation:</strong> - Ensure accurate results with input validation. The calculator validates
            user input to accept only non-negative integers, preventing errors in calculations.
          </li>
          <li className="mb-2">
            <strong>Mobile-Friendly Design:</strong> - Access the Factorial Calculator effortlessly across various
            devices. Whether on a smartphone, tablet, or desktop, CalcPlus ensures a seamless and responsive user
            experience.
          </li>
          <li className="mb-2">
            <strong>Time-Saving and Convenient: </strong> - Save time with CalcPlus&apos;s Factorial Calculator,
            eliminating the need for manual calculations. Obtain precise factorial values within seconds, allowing you
            to focus on other tasks.
          </li>
        </ol>
        <p className="text-sm mt-4">
          <strong>Disclaimer:</strong> Please note that CalcPlus&apos;s Factorial Calculator serves informational
          purposes only and should not replace professional mathematical advice. Users are encouraged to verify the
          accuracy of factorial calculations for their specific requirements. CalcPlus does not assume responsibility
          for any inaccuracies or errors resulting from the use of the calculator.
        </p>
      </div>
    </>
  );
}

export default FactorialCalculator;
