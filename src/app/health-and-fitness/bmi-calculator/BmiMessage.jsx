"use client";
const BmiMessage = ({ bmi }) => {
  const message = {
    bmi: "",
    sub: "",
    color: "",
    bg: "",
  };
  if (!bmi) {
    message.bmi = "You Have Not Calculated Your BMI Yet";
    message.sub = "Please Enter Your Weight And Height To Calculate Your BMI";
    message.color = "text-gray-700";
    message.bg = "bg-gray-200";
  }
  if (+bmi <= 0) {
    message.bmi = "You Have Entered Invalid Weight Or Height";
    message.sub = "Please Enter Valid Weight And Height To Calculate Your BMI";
    message.color = "text-gray-700";
    message.bg = "bg-gray-200";
  }
  if (bmi < 18.5 && bmi > 0) {
    message.bmi = `Your BMI is ${bmi.toFixed(2)}`;
    message.sub = `It indicates that you are underweight.`;
    message.color = "text-blue-700";
    message.bg = "bg-blue-200";
  }
  if (bmi >= 18.5 && bmi < 25) {
    message.bmi = `Your BMI is ${bmi.toFixed(2)}.`;
    message.sub = `It indicates that you are within a healthy weight range.`;
    message.color = "text-green-700";
    message.bg = "bg-green-200";
  }
  if (bmi >= 25 && bmi < 30) {
    message.bmi = `Your BMI is ${bmi.toFixed(2)}.`;
    message.sub = `It indicates that you are overweight.`;
    message.color = "text-yellow-700";
    message.bg = "bg-yellow-200";
  }
  if (bmi >= 30) {
    message.bmi = `Your BMI is ${bmi.toFixed(2)}.`;
    message.sub = `It indicates that you are obese.`;
    message.color = "text-red-700";
    message.bg = "bg-red-200";
  }
  return (
    <>
      {
        <div
          className={`mb-4 h-full rounded-lg ${message.bg} px-6 py-5 text-base ${message.color}`}
          role="alert"
        >
          <h4 className="mb-2 text-2xl font-medium leading-tight">{message.bmi}</h4>
          <p className="mb-4">{message.sub}</p>
          <hr className="border-success-600 opacity-30" />
        </div>
      }
    </>
  );
};

export default BmiMessage;
