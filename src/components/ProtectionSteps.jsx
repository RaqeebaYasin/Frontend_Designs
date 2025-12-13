import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoCellularOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';

// StepCard Component - Fixed with proper Icon usage
const StepCard = ({ number, title, description, colorClass, bgColorClass, Icon }) => (
    <div className={`flex flex-col items-center p-6 border-transparent ${bgColorClass} rounded-2xl shadow-sm text-center min-h-[250px] transition duration-300 hover:shadow-lg`}>
        
        {/* Icon Circle */}
        <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-white border border-gray-100 mb-4 shadow-inner`}>
            {Icon && <Icon className={`w-8 h-8 ${colorClass}`} />}
        </div>

        {/* Step Number and Title */}
        <div className="flex items-center mb-2">
            <div className={`text-white font-bold text-sm px-3 py-1 rounded-full ${colorClass === 'text-emerald-600' ? 'bg-emerald-600' : 'bg-blue-600'} mr-2`}>
                {number}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
                {title}
            </h3>
        </div>

        {/* Description Text */}
        <p className="text-gray-600 text-base mt-2">
            {description}
        </p>
    </div>
);

// Main ProtectionSteps Component
const ProtectionSteps = () => {
    const stepsData = [
        {
            number: 1,
            title: 'Paste & Submit',
            description: 'Simply paste any job offer, email, or suspicious message into our AI analyzer.',
            Icon: FiSearch,
            colorClass: 'text-emerald-600',
            bgColorClass: 'bg-emerald-50',
        },
        {
            number: 2,
            title: 'AI Analysis',
            description: 'Our AI instantly analyzes the text for scam patterns, red flags, and suspicious elements.',
            Icon: IoCellularOutline,
            colorClass: 'text-blue-600',
            bgColorClass: 'bg-blue-50',
        },
        {
            number: 3,
            title: 'Get Results',
            description: 'Receive instant results with scam probability, warning signs, and safety recommendations.',
            Icon: IoShieldCheckmarkOutline,
            colorClass: 'text-emerald-600',
            bgColorClass: 'bg-emerald-50',
        },
    ];

    return (
        <section className="py-16 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                        AI-Powered Protection in 3 Steps
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-500">
                        Our advanced AI analyzes job offers using machine learning trained on thousands of scam patterns.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stepsData.map((step) => (
                        <StepCard 
                            key={step.number}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                            Icon={step.Icon}
                            colorClass={step.colorClass}
                            bgColorClass={step.bgColorClass}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProtectionSteps;