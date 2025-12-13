import React from 'react';
import { Brain, BookOpen } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-teal-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Start Protecting Yourself Today
        </h2>
        
        {/* Subheading */}
        <p className="text-white/90 text-base md:text-lg mb-10 font-light">
          Don't become the next victim. Use our AI-powered detection to stay safe in your job search.
        </p>
        
        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Left Button: White Background */}
          <button className="flex items-center justify-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-sm w-full sm:w-auto">
            <Brain className="w-5 h-5" />
            <span>Try AI Analysis Now</span>
          </button>

          {/* Right Button: Outline / Transparent */}
          <button className="flex items-center justify-center gap-2 bg-transparent border border-white text-slate-900 px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
            <BookOpen className="w-5 h-5" />
            <span>Learn About Scams</span>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default CallToAction;