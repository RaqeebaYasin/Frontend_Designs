import React from 'react';

const ScamLandscape = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Current Scam Landscape
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-time insights into job scam trends and our community's protection efforts.
          </p>
        </div>

        {/* Stats Grid - Single Row (Larger Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Scams Detected - 3D Hover */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center transition-all duration-300 hover:transform hover:scale-105 hover:rotate-y-6 hover:shadow-2xl">
            <div className="text-3xl font-bold text-gray-900 mb-3">15,847</div>
            <div className="text-base text-gray-600 font-medium">Scams Detected This Month</div>
          </div>

          {/* LinkedIn Platform - 3D Hover */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center transition-all duration-300 hover:transform hover:scale-105 hover:-rotate-y-6 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold text-base">in</span>
              </div>
              <div className="text-xl font-bold text-gray-900">LinkedIn</div>
            </div>
            <div className="text-base text-gray-600 font-medium">Top Platform for Scams</div>
          </div>

          {/* Increase vs Last Year - 3D Hover */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center transition-all duration-300 hover:transform hover:scale-105 hover:rotate-x-6 hover:shadow-2xl">
            <div className="text-3xl font-bold text-red-500 mb-3">+34%</div>
            <div className="text-base text-gray-600 font-medium">Increase vs Last Year</div>
          </div>

          {/* Protected Users - 3D Hover */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center transition-all duration-300 hover:transform hover:scale-105 hover:-rotate-x-6 hover:shadow-2xl">
            <div className="text-3xl font-bold text-green-600 mb-3">89,234</div>
            <div className="text-base text-gray-600 font-medium">Protected Users</div>
          </div>
        </div>

        {/* Scam Types Section - 3 Wider Boxes with Different Colors */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Most Common Scam Types
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Work from Home Box - Light Red Background */}
            <div className="bg-[#fff0f0] rounded-lg p-5 border border-gray-200 text-center transition-all duration-300 hover:border-red-500 hover:border-2 hover:shadow-md min-h-[85px] flex flex-col justify-center w-full">
              <div className="text-lg font-bold text-teal-600 mb-1">42%</div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Work from Home</h4>
              <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden mb-1">
                <div className="bg-teal-500 h-1.5 rounded-full w-[42%]" />
              </div>
              <p className="text-xs text-gray-500">42% of all scams</p>
            </div>

            {/* Upfront Fees Box - Light Orange Background */}
            <div className="bg-[#fff7ed] rounded-lg p-5 border border-gray-200 text-center transition-all duration-300 hover:border-red-500 hover:border-2 hover:shadow-md min-h-[85px] flex flex-col justify-center w-full">
              <div className="text-lg font-bold text-blue-600 mb-1">28%</div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Upfront Fees</h4>
              <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden mb-1">
                <div className="bg-blue-500 h-1.5 rounded-full w-[28%]" />
              </div>
              <p className="text-xs text-gray-500">28% of all scams</p>
            </div>

            {/* Fake Companies Box - Light Yellow Background */}
            <div className="bg-[#fffef0] rounded-lg p-5 border border-gray-200 text-center transition-all duration-300 hover:border-red-500 hover:border-2 hover:shadow-md min-h-[85px] flex flex-col justify-center w-full">
              <div className="text-lg font-bold text-purple-600 mb-1">23%</div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Fake Companies</h4>
              <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden mb-1">
                <div className="bg-purple-500 h-1.5 rounded-full w-[23%]" />
              </div>
              <p className="text-xs text-gray-500">23% of all scams</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for 3D Transform Effects */}
      <style jsx>{`
        .hover\\:rotate-y-6:hover {
          transform: perspective(1000px) rotateY(6deg) scale(1.05);
        }
        
        .hover\\:-rotate-y-6:hover {
          transform: perspective(1000px) rotateY(-6deg) scale(1.05);
        }
        
        .hover\\:rotate-x-6:hover {
          transform: perspective(1000px) rotateX(6deg) scale(1.05);
        }
        
        .hover\\:-rotate-x-6:hover {
          transform: perspective(1000px) rotateX(-6deg) scale(1.05);
        }
        
        .hover\\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default ScamLandscape;