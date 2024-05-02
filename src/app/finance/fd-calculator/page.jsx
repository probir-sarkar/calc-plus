"use client";
import React, { useState } from "react";

function FDCalculator() {
  const [principalAmount, setPrincipalAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturityAmount = () => {
    const principal = parseFloat(principalAmount);
    const rateOfInterest = parseFloat(interestRate) / 100;
    const time = parseFloat(tenure);

    if (!isNaN(principal) && !isNaN(rateOfInterest) && !isNaN(time) && rateOfInterest >= 0 && time >= 0) {
      const maturity = principal * (1 + rateOfInterest * time);
      setMaturityAmount(maturity.toFixed(2));
    } else {
      setMaturityAmount(null);
    }
  };

  const handlePrincipalAmountChange = (e) => {
    setPrincipalAmount(e.target.value);
    setMaturityAmount(null); // Reset maturity amount when the principal amount changes
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(e.target.value);
    setMaturityAmount(null); // Reset maturity amount when the interest rate changes
  };

  const handleTenureChange = (e) => {
    setTenure(e.target.value);
    setMaturityAmount(null); // Reset maturity amount when the tenure changes
  };

  return (
    <>
      <div className="w-full sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 dark:bg-slate-900 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Fixed Deposit Calculator</h1>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="principalAmount">
              Principal Amount (INR):
            </label>
            <input className="border border-gray-300 rounded p-2 w-full" type="number" id="principalAmount" value={principalAmount} onChange={handlePrincipalAmountChange} />
          </div>
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="interestRate">
              Interest Rate (% per annum):
            </label>
            <input className="border border-gray-300 rounded p-2 w-full" type="number" id="interestRate" value={interestRate} onChange={handleInterestRateChange} />
          </div>
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="tenure">
              Tenure (Years):
            </label>
            <input className="border border-gray-300 rounded p-2 w-full" type="number" id="tenure" value={tenure} onChange={handleTenureChange} />
          </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md mt-4" onClick={calculateMaturityAmount}>
          Calculate Maturity Amount
        </button>
        {maturityAmount !== null && (
          <div className="mt-4">
            <p className="text-xl font-bold mb-2">Maturity Amount:</p>
            <p className="text-lg">{`₹ ${maturityAmount}`}</p>
          </div>
        )}
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Features and Functionality:</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li className="mb-2">
            <strong>Easy FD Calculation:</strong> - CalcPlus&apos;s Fixed Deposit (FD) Calculator simplifies the process of calculating returns on fixed deposits. Enter the
            principal amount, interest rate, and tenure, and the calculator swiftly computes the maturity amount.
          </li>
          <li className="mb-2">
            <strong>User-Friendly Interface:</strong> - The FD Calculator boasts an intuitive interface for seamless interaction. Input your deposit details, and receive the
            maturity amount promptly.
          </li>
          <li className="mb-2">
            <strong>Immediate Results:</strong> - Experience instant feedback with real-time FD calculation. Upon entering deposit details, the calculator promptly displays the
            maturity amount.
          </li>
          <li className="mb-2">
            <strong>Input Validation:</strong> - Ensure accurate results with input validation. The calculator validates user input to accept only valid numerical values,
            preventing errors in calculations.
          </li>
          <li className="mb-2">
            <strong>Mobile-Friendly Design:</strong> - Access the FD Calculator effortlessly across various devices. Whether on a smartphone, tablet, or desktop, CalcPlus ensures a
            seamless and responsive user experience.
          </li>
          <li className="mb-2">
            <strong>Time-Saving and Convenient: </strong> - Save time with CalcPlus&apos;s FD Calculator, eliminating the need for manual calculations. Obtain precise maturity
            values within seconds, allowing you to plan your investments effectively.
          </li>
        </ol>
        <p className="text-sm mt-4">
          <strong>Disclaimer:</strong> Please note that CalcPlus&apos;s FD Calculator serves informational purposes only and should not replace professional financial advice. Users
          are encouraged to verify the accuracy of FD calculations for their specific investment requirements. CalcPlus does not assume responsibility for any inaccuracies or
          errors resulting from the use of the calculator.
        </p>
      </div>
    </>
  );
}

export default FDCalculator;
