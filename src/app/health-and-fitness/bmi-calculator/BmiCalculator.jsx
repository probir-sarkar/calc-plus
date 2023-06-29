"use client";
import { useState } from "react";
import { kgToLbs, lbsToKg, feetToCm, cmToFeet } from "@/utils/generalMaths";
import BmiMessage from "./BmiMessage";
const BmiCalculator = () => {
  const [weightMetric, setWeightMetric] = useState("kg");
  const [heightMetric, setHeightMetric] = useState("cm");
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();

  const changeWeightMetric = (metric) => {
    if (weightMetric === metric) return;
    if (weight) {
      metric === "kg" ? setWeight(lbsToKg(weight)) : setWeight(kgToLbs(weight));
    }
    setWeightMetric(metric);
  };

  const changeHeightMetric = (metric) => {
    if (heightMetric === metric) return;
    if (height) {
      metric === "cm" ? setHeight(feetToCm(height)) : setHeight(cmToFeet(height));
    }
    setHeightMetric(metric);
  };
  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    const weightInKg = weightMetric === "kg" ? weight : lbsToKg(weight);
    const heightInCm = heightMetric === "cm" ? height : feetToCm(height);
    const bmi = weightInKg / ((heightInCm / 100) * (heightInCm / 100));
    console.log(bmi);
    setBmi(bmi);
  };

  return (
    <div className="sm:grid grid-cols-5 gap-4 items-center w-full p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 ">
      <form className="col-span-3" onSubmit={calculateBMI}>
        <div className="mb-4">
          <div className="text-gray-700 font-bold mb-2 flex justify-between items-center">
            Weight ({weightMetric}):
            <div className="inline-flex m-2 cursor-pointer">
              <div
                className={`px-4 py-2 rounded-l-md ${
                  weightMetric === "kg" ? "text-white bg-purple-700 " : "bg-gray-300"
                }`}
                onClick={() => changeWeightMetric("kg")}
              >
                kg
              </div>
              <div
                className={`px-4 py-2 rounded-r-md bg-gray-300 ${
                  weightMetric === "lb" ? "text-white bg-purple-700 " : "bg-gray-300"
                }`}
                onClick={() => changeWeightMetric("lb")}
              >
                lb
              </div>
            </div>
          </div>

          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            id="weight"
            type="number"
            placeholder="Enter weight"
            required
            max={weightMetric == "kg" ? 635 : 1400}
            min={0}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            step="any"
          />
        </div>

        <div className="mb-4">
          <div className="text-gray-700 font-bold mb-2 flex justify-between items-center">
            Height ({heightMetric}):
            <div className="inline-flex m-2 cursor-pointer">
              <div
                className={`px-4 py-2 rounded-l-md ${
                  heightMetric === "cm" ? "text-white bg-purple-700 " : "bg-gray-300"
                }`}
                onClick={() => changeHeightMetric("cm")}
              >
                cm
              </div>
              <div
                className={`px-4 py-2 rounded-r-md bg-gray-300 ${
                  heightMetric === "ft" ? "text-white bg-purple-700 " : "bg-gray-300"
                }`}
                onClick={() => changeHeightMetric("ft")}
              >
                ft
              </div>
            </div>
          </div>

          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            id="height"
            type="number"
            placeholder="Enter height"
            required
            max={heightMetric == "cm" ? 275 : 9}
            min={0}
            onChange={(e) => setHeight(e.target.value)}
            value={height}
            step="any"
          />
        </div>

        <div className="text-center">
          <input
            className="bg-white text-purple-700 border-2 hover:bg-purple-700 hover:text-white cursor-pointer font-bold py-2 px-4 rounded ease-in-out duration-300"
            type="submit"
            value="Calculate BMI"
          />
        </div>
      </form>
      <div className="h-full col-span-2 sm:mt-0 mt-4">
        <BmiMessage bmi={bmi} />
      </div>
    </div>
  );
};

export default BmiCalculator;
