import BmiCalculator from "./BmiCalculator";
const BmiCalculatorPage = () => {
  return (
    <>
      <div className="">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">BMI Calculator</h1>
        <BmiCalculator />
      </div>
      <div className="text-gray-700 mt-10">
        <h2 className="text-2xl font-bold mb-4">Disclaimer:</h2>
        <p className="mb-8">
          The information provided on this website is for general informational purposes only and
          should not be considered medical advice. Always consult with a qualified healthcare
          professional for personalized guidance.
        </p>

        <h2 className="text-2xl font-bold mb-4">Additional Information about BMI:</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li className="mb-2">
            <strong>What is BMI?</strong> - BMI stands for Body Mass Index, which is a numerical
            value calculated using a person&apos;s weight and height. It is commonly used as a
            screening tool to assess whether an individual has a healthy body weight.
          </li>
          <li className="mb-2">
            <strong>How is BMI calculated?</strong> - BMI is calculated by dividing a person&apos;s
            weight in kilograms by the square of their height in meters. The formula is: BMI =
            weight (kg) / (height (m))^2.
          </li>
          <li className="mb-2">
            <strong>BMI Categories:</strong>
            <ul className="list-disc ml-6">
              <li>Underweight: BMI less than 18.5</li>
              <li>Normal weight: BMI between 18.5 and 24.9</li>
              <li>Overweight: BMI between 25 and 29.9</li>
              <li>Obesity: BMI 30 or higher</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Limitations of BMI:</strong> - While BMI can be a useful tool for assessing body
            weight, it has limitations. It does not take into account factors such as muscle mass,
            body composition, and distribution of fat. Therefore, it may not accurately reflect the
            health status of individuals with high muscle mass or other variations in body
            composition.
          </li>
          <li className="mb-2">
            <strong>Health Risks Associated with BMI:</strong> - Both low and high BMI values can be
            associated with health risks. Being underweight or overweight can increase the risk of
            certain health conditions, such as cardiovascular disease, diabetes, and musculoskeletal
            issues. However, it&apos;s important to note that BMI is just one indicator and should
            be considered in conjunction with other health assessments.
          </li>
          <li className="mb-2">
            <strong>Healthy Lifestyle:</strong> - Maintaining a healthy body weight is important for
            overall well-being. It&apos;s recommended to focus on adopting a balanced diet, engaging
            in regular physical activity, and seeking professional guidance to develop a
            personalized approach to health and fitness.
          </li>
        </ol>

        <p className="text-sm">
          Remember, the information provided here is general in nature and should not replace
          personalized advice from a healthcare professional. Encourage your website visitors to
          consult with a qualified healthcare provider for specific guidance regarding their
          individual health and wellness.
        </p>
      </div>
    </>
  );
};

export default BmiCalculatorPage;
