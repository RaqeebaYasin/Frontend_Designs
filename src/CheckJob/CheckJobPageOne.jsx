import React from 'react';

// Main component for the AI Job Scam Detector landing section
const App = () => {
  return (
    // Main container: white background, responsive padding, and fixed vertical section padding (py-20)
    <div className="bg-white p-4 sm:p-8 py-20">
      {/* Centered content container (max-w-xl) */}
      <div className="w-full max-w-xl mx-auto text-center"> 
        
        {/* Header Group: Icon and Title, centered and inline */}
        <div className="flex items-center justify-center mb-4 sm:mb-6"> 
          
          {/* Icon Container: Light teal background, rounded, with shadow */}
          <div className="
            bg-teal-100 
            text-teal-600 
            rounded-full 
            p-3
            flex 
            items-center 
            justify-center
            w-12 h-12 
            mr-3
            shadow-md
            flex-shrink-0
          ">
            {/* Security Shield SVG Icon */}
            <svg 
              className="w-8 h-8 sm:w-9 sm:h-9" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
                {/* Shield shape */}
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                {/* Checkmark inside shield */}
                <path d="M9 12l2 2 4-4"></path> 
            </svg>
          </div>

          {/* Main Title: Large, bold text for prominence */}
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
            AI Job Scam Detector
          </h1>
        </div>

        {/* Descriptive Text Section */}
        <div className="px-4 max-w-lg mx-auto">
            <p className="
              text-base 
              sm:text-lg
              text-gray-600
              leading-relaxed
            ">
              Paste any job offer or message below and our AI will analyze it for scam indicators in seconds.
            </p>
        </div>
      </div>
    </div>
  );
};

export default App;