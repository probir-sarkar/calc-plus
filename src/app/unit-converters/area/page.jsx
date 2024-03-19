"use client";
import React, { useState } from "react";

const areaUnits = [
  { label: "Square Millimeter (mm²)", value: "mm²", factor: 0.000001 },
  { label: "Square Centimeter (cm²)", value: "cm²", factor: 0.0001 },
  { label: "Square Meter (m²)", value: "m²", factor: 1 },
  { label: "Square Kilometer (km²)", value: "km²", factor: 1000000 },
  { label: "Square Inch (in²)", value: "in²", factor: 0.00064516 },
  { label: "Square Foot (ft²)", value: "ft²", factor: 0.092903 },
  { label: "Square Yard (yd²)", value: "yd²", factor: 0.836127 },
  { label: "Acre", value: "acre", factor: 4046.86 },
  { label: "Hectare", value: "hectare", factor: 10000 },
];

const convertArea = (value, from, to) => {
  const fromUnit = areaUnits.find((unit) => unit.value === from);
  const toUnit = areaUnits.find((unit) => unit.value === to);
  return (value * fromUnit.factor) / toUnit.factor;
};

function AreaCalculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [unit1, setUnit1] = useState("mm²");
  const [unit2, setUnit2] = useState("mm²");

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
    setInput2(convertArea(e.target.value, unit1, unit2));
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
    setInput1(convertArea(e.target.value, unit2, unit1));
  };

  const handleUnit1Change = (e) => {
    setUnit1(e.target.value);
    const convertedValue = convertArea(input1, unit1, e.target.value);
    setInput1(convertedValue);
  };

  const handleUnit2Change = (e) => {
    setUnit2(e.target.value);
    const convertedValue = convertArea(input2, unit2, e.target.value);
    setInput2(convertedValue);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Area Calculator</h1>
      <div className="w-full  sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 space-y-4 lg:flex">
        <div className="lg:w-3/5 space-y-4">
          <div className="">
            <p className="text-xl mb-4"> From ({unit1})</p>
            <div className="flex md:flex-row flex-col-reverse gap-2">
              <input
                className="border border-gray-300 rounded p-2"
                type="number"
                value={input1}
                onChange={handleInput1Change}
              />
              <select className="border border-gray-300 rounded p-2" value={unit1} onChange={handleUnit1Change}>
                {areaUnits.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" ">
            <p className="text-xl mb-4"> To ({unit2})</p>
            <div className="flex md:flex-row flex-col-reverse gap-2">
              <input
                className="border border-gray-300 rounded p-2"
                type="number"
                value={input2}
                onChange={handleInput2Change}
              />
              <select className="border border-gray-300 rounded p-2" value={unit2} onChange={handleUnit2Change}>
                {areaUnits.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg lg:w-2/5">
          <p className="text-xl font-bold mb-2">Conversion Result:</p>
          <p className="text-lg">
            {input1 && (
              <span>
                {input1} <span className="text-gray-600">({unit1})</span> is equal to {input2}{" "}
                <span className="text-gray-600">({unit2})</span>
              </span>
            )}
          </p>
        </div>
      </div>
      {/* Additional content or features specific to the area calculator */}
      <div className="text-gray-700 mt-10">
        <h2 className="text-2xl font-bold mb-4">Features and Functionality:</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li className="mb-2">
            <strong>Comprehensive Area Conversion:</strong> - CalcPlus&apos;s Area Converter covers a wide range of
            commonly used area units, including square meters, square kilometers, square feet, square yards, square
            inches, acres, and hectares. Enjoy the flexibility of converting between any combination of area units
            effortlessly.
          </li>
          <li className="mb-2">
            <strong>User-Friendly Interface:</strong> - The Area Converter on CalcPlus features a user-friendly
            interface designed for easy navigation and seamless conversion. Enter your measurement in one unit, select
            the desired output unit, and receive the precise conversion instantly.
          </li>
          <li className="mb-2">
            <strong>Real-Time Conversion:</strong> - Experience real-time conversion as you input values into the area
            converter. Watch as the tool updates the conversion instantly, allowing you to experiment with different
            measurements and units.
          </li>
          <li className="mb-2">
            <strong>Flexible Decimal Precision:</strong> - Customize your area conversion results with CalcPlus. Choose
            from different decimal precision options, such as two decimal places, four decimal places, or rounded-off
            results, to match your specific needs.
          </li>
          <li className="mb-2">
            <strong>Mobile-Friendly Design:</strong> - Access CalcPlus&apos;s Area Converter seamlessly from any device,
            including smartphones, tablets, and desktops. Our responsive design ensures a consistent and user-friendly
            experience, regardless of the screen size or platform.
          </li>
          <li className="mb-2">
            <strong>Time-Saving and Convenient: </strong> - CalcPlus&apos;s Area Converter saves you valuable time by
            eliminating the need for manual calculations. Get accurate area conversions within seconds, freeing you to
            focus on other important tasks.
          </li>
        </ol>
        <p className="text-sm mt-4">
          <strong>Disclaimer:</strong> Please note that CalcPlus&apos;s Area Converter is for informational purposes
          only and should not be used as a substitute for professional measurement or engineering advice. Always verify
          the accuracy and appropriateness of the conversions for your specific needs. CalcPlus does not take
          responsibility for any inaccuracies or errors in the conversions provided by the tool.
        </p>
      </div>
    </>
  );
}

export default AreaCalculator;
