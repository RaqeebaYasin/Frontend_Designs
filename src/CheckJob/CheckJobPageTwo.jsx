// src/CheckJob/CheckJobPageTwo.jsx
import React, { useState, useEffect, useRef } from 'react';

const CheckJobPageTwo = () => {
  const [jobText, setJobText] = useState('');
  const [isRightBoxClicked, setIsRightBoxClicked] = useState(false);
  const textLength = jobText.length;
  const isOptimal = textLength >= 200;
  
  // Refs for animation triggers and textarea focus
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);
  const tipsBoxRef = useRef(null);
  const textareaRef = useRef(null);
  const [isVisible, setIsVisible] = useState({
    leftBox: false,
    rightBox: false,
    tipsBox: false
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftBoxRef.current) {
              setIsVisible(prev => ({ ...prev, leftBox: true }));
            } else if (entry.target === rightBoxRef.current) {
              setIsVisible(prev => ({ ...prev, rightBox: true }));
            } else if (entry.target === tipsBoxRef.current) {
              setIsVisible(prev => ({ ...prev, tipsBox: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (leftBoxRef.current) observer.observe(leftBoxRef.current);
    if (rightBoxRef.current) observer.observe(rightBoxRef.current);
    if (tipsBoxRef.current) observer.observe(tipsBoxRef.current);

    return () => observer.disconnect();
  }, []);

  // Handler for right box click
  const handleRightBoxClick = () => {
    setIsRightBoxClicked(true);
    
    // Focus on textarea
    if (textareaRef.current) {
      textareaRef.current.focus();
      
      // Add a pulsing border animation
      textareaRef.current.classList.add('border-pulse');
      
      // Scroll to textarea with smooth behavior
      textareaRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // Remove animation after 3 seconds
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.classList.remove('border-pulse');
        }
        setIsRightBoxClicked(false);
      }, 3000);
    }
  };

  // Handler for text input change
  const handleTextChange = (event) => {
    setJobText(event.target.value);
  };

  // Hover animation handler
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 2;
    const rotateX = ((centerY - y) / centerY) * 2;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div className="font-sans py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Content Area (Two Columns) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Job Offer Analysis Input */}
          <div 
            ref={leftBoxRef}
            className={`p-8 bg-white border border-gray-200 rounded-2xl shadow-xl transition-all duration-700 transform ${
              isVisible.leftBox 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
              transformStyle: 'preserve-3d',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 10px 20px rgba(88, 191, 167, 0.1)'
            }}
          >
            {/* Header with floating animation */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 border-2 border-white shadow-lg animate-pulse"></div>
              <h2 className="text-xl font-semibold text-gray-800">Job Offer Analysis</h2>
            </div>

            <p className="text-sm text-gray-600 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Paste the complete job offer text, email, or message for comprehensive AI analysis
            </p>

            {/* Textarea Input with focus animation */}
            <label htmlFor="job-offer-text" className="block text-sm font-medium text-gray-700 mb-2">
              Job Offer Text <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <textarea
                ref={textareaRef}
                id="job-offer-text"
                rows="8"
                className="
                  w-full 
                  p-4 
                  border-2 
                  border-gray-200 
                  focus:border-teal-400
                  focus:ring-4 
                  focus:ring-teal-100 
                  rounded-xl 
                  transition-all 
                  duration-300
                  resize-none
                  text-gray-700
                  bg-white
                  shadow-sm
                  group-hover:border-teal-300
                  group-hover:shadow-md
                "
                placeholder="Paste the complete job offer, email message, or any suspicious communication here..."
                value={jobText}
                onChange={handleTextChange}
              />
              <div className="absolute bottom-3 left-4 text-xs text-gray-500 transition-opacity duration-300 group-hover:opacity-80">
                The more text you provide, the more accurate our AI analysis will be.
              </div>
            </div>

            {/* Character Count with animated progress indicator */}
            <div className="flex justify-between items-center text-sm mt-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 font-medium">
                  {textLength} characters
                </span>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ease-out ${
                      isOptimal ? 'bg-green-500' : 'bg-orange-400'
                    }`}
                    style={{ width: `${Math.min(textLength / 2, 100)}%` }}
                  ></div>
                </div>
              </div>
              <span className={`font-medium transition-all duration-300 ${
                isOptimal 
                  ? 'text-green-600 animate-bounce' 
                  : 'text-orange-500'
              }`}>
                {isOptimal ? '✓ Optimal' : 'Optimal: 200+ characters'}
              </span>
            </div>

            {/* Analyze Button with smooth gradient and hover effect */}
            <button
              className="
                w-full 
                py-4 
                px-6 
                rounded-xl 
                text-white 
                font-semibold 
                text-base
                transition-all 
                duration-500
                ease-out
                bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700
                hover:from-teal-600 hover:via-teal-700 hover:to-teal-800
                flex 
                items-center 
                justify-center
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-1
                active:translate-y-0
                active:scale-[0.99]
                group
                relative
                overflow-hidden
                transform
                hover:scale-[1.02]
                border-2
                border-teal-600/30
                hover:border-teal-600/50
              "
            >
              {/* Shine effect on hover - smooth shine */}
              <div className="
                absolute 
                inset-0 
                bg-gradient-to-r 
                from-transparent 
                via-white/10 
                to-transparent 
                -translate-x-full 
                group-hover:translate-x-full 
                transition-transform 
                duration-700
                ease-out
              "></div>
              
              {/* Button content */}
              <svg 
                className="w-6 h-6 mr-3 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              
              <span className="relative">
                Analyze with AI
                {/* Smooth underline animation */}
                <span className="
                  absolute 
                  -bottom-1 
                  left-0 
                  w-0 
                  h-[2px] 
                  bg-white 
                  group-hover:w-full 
                  transition-all 
                  duration-500 
                  ease-out
                  group-hover:opacity-80
                "></span>
              </span>
            </button>
          </div>

          {/* Right Column: Ready for AI Analysis Box - CLICKABLE */}
          <div 
            ref={rightBoxRef}
            onClick={handleRightBoxClick}
            className={`
              p-8 
              bg-gradient-to-br from-white to-teal-50 
              border-2 
              rounded-2xl 
              shadow-xl 
              flex 
              flex-col 
              items-center 
              justify-center 
              text-center 
              transition-all 
              duration-700 
              delay-100 
              transform 
              cursor-pointer
              relative
              ${isRightBoxClicked ? 'ring-4 ring-teal-300 scale-[0.98]' : ''}
              ${isVisible.rightBox ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease',
              transformStyle: 'preserve-3d',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 10px 20px rgba(88, 191, 167, 0.1)',
              borderColor: isRightBoxClicked ? '#5EEAD4' : '#E5E7EB'
            }}
            title="Click to paste your text in the text area"
          >
            {/* Click indicator animation */}
            <div className={`absolute -top-3 -right-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg transition-all duration-300 ${
              isRightBoxClicked ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}>
              CLICK ME!
            </div>
            
            {/* Floating Eye Icon with glow effect */}
            <div className="relative mb-6">
              <div className={`absolute inset-0 bg-teal-400 rounded-full blur-xl transition-all duration-500 ${
                isRightBoxClicked ? 'opacity-50 scale-125' : 'opacity-30'
              }`}></div>
              <div className={`
                relative 
                w-24 h-24 
                rounded-full 
                border-4 border-white 
                bg-gradient-to-br from-teal-100 to-teal-50 
                shadow-2xl 
                flex items-center justify-center 
                transform transition-all duration-300
                ${isRightBoxClicked ? 'scale-110 rotate-12' : 'group-hover:scale-105'}
              `}>
                <svg 
                  className={`w-12 h-12 text-teal-600 transition-all duration-500 ${
                    isRightBoxClicked ? 'rotate-180 scale-125' : 'group-hover:rotate-12'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              
              {/* Arrow pointing to left box - Positioned ABOVE the icon */}
              <div className={`absolute -left-40 top-4 transform transition-all duration-700 ${
                isRightBoxClicked ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <div className="flex items-center animate-bounce" style={{ animationDuration: '1.5s' }}>
                  <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  <div className="ml-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-xl border border-teal-100">
                    <span className="text-sm font-bold text-teal-700 whitespace-nowrap">
                      Paste your text here!
                    </span>
                    <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-teal-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-teal-600 to-gray-800 bg-clip-text text-transparent">
              Ready for AI Analysis
            </h3>
            
            <p className="text-gray-600 max-w-xs relative">
              <span className={`absolute -left-6 top-1 text-teal-500 transition-all duration-300 ${
                isRightBoxClicked ? 'opacity-0' : 'animate-bounce'
              }`}>→</span>
              <span className={isRightBoxClicked ? 'font-bold text-teal-600' : ''}>
                {isRightBoxClicked ? 'Click on the text area to paste your job offer!' : 'Paste your job offer text and click '}
              </span>
              {!isRightBoxClicked && (
                <>
                  <span className="font-semibold text-teal-600 mx-1">"Analyze with AI"</span> 
                  to get instant scam detection results.
                </>
              )}
              <span className={`absolute -right-6 top-1 text-teal-500 transition-all duration-300 ${
                isRightBoxClicked ? 'opacity-0' : 'animate-bounce'
              }`} style={{ animationDelay: '0.5s' }}>←</span>
            </p>
            
            {/* Animated instruction text when clicked */}
            <div className={`mt-4 text-sm text-teal-600 font-medium transition-all duration-500 ${
              isRightBoxClicked ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              <div className="flex items-center bg-teal-50 px-3 py-2 rounded-lg">
                <svg className="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
                Text area is now highlighted! Press Ctrl+V or right-click to paste
              </div>
            </div>
            
            {/* Animated dots */}
            <div className="flex space-x-2 mt-6">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isRightBoxClicked 
                      ? 'bg-teal-500 scale-125' 
                      : 'bg-teal-400'
                  }`}
                  style={{ 
                    animation: isRightBoxClicked ? 'none' : `pulse 1s infinite`,
                    animationDelay: `${dot * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Analysis Tips Section */}
        <div 
          ref={tipsBoxRef}
          className={`mt-16 p-8 bg-white border border-gray-200 rounded-2xl shadow-xl transition-all duration-700 delay-200 transform ${
            isVisible.tipsBox 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
            transformStyle: 'preserve-3d',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 10px 20px rgba(88, 191, 167, 0.1)'
          }}
        >
          {/* Header with animated underline */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 animate-spin" style={{ animationDuration: '3s' }}></div>
            <h2 className="text-2xl font-bold text-gray-800 relative">
              AI Analysis Tips
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></span>
            </h2>
          </div>

          {/* Tips List with staggered animations */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: "Include complete job descriptions for better accuracy", icon: "📄" },
              { text: "Our AI analyzes 50+ scam indicators instantly", icon: "⚡" },
              { text: "Results include confidence levels and detailed explanations", icon: "📊" },
              { text: "All analysis is done securely and privately", icon: "🔒" }
            ].map((tip, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-teal-50 hover:to-white transition-all duration-300 group hover:shadow-md hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">{tip.icon}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="flex-1">
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {tip.text}
                  </span>
                  {/* Progress bar for each tip */}
                  <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: '0%',
                        animation: `fillWidth 1s ease-out ${index * 0.3 + 0.5}s forwards`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <div className="inline-flex items-center text-sm text-gray-500 animate-pulse">
              <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Real-time analysis powered by advanced AI algorithms
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-64 h-64 border-2 border-teal-100 rounded-full opacity-10"
              style={{
                top: `${20 + i * 15}%`,
                left: `${i * 20}%`,
                animation: `float ${10 + i * 2}s infinite ease-in-out`,
                animationDelay: `${i}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fillWidth {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes border-pulse {
          0%, 100% { 
            border-color: #5EEAD4;
            box-shadow: 0 0 0 0 rgba(94, 234, 212, 0.7);
          }
          50% { 
            border-color: #14B8A6;
            box-shadow: 0 0 0 10px rgba(94, 234, 212, 0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .border-pulse {
          animation: border-pulse 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CheckJobPageTwo;