import BmiCalculator from "./BmiCalculator";
import Desciption from "./description.mdx"
const BmiCalculatorPage = () => {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold mb-">BMI Calculator</h1>
        <BmiCalculator />
      </div>
      <Desciption />
    </>
  );
};

export default BmiCalculatorPage;
