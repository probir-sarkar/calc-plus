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
    <>
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
        <button className="bg-blue-500 text-white p-2 rounded-md mt-4" onClick={calculateAge}>
          Calculate Age
        </button>
        {age !== null && (
          <div className="mt-4">
            <p className="text-xl font-bold mb-2">Age:</p>
            <p className="text-lg">{`You are ${age} years old.`}</p>
          </div>
        )}
      </div>
      <div className="text-gray-700 mt-10">
        <h2 className="text-2xl font-bold mb-4">Features and Functionality:</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li className="mb-2">
            <strong>Accurate Age Calculation:</strong> - CalcPlus&apos;s Age Calculator provides precise age
            calculations based on inputted dates. Simply enter the birthdate, and the calculator instantly computes the
            age.
          </li>
          <li className="mb-2">
            <strong>User-Friendly Interface:</strong> - The Age Calculator features an intuitive interface designed for
            effortless navigation. Input the birthdate, and obtain the age result swiftly and conveniently.
          </li>
          <li className="mb-2">
            <strong>Real-Time Age Updates:</strong> - Experience real-time updates as you input birthdates into the
            calculator. Watch as the tool instantly calculates and displays the age, allowing for quick adjustments and
            verifications.
          </li>
          <li className="mb-2">
            <strong>Input Validation:</strong> - Ensure accurate age calculations with input validation. The calculator
            validates user input to accept only valid date formats, preventing errors in age determination.
          </li>
          <li className="mb-2">
            <strong>Mobile-Friendly Design:</strong> - Access the Age Calculator seamlessly across various devices,
            including smartphones, tablets, and desktops. CalcPlus ensures a responsive and consistent user experience
            across all platforms.
          </li>
          <li className="mb-2">
            <strong>Time-Saving and Convenient: </strong> - Save time with CalcPlus&apos;s Age Calculator, eliminating
            manual age calculations. Obtain accurate age results within seconds, allowing you to focus on other tasks.
          </li>
        </ol>
        <p className="text-sm mt-4">
          <strong>Disclaimer:</strong> Please note that CalcPlus&apos;s Age Calculator is for informational purposes
          only and should not replace professional advice. Users are encouraged to verify the accuracy of age
          calculations for their specific requirements. CalcPlus does not assume responsibility for any inaccuracies or
          errors resulting from the use of the calculator.
        </p>
      </div>
      <div className="text-gray-700 mt-10">
        <h2 className="text-2xl font-bold mb-4">Features and Functionality:</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li className="mb-2">
            <strong>Efficient Percentage Calculation:</strong> - CalcPlus&apos;s Percentage Calculator facilitates quick
            and accurate percentage calculations. Input the original number and percentage, and the calculator instantly
            computes the result.
          </li>
          <li className="mb-2">
            <strong>User-Friendly Interface:</strong> - The Percentage Calculator boasts a user-friendly interface
            designed for seamless interaction. Enter the original number and percentage, and receive the calculated
            result promptly.
          </li>
          <li className="mb-2">
            <strong>Real-Time Result Updates:</strong> - Experience real-time updates as you input values into the
            calculator. Watch as the tool instantly computes and displays the percentage result, allowing for quick
            adjustments and verifications.
          </li>
          <li className="mb-2">
            <strong>Input Validation:</strong> - Ensure accurate calculations with input validation. The calculator
            validates user input to accept only numeric values, preventing errors in percentage determination.
          </li>
          <li className="mb-2">
            <strong>Mobile-Friendly Design:</strong> - Access the Percentage Calculator effortlessly across various
            devices, including smartphones, tablets, and desktops. CalcPlus ensures a responsive and consistent user
            experience across all platforms.
          </li>
          <li className="mb-2">
            <strong>Time-Saving and Convenient: </strong> - Save time with CalcPlus&apos;s Percentage Calculator,
            eliminating manual percentage calculations. Obtain precise results within seconds, allowing you to focus on
            other tasks.
          </li>
        </ol>
        <p className="text-sm mt-4">
          <strong>Disclaimer:</strong> Please note that CalcPlus&apos;s Percentage Calculator is for informational
          purposes only and should not replace professional advice. Users are encouraged to verify the accuracy of
          percentage calculations for their specific requirements. CalcPlus does not assume responsibility for any
          inaccuracies or errors resulting from the use of the calculator.
        </p>
      </div>
    </>
  );
}

export default AgeCalculator;
