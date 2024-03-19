import React from "react";

const DescriptionGenerator = ({ calculatorName, features }) => {
  return (
    <div className="text-gray-700 mt-10">
      <h2 className="text-2xl font-bold mb-4">{`${calculatorName} Description:`}</h2>
      <ol className="list-decimal ml-6 mb-8">
        {features.map((feature, index) => (
          <li className="mb-2" key={index}>
            <strong>{feature.title}:</strong> - {feature.description}
          </li>
        ))}
      </ol>
      <p className="text-sm mt-4">
        <strong>Disclaimer:</strong> Please note that {calculatorName} is for informational purposes only and should not
        be used as a substitute for professional advice. Users are encouraged to verify the accuracy of calculations for
        their specific requirements. {calculatorName} does not assume responsibility for any inaccuracies or errors
        resulting from the use of the calculator.
      </p>
    </div>
  );
};

export default DescriptionGenerator;
