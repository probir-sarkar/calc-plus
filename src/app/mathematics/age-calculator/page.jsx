"use client";
import React, { useState } from "react";
import { format, differenceInYears, parse } from "date-fns";

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const parsedBirthdate = parse(birthdate, "yyyy-MM-dd", new Date());

    if (!isNaN(parsedBirthdate.getTime())) {
      const ageInYears = differenceInYears(new Date(), parsedBirthdate);
      setAge(ageInYears);
    } else {
      setAge(null);
    }
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
    setAge(null); // Reset age when the birthdate changes
  };

  return (
    <div className="w-full sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Age Calculator</h1>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-grow">
          <label className="text-lg mb-2" htmlFor="birthdate">
            Birthdate:
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      {age !== null && (
        <div className="mt-4">
          <p className="text-xl font-bold mb-2">Age:</p>
          <p className="text-lg">{`You are ${age} years old.`}</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
