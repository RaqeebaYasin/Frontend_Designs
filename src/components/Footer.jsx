import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F8FAFC] pt-16 pb-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Left Column: Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* Shield Icon */}
              <svg 
                className="w-6 h-6 text-teal-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-lg font-bold text-slate-900">Job Scam Finder</span>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-6 pr-4">
              AI-powered job scam detection protecting thousands of job seekers worldwide. Instant analysis, precise results.
            </p>

            <div className="flex items-center gap-4">
              {/* Phone Icon */}
              <button className="text-teal-600 hover:text-teal-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              {/* Globe Icon */}
              <button className="text-teal-600 hover:text-teal-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </button>
            </div>
          </div>

          {/* Spacer Column (optional for exact alignment, or just let grid gap handle it) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Middle Column: AI Tools */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-slate-900 mb-4">AI Tools</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">AI Job Checker</a></li>
              <li><a href="#" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Report Scam</a></li>
              <li><a href="#" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Scam Database</a></li>
              <li><a href="#" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Browser Extension</a></li>
            </ul>
          </div>

          {/* Right Column: Support */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-slate-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Learning Center</a></li>
              <li><a href="#" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Divider & Copyright */}
        <div className="border-t border-slate-200 pt-8 mt-8">
          <p className="text-center text-slate-500 text-sm">
            © 2025 Job Scam Finder. AI-powered protection for job seekers worldwide.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;