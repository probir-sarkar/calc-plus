"use client";
import { useState } from "react";
import { kgToLbs, lbsToKg } from "@/utils/generalMaths";

const BmiCalculator = () => {
  const [weightMetric, setWeightMetric] = useState("kg");
  const [heightMetric, setHeightMetric] = useState("cm");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const changeWeightMetric = (metric) => {
    if (weightMetric === metric) return;
    metric === "kg" ? setWeight(kgToLbs(weight)) : setWeight(lbsToKg(weight));
    setWeightMetric(metric);
  };
  return (
    <div className="">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="weight">
              Weight (kg):
            </label>
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="height">
              Height (cm):
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              id="height"
              type="number"
              placeholder="Enter height"
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
      </div>
    </div>
  );
};

export default BmiCalculator;
