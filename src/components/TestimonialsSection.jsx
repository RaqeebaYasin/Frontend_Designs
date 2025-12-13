import React from 'react';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The AI caught a sophisticated work-from-home scam that I almost fell for. Saved me $500 and my personal information!",
    name: "Jessica Martinez",
    role: "Marketing Specialist",
    avatarColor: "bg-teal-100",
    iconColor: "text-teal-600",
    starColor: "fill-teal-400 text-teal-400",
  },
  {
    id: 2,
    quote: "Amazing accuracy! The AI analysis showed me red flags I completely missed. The percentage breakdown was so helpful.",
    name: "David Thompson",
    role: "Software Developer",
    avatarColor: "bg-blue-100",
    iconColor: "text-blue-600",
    starColor: "fill-blue-400 text-blue-400",
  },
  {
    id: 3,
    quote: "The instant analysis is incredible. In seconds, I knew the job offer was 87% likely to be a scam. So precise!",
    name: "Rachel Kim",
    role: "Recent Graduate",
    avatarColor: "bg-green-100",
    iconColor: "text-green-600",
    starColor: "fill-green-400 text-green-400",
  },
];

const StarRating = ({ colorClass }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={colorClass} 
        strokeWidth={0} 
      />
    ))}
  </div>
);

const TestimonialCard = ({ data }) => (
  <div className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
    <StarRating colorClass={data.starColor} />
    
    <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
      "{data.quote}"
    </p>
    
    <div className="flex items-center gap-3 mt-auto">
      <div className={`w-10 h-10 rounded-full ${data.avatarColor} flex items-center justify-center shrink-0`}>
        <User size={20} className={data.iconColor} />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-sm">{data.name}</h4>
        <p className="text-gray-500 text-xs">{data.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            Trusted by Thousands
          </h2>
          <p className="text-gray-500 text-lg">
            See how our AI has helped protect job seekers worldwide.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;