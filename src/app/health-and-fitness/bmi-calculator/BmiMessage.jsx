"use client";
const BmiMessage = ({ bmi }) => {
  if (bmi === 0) return null;
  const message = {
    message: "",
    color: "",
  };
  if (bmi < 18.5) {
    message.message = `Your BMI is ${bmi.toFixed(2)}. It indicates that you are underweight.`;
    message.color = "text-blue-500";
  }
  if (bmi >= 18.5 && bmi < 25) {
    message.message = `Your BMI is ${bmi.toFixed(2)}. It falls within the normal weight range.`;
    message.color = "text-green-500";
  }
  if (bmi >= 25 && bmi < 30) {
    message.message = `Your BMI is ${bmi.toFixed(
      2
    )}. It indicates that you are slightly overweight.`;
    message.color = "text-yellow-500";
  }
  if (bmi >= 30) {
    message.message = `Your BMI is ${bmi.toFixed(2)}. It indicates that you have obesity.`;
    message.color = "text-red-500";
  }
  return <>{<p className={`text-2xl font-bold ${message.color}`}>{message.message}</p>}</>;
};

export default BmiMessage;
