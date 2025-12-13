import React from "react";

const Stats = () => {
  return (
    <div className="mt-12 mb-12 flex flex-wrap justify-center items-center text-center gap-16 md:gap-24 lg:gap-32">
      <div className="p-4">
        <h3 className="text-teal-600 font-bold text-2xl">95.2%</h3>
        <p className="text-gray-600 text-sm mt-2">Accuracy Rate</p>
      </div>
      <div className="p-4">
        <h3 className="text-blue-600 font-bold text-2xl">&lt;3s</h3>
        <p className="text-gray-600 text-sm mt-2">Analysis Time</p>
      </div>
      <div className="p-4">
        <h3 className="text-green-600 font-bold text-2xl">50,000+</h3>
        <p className="text-gray-600 text-sm mt-2">Jobs Analyzed</p>
      </div>
      <div className="p-4">
        <h3 className="text-purple-600 font-bold text-2xl">$2.5M</h3>
        <p className="text-gray-600 text-sm mt-2">Losses Prevented</p>
      </div>
    </div>
  );
};

export default Stats;
