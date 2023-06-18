const BmiCalculator = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64 p-6 bg-gray-200 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="weight" className="text-gray-800 mb-2">
            Weight (kg)
          </label>
          <input type="number" id="weight" className="px-3 py-2 border border-gray-300 rounded" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="height" className="text-gray-800 mb-2">
            Height (cm)
          </label>
          <input type="number" id="height" className="px-3 py-2 border border-gray-300 rounded" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="button">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default BmiCalculator;
