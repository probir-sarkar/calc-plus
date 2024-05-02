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

    const emiValue = (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments)) / (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

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
    <>
      <div className="w-full sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 dark:bg-slate-900 space-y-4">
        <h1 className="text-3xl font-bold mb-4">EMI Calculator</h1>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="loanAmount">
              Loan Amount (INR):
            </label>
            <input className="border border-gray-300 rounded p-2 w-full" type="number" id="loanAmount" value={loanAmount} onChange={handleLoanAmountChange} />
          </div>
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="interestRate">
              Interest Rate (% per annum):
            </label>
            <input className="border border-gray-300 rounded p-2 w-full" type="number" id="interestRate" value={interestRate} onChange={handleInterestRateChange} />
          </div>
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="loanTenure">
              Loan Tenure (Years):
            </label>
            <input className="border border-gray-300 rounded p-2 w-full" type="number" id="loanTenure" value={loanTenure} onChange={handleLoanTenureChange} />
          </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md mt-4" onClick={calculateEmi}>
          Calculate EMI
        </button>
        {emi !== null && (
          <div className="mt-4">
            <p className="text-xl font-bold mb-2">Monthly EMI:</p>
            <p className="text-lg">{`₹ ${emi}`}</p>
          </div>
        )}
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Features and Functionality:</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li className="mb-2">
            <strong>Easy EMI Calculation:</strong> - CalcPlus&apos;s EMI Calculator simplifies the process of calculating equated monthly installments. Enter the loan amount,
            interest rate, and tenure, and the calculator swiftly computes the EMI.
          </li>
          <li className="mb-2">
            <strong>User-Friendly Interface:</strong> - The EMI Calculator boasts an intuitive interface for seamless interaction. Input your loan details, and receive the EMI
            result promptly.
          </li>
          <li className="mb-2">
            <strong>Immediate Results:</strong> - Experience instant feedback with real-time EMI calculation. Upon entering loan details, the calculator promptly displays the
            equated monthly installment.
          </li>
          <li className="mb-2">
            <strong>Input Validation:</strong> - Ensure accurate results with input validation. The calculator validates user input to accept only valid numerical values,
            preventing errors in calculations.
          </li>
          <li className="mb-2">
            <strong>Mobile-Friendly Design:</strong> - Access the EMI Calculator effortlessly across various devices. Whether on a smartphone, tablet, or desktop, CalcPlus ensures
            a seamless and responsive user experience.
          </li>
          <li className="mb-2">
            <strong>Time-Saving and Convenient: </strong> - Save time with CalcPlus&apos;s EMI Calculator, eliminating the need for manual calculations. Obtain precise EMI values
            within seconds, allowing you to plan your finances effectively.
          </li>
        </ol>
        <p className="text-sm mt-4">
          <strong>Disclaimer:</strong> Please note that CalcPlus&apos;s EMI Calculator serves informational purposes only and should not replace professional financial advice.
          Users are encouraged to verify the accuracy of EMI calculations for their specific loan requirements. CalcPlus does not assume responsibility for any inaccuracies or
          errors resulting from the use of the calculator.
        </p>
      </div>
    </>
  );
}

export default EmiCalculator;
