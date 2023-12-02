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
    <div className="w-full sm:p-10 p-5 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 space-y-4">
      <h1 className="text-3xl font-bold mb-4">GST Calculator</h1>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-grow">
          <label className="text-lg mb-2" htmlFor="originalAmount">
            Original Amount (INR):
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="number"
            id="originalAmount"
            value={originalAmount}
            onChange={handleOriginalAmountChange}
          />
        </div>
        <div className="flex-grow">
          <label className="text-lg mb-2" htmlFor="gstRate">
            GST Rate (%):
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full"
            type="number"
            id="gstRate"
            value={gstRate}
            onChange={handleGstRateChange}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
        onClick={calculateGst}
      >
        Calculate GST
      </button>
      {gstAmount !== null && totalAmount !== null && (
        <div className="mt-4">
          <p className="text-xl font-bold mb-2">GST Amount:</p>
          <p className="text-lg">{`₹ ${gstAmount}`}</p>
          <p className="text-xl font-bold mb-2 mt-4">
            Total Amount (Including GST):
          </p>
          <p className="text-lg">{`₹ ${totalAmount}`}</p>
        </div>
      )}
    </div>
  );
}

export default GstCalculator;
