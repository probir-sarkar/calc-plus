/* eslint-disable no-shadow */
"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;
const data = [
  { name: "Underweight", value: 8.5, color: "blue" },
  { name: "Normal weight", value: 6.4, color: "green" },
  { name: "Overweight", value: 5, color: "yellow" },
  { name: "Obesity", value: 5, color: "red" },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;

const PieChartWithNeedle = ({ bmi }) => {
  let value = bmi - 10;
  if (value < 0) value = 0;
  if (value > 24.8) value = 24.8;

  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return (
      <>
        <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />
        <path
          d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
          stroke="#none"
          fill={color}
        />
      </>
    );
  };

  return (
    <PieChart width={300} height={250} className="z-[-1]">
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle(value, data, cx, cy, iR, oR, "#000")}
    </PieChart>
  );
};

export default PieChartWithNeedle;
