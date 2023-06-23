import BmiCalculator from "./BmiCalculator";
const BmiCalculatorPage = () => {
  return (
    <>
      <div className="">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">BMI Calculator</h2>
        <BmiCalculator />
      </div>
      <div className="text-center text-gray-500 mb-4">
        <p>
          BMI is a measurement of a person&apos;s leanness or corpulence based on their height and
          weight, and is intended to quantify tissue mass.
        </p>
        <p>
          It is widely used as a general indicator of whether a person has a healthy body weight for
          their height.
        </p>
        <p>
          Calculate your Body Mass Index (BMI) instantly and gain insights into your overall health
          and fitness level. BMI is a reliable indicator of your weight status, helping you make
          informed decisions to achieve a healthier lifestyle.
        </p>
      </div>
    </>
  );
};

export default BmiCalculatorPage;
