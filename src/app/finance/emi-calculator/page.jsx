"use client";
import React, { useState } from "react";

function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const rateOfInterest = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const numberOfPayments = parseFloat(loanTenure) * 12; // Monthly payments

    const emiValue =
      (principal *
        rateOfInterest *
        Math.pow(1 + rateOfInterest, numberOfPayments)) /
      (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    setEmi(emiValue.toFixed(2));
  };

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
    setEmi(null); // Reset EMI when the loan amount changes
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(e.target.value);
    setEmi(null); // Reset EMI when the interest rate changes
  };

  const handleLoanTenureChange = (e) => {
    setLoanTenure(e.target.value);
    setEmi(null); // Reset EMI when the loan tenure changes
  };

  return (
    <div className="w-full sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 space-y-4">
      <h1 className="text-3xl font-bold mb-4">EMI Calculator</h1>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-grow">
          <label className="text-lg mb-2" htmlFor="loanAmount">
            Loan Amount (INR):
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={handleLoanAmountChange}
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
          <label className="text-lg mb-2" htmlFor="loanTenure">
            Loan Tenure (Years):
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="number"
            id="loanTenure"
            value={loanTenure}
            onChange={handleLoanTenureChange}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
        onClick={calculateEmi}
      >
        Calculate EMI
      </button>
      {emi !== null && (
        <div className="mt-4">
          <p className="text-xl font-bold mb-2">Monthly EMI:</p>
          <p className="text-lg">{`₹ ${emi}`}</p>
        </div>
      )}
    </div>
  );
}

export default EmiCalculator;
