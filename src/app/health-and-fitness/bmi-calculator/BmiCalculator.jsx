"use client";
import { useState } from "react";
import { kgToLbs, lbsToKg, feetToCm, cmToFeet } from "@/utils/generalMaths";
import PieChartWithNeedle from "../../../components/charts/PieChartWithNeedle/index";
const BmiCalculator = () => {
  const [weightMetric, setWeightMetric] = useState("kg");
  const [heightMetric, setHeightMetric] = useState("cm");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const changeWeightMetric = (metric) => {
    if (weightMetric === metric) return;
    metric === "kg" ? setWeight(lbsToKg(weight)) : setWeight(kgToLbs(weight));
    setWeightMetric(metric);
  };
  const changeHeightMetric = (metric) => {
    if (heightMetric === metric) return;
    metric === "cm" ? setHeight(feetToCm(height)) : setHeight(cmToFeet(height));
    setHeightMetric(metric);
  };
  return (
    <>
      <form>
        <div className="mb-4">
          <label
            className="text-gray-700 font-bold mb-2 flex justify-between items-center"
            htmlFor="weight"
          >
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
          </label>

          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            id="weight"
            type="number"
            placeholder="Enter weight"
            required
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="text-gray-700 font-bold mb-2 flex justify-between items-center"
            htmlFor="height"
          >
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
          </label>

          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            id="height"
            type="number"
            placeholder="Enter height"
            onChange={(e) => setHeight(e.target.value)}
            value={height}
          />
        </div>

        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Calculate BMI
          </button>
        </div>
      </form>
    </>
  );
};

export default BmiCalculator;
