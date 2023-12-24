"use client";
import React, { useState } from "react";
const lengthUnits = [
  { label: "Millimeter (mm)", value: "mm", factor: 0.001 },
  { label: "Centimeter (cm)", value: "cm", factor: 0.01 },
  { label: "Meter (m)", value: "m", factor: 1 },
  { label: "Kilometer (km)", value: "km", factor: 1000 },
  { label: "Inch (in)", value: "in", factor: 0.0254 },
  { label: "Foot (ft)", value: "ft", factor: 0.3048 },
  { label: "Yard (yd)", value: "yd", factor: 0.9144 },
  { label: "Mile (mi)", value: "mi", factor: 1609.344 },
  { label: "Nautical mile (nmi)", value: "nmi", factor: 1852 },
  { label: "Light-year (ly)", value: "ly", factor: 9460730472580800 },
  { label: "Astronomical unit (AU)", value: "AU", factor: 149597870700 },
  { label: "Parsec (pc)", value: "pc", factor: 30856775814671900 },
  { label: "Fathom", value: "fathom", factor: 1.8288 },
  { label: "Furlong", value: "furlong", factor: 201.168 },
  { label: "Hand", value: "hand", factor: 0.1016 },
  { label: "League", value: "league", factor: 4828.032 },
  { label: "Rod", value: "rod", factor: 5.0292 },
  { label: "Cable length", value: "cable", factor: 185.2 },
  { label: "Angstrom", value: "angstrom", factor: 1e-10 },
  { label: "Micron", value: "micron", factor: 1e-6 },
];
const convertLength = (value, from, to) => {
  const fromUnit = lengthUnits.find((unit) => unit.value === from);
  const toUnit = lengthUnits.find((unit) => unit.value === to);
  return (value * fromUnit.factor) / toUnit.factor;
};

function UnitConverter() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [unit1, setUnit1] = useState("mm");
  const [unit2, setUnit2] = useState("mm");

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
    setInput2(convertLength(e.target.value, unit1, unit2));
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
    setInput1(convertLength(e.target.value, unit2, unit1));
  };

  const handleUnit1Change = (e) => {
    setUnit1(e.target.value);
    const convertedValue = convertLength(input1, unit1, e.target.value);
    setInput1(convertedValue);
  };

  const handleUnit2Change = (e) => {
    setUnit2(e.target.value);
    const convertedValue = convertLength(input2, unit2, e.target.value);
    setInput2(convertedValue);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Length Converter</h1>
      <div class="w-full  sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 space-y-4 lg:flex">
        <div className="lg:w-3/5 space-y-4">
          <div className="">
            {/* from unit (kg) title */}
            <p className="text-xl mb-4"> From ({unit1})</p>
            <div className="flex md:flex-row flex-col-reverse gap-2">
              <input
                class="border border-gray-300 rounded p-2"
                type="number"
                value={input1}
                onChange={handleInput1Change}
              />

              <select
                class="border border-gray-300 rounded p-2"
                value={unit1}
                onChange={handleUnit1Change}
              >
                {lengthUnits.map((unit) => (
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
                class="border border-gray-300 rounded p-2"
                type="number"
                value={input2}
                onChange={handleInput2Change}
              />

              <select
                class="border border-gray-300 rounded p-2"
                value={unit2}
                onChange={handleUnit2Change}
              >
                {lengthUnits.map((unit) => (
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
                {input1} <span className="text-gray-600">({unit1})</span> is
                equal to {input2}{" "}
                <span className="text-gray-600">({unit2})</span>
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="text-gray-700 mt-10">
        <h2 className="text-2xl font-bold mb-4">Features and Functionality:</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li className="mb-2">
            <strong>Comprehensive Length Conversion:</strong> - CalcPlus&apos;s
            Length Converter covers a wide range of commonly used length units,
            including inches, feet, yards, meters, centimeters, millimeters, and
            kilometers. Enjoy the flexibility of converting between any
            combination of units effortlessly.
          </li>
          <li className="mb-2">
            <strong>User-Friendly Interface:</strong> - The Length Converter on
            CalcPlus features a user-friendly interface designed for easy
            navigation and seamless conversion. Enter your measurement in one
            unit, select the desired output unit, and receive the precise
            conversion instantly.
          </li>
          <li className="mb-2">
            <strong>Real-Time Conversion:</strong> - Experience real-time
            conversion as you input values into the length converter. Watch as
            the tool updates the conversion instantly, allowing you to
            experiment with different measurements and units.
          </li>
          <li className="mb-2">
            <strong>Flexible Decimal Precision:</strong> - Customize your length
            conversion results with CalcPlus. Choose from different decimal
            precision options, such as two decimal places, four decimal places,
            or rounded-off results, to match your specific needs.
          </li>
          <li className="mb-2">
            <strong>Mobile-Friendly Design:</strong> - Access CalcPlus&apos;s
            Length Converter seamlessly from any device, including smartphones,
            tablets, and desktops. Our responsive design ensures a consistent
            and user-friendly experience, regardless of the screen size or
            platform.
          </li>
          <li className="mb-2">
            <strong>Time-Saving and Convenient: </strong> - CalcPlus&apos;s
            Length Converter saves you valuable time by eliminating the need for
            manual calculations. Get accurate length conversions within seconds,
            freeing you to focus on other important tasks.
          </li>
        </ol>
        <p className="text-sm mt-4">
          <strong>Disclaimer:</strong> Please note that CalcPlus&apos;s Length
          Converter is for informational purposes only and should not be used as
          a substitute for professional measurement or engineering advice.
          Always verify the accuracy and appropriateness of the conversions for
          your specific needs. CalcPlus does not take responsibility for any
          inaccuracies or errors in the conversions provided by the tool.
        </p>
      </div>
    </main>
  );
}

export default UnitConverter;
