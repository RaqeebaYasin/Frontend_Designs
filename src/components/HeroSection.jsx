import React from "react";

const HeroSection = ({ id }) => {
  return (
    <section id={id} className="bg-[#fafafa] pt-24 pb-10 text-center px-4 mt-2">
      {/* Top Badge */}
      <div className="flex justify-center mb-3">
        <span className="text-[13px] font-medium bg-[#e6fdf9] text-teal-700 px-3 py-1 rounded-full border border-teal-300">
          ⚡ AI-Powered Detection
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Use AI to Detect Fake{" "} <br />
        <span className="text-teal-600">Job Offers Instantly</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-sm sm:text-base">
        Paste any job offer, email, or message below and our AI will analyze it for scam
        indicators in seconds. Protect yourself with advanced machine learning detection.
      </p>

      {/* Input Box */}
      <div className="mt-8 mx-auto bg-white rounded-xl border border-teal-200 shadow-sm w-full max-w-4xl p-5 text-left">
        <div className="flex justify-between items-center mb-2">
          <label className="font-semibold text-gray-800 text-sm sm:text-base">
            Paste Job Offer Text
          </label>
          <span className="flex items-center text-[12px] sm:text-sm text-teal-600 font-medium bg-[#e6fdf9] border border-teal-200 px-2 py-1 rounded-full">
            ⚡ Instant Analysis
          </span>
        </div>

        <textarea
          rows="3"
          placeholder="Paste the job offer, email, or any suspicious message here..."
          className="w-full border border-teal-100 rounded-md p-3 m-2 text-gray-700 text-sm focus:ring-2 focus:ring-teal-400 outline-none resize-none"
        ></textarea>

        <p className="text-gray-400 text-xs mt-2">
          Example: "Work from home! Make $5000/week with no experience required! Just send
          $200 for training materials to get started immediately!"
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-5 space-y-3 sm:space-y-0 sm:space-x-3">
          <button className="w-full sm:w-auto bg-teal-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-teal-600 transition-all duration-300">
            Check Now
          </button>
          <button className="w-full sm:w-auto bg-white text-teal-600 font-semibold px-5 py-2 rounded-lg border border-teal-400 hover:bg-teal-50 transition-all duration-300">
            Try Sample
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;