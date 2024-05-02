"use client";
import React, { useState } from "react";

function GstCalculator() {
  const [originalAmount, setOriginalAmount] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [gstAmount, setGstAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateGst = () => {
    const amount = parseFloat(originalAmount);
    const rate = parseFloat(gstRate);

    if (!isNaN(amount) && !isNaN(rate) && rate >= 0) {
      const gst = (amount * rate) / 100;
      setGstAmount(gst.toFixed(2));
      setTotalAmount((amount + gst).toFixed(2));
    } else {
      setGstAmount(null);
      setTotalAmount(null);
    }
  };

  const handleOriginalAmountChange = (e) => {
    setOriginalAmount(e.target.value);
    setGstAmount(null); // Reset GST amount when the original amount changes
    setTotalAmount(null); // Reset total amount when the original amount changes
  };

  const handleGstRateChange = (e) => {
    setGstRate(e.target.value);
    setGstAmount(null); // Reset GST amount when the GST rate changes
    setTotalAmount(null); // Reset total amount when the GST rate changes
  };

  return (
    <>
      <div className="w-full sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 dark:bg-slate-900 space-y-4">
        <h1 className="text-3xl font-bold mb-4">GST Calculator</h1>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="originalAmount">
              Original Amount (INR):
            </label>
            <input className="border border-gray-300 rounded p-2 w-full" type="number" id="originalAmount" value={originalAmount} onChange={handleOriginalAmountChange} />
          </div>
          <div className="flex-grow">
            <label className="text-lg mb-2" htmlFor="gstRate">
              GST Rate (%):
            </label>
            <input className="border border-gray-300 rounded p-2 w-full" type="number" id="gstRate" value={gstRate} onChange={handleGstRateChange} />
          </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md mt-4" onClick={calculateGst}>
          Calculate GST
        </button>
        {gstAmount !== null && totalAmount !== null && (
          <div className="mt-4">
            <p className="text-xl font-bold mb-2">GST Amount:</p>
            <p className="text-lg">{`₹ ${gstAmount}`}</p>
            <p className="text-xl font-bold mb-2 mt-4">Total Amount (Including GST):</p>
            <p className="text-lg">{`₹ ${totalAmount}`}</p>
          </div>
        )}
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Features and Functionality:</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li className="mb-2">
            <strong>Easy GST Calculation:</strong> - CalcPlus&apos;s GST Calculator simplifies the process of calculating Goods and Services Tax. Enter the base amount and GST
            rate, and the calculator swiftly computes the total amount including GST.
          </li>
          <li className="mb-2">
            <strong>User-Friendly Interface:</strong> - The GST Calculator boasts an intuitive interface for seamless interaction. Input your details, and receive the total amount
            including GST promptly.
          </li>
          <li className="mb-2">
            <strong>Immediate Results:</strong> - Experience instant feedback with real-time GST calculation. Upon entering details, the calculator promptly displays the total
            amount including GST.
          </li>
          <li className="mb-2">
            <strong>Input Validation:</strong> - Ensure accurate results with input validation. The calculator validates user input to accept only valid numerical values,
            preventing errors in calculations.
          </li>
          <li className="mb-2">
            <strong>Mobile-Friendly Design:</strong> - Access the GST Calculator effortlessly across various devices. Whether on a smartphone, tablet, or desktop, CalcPlus ensures
            a seamless and responsive user experience.
          </li>
          <li className="mb-2">
            <strong>Time-Saving and Convenient: </strong> - Save time with CalcPlus&apos;s GST Calculator, eliminating the need for manual calculations. Obtain precise total
            amounts including GST within seconds, allowing you to manage your finances effectively.
          </li>
        </ol>
        <p className="text-sm mt-4">
          <strong>Disclaimer:</strong> Please note that CalcPlus&apos;s GST Calculator serves informational purposes only and should not replace professional financial advice.
          Users are encouraged to verify the accuracy of GST calculations for their specific requirements. CalcPlus does not assume responsibility for any inaccuracies or errors
          resulting from the use of the calculator.
        </p>
      </div>
    </>
  );
}

export default GstCalculator;
