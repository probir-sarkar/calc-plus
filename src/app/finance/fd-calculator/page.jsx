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

    if (
      !isNaN(principal) &&
      !isNaN(rateOfInterest) &&
      !isNaN(time) &&
      rateOfInterest >= 0 &&
      time >= 0
    ) {
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
    <div className="w-full sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Fixed Deposit Calculator</h1>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-grow">
          <label className="text-lg mb-2" htmlFor="principalAmount">
            Principal Amount (INR):
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="number"
            id="principalAmount"
            value={principalAmount}
            onChange={handlePrincipalAmountChange}
          />
        </div>
        <div className="flex-grow">
          <label className="text-lg mb-2" htmlFor="interestRate">
            Interest Rate (% per annum):
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={handleInterestRateChange}
          />
        </div>
        <div className="flex-grow">
          <label className="text-lg mb-2" htmlFor="tenure">
            Tenure (Years):
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="number"
            id="tenure"
            value={tenure}
            onChange={handleTenureChange}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
        onClick={calculateMaturityAmount}
      >
        Calculate Maturity Amount
      </button>
      {maturityAmount !== null && (
        <div className="mt-4">
          <p className="text-xl font-bold mb-2">Maturity Amount:</p>
          <p className="text-lg">{`₹ ${maturityAmount}`}</p>
        </div>
      )}
    </div>
  );
}

export default FDCalculator;
