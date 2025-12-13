import React from 'react';

/**
 * ContactSection component.
 * Displays contact information in a stylized card format consistent with the application's aesthetic.
 */
const ContactSection = () => {
  return (
    // Section wrapper with padding and light background
    <div className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Need Support?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions about our AI? Need help analyzing a suspicious offer? We're here to support you.
          </p>
        </div>
        
        {/* Main Contact Card: Styled for visual prominence and subtle animation */}
        <div 
          className="
            bg-white 
            p-8 sm:p-12 
            rounded-2xl 
            shadow-xl 
            border border-teal-200 
            flex 
            flex-col 
            items-center 
            justify-center
            transform 
            transition-all 
            duration-500 
            hover:shadow-2xl hover:-translate-y-1
          "
        >
          
          {/* Stylized Icon Container */}
          <div className="
            w-20 h-20 
            rounded-full 
            bg-teal-100 
            border-4 border-teal-200 
            flex 
            items-center 
            justify-center 
            mb-8
            transition-colors duration-300
          ">
            {/* Phone Icon with pulsating animation */}
            <svg 
              className="w-10 h-10 text-teal-600 animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>

          {/* Email Contact Information Block */}
          <div className="mb-10 text-center">
            <p className="text-gray-700 mb-6 text-base sm:text-lg">
              Contact form coming soon. For immediate assistance, please email us directly at:
            </p>
            
            {/* Email Link: Balanced text size and interactive underline effect */}
            <a 
              href="mailto:support@jobscanfinder.com" 
              className="
                text-xl sm:text-2xl 
                font-semibold
                text-teal-600 
                hover:text-teal-700 
                transition-colors 
                duration-200 
                tracking-tight
                inline-block
                relative
              "
            >
              support@jobscanfinder.com
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
          
          {/* Response Time Information */}
          <div className="text-center mt-4">
            <p className="text-gray-700 text-sm sm:text-base">
              We typically respond within <span className="font-bold text-teal-700">2-4 hours</span> during business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;