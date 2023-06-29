"use client";
const BmiMessage = ({ bmi }) => {
  console.log("bmi==>", bmi);
  let message = {
    bmi: "You have not calculated your BMI yet.",
    sub: "Please enter your weight and height to calculate your BMI.",
    color: "text-gray-700",
    bg: "bg-gray-200",
  };

  if (bmi && bmi > 0) {
    if (bmi < 18.5) {
      message.bmi = `Your BMI is ${bmi.toFixed(2)}.`;
      message.sub = "It indicates that you are underweight.";
      message.color = "text-blue-700";
      message.bg = "bg-blue-200";
    } else if (bmi < 25) {
      message.bmi = `Your BMI is ${bmi.toFixed(2)}.`;
      message.sub = "It indicates that you are within a healthy weight range.";
      message.color = "text-green-700";
      message.bg = "bg-green-200";
    } else if (bmi < 30) {
      message.bmi = `Your BMI is ${bmi.toFixed(2)}.`;
      message.sub = "It indicates that you are overweight.";
      message.color = "text-yellow-700";
      message.bg = "bg-yellow-200";
    } else {
      message.bmi = `Your BMI is ${bmi.toFixed(2)}.`;
      message.sub = "It indicates that you are obese.";
      message.color = "text-red-700";
      message.bg = "bg-red-200";
    }
  } else if (bmi <= 0) {
    message.bmi = "You have entered an invalid weight or height.";
    message.sub = "Please enter valid weight and height to calculate your BMI.";
    message.color = "text-red-700";
    message.bg = "bg-red-200";
  }

  return (
    <div
      className={`mb-4 h-full rounded-lg ${message.bg} px-6 py-5 text-base ${message.color}`}
      role="alert"
    >
      <h4 className="mb-2 text-2xl font-medium leading-tight">{message.bmi}</h4>
      <p className="mb-4">{message.sub}</p>
      <hr className="border-success-600 opacity-30" />
    </div>
  );
};

export default BmiMessage;
