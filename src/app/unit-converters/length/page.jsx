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
  const [unit1, setUnit1] = useState("");
  const [unit2, setUnit2] = useState("");

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
    <>
      <h1 className="text-3xl font-bold text-center">Unit Converter</h1>
      <div class="w-full p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 space-y-5">
        <div className="">
          {/* from unit (kg) title */}
          <p className="text-xl mb-4"> From ({unit1})</p>
          <div className="flex justify-center md:flex-row flex-col-reverse gap-2">
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
        <hr class="my-12 h-0.5 border-t-0 bg-neutral-500 opacity-50" />
        <div className=" ">
          <p className="text-xl mb-4"> To ({unit2})</p>
          <div className="flex justify-center md:flex-row flex-col-reverse gap-2">
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
    </>
  );
}

export default UnitConverter;
