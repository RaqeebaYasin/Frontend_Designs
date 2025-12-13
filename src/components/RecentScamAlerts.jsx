import React from 'react';

// Define Icons using inline SVG for a self-contained component
const CalendarIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const AlertTriangleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const MapPinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    <path d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
    <path d="M12 21.5L12 19"></path>
  </svg>
);

const DollarSignIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const scamAlerts = [
  {
    id: 1,
    status: 'Verified Scam',
    statusColor: 'bg-red-600',
    date: 'Jan 15, 2025',
    company: 'FakelobCorp',
    scamType: 'Work from Home Scam',
    details: [
      { icon: MapPinIcon, text: 'Remote' },
      { icon: DollarSignIcon, text: '$500 upfront fee' },
    ],
    isVerified: true,
  },
  {
    id: 2,
    status: 'Under Review',
    statusColor: 'bg-gray-700',
    date: 'Jan 12, 2025',
    company: 'QuickHire Solutions',
    scamType: 'Pyramid Scheme',
    details: [
      { icon: MapPinIcon, text: 'New York, NY' },
      { icon: DollarSignIcon, text: '$200 starter kit' },
    ],
    isVerified: false,
  },
  {
    id: 3,
    status: 'Verified Scam',
    statusColor: 'bg-red-600',
    date: 'Jan 10, 2025',
    company: 'EasyMoney Jobs',
    scamType: 'Fake Check Scam',
    details: [
      { icon: MapPinIcon, text: 'Los Angeles, CA' },
      { icon: DollarSignIcon, text: '$1,000 fake check' },
    ],
    isVerified: true,
  },
];

// Reusable Card Component
const ScamAlertCard = ({ alert }) => {
  const { status, statusColor, date, company, scamType, details, isVerified } = alert;

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
      {/* Red Accent Strip for Verified Scams */}
      {isVerified && (
        <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600 rounded-l-xl"></div>
      )}

      {/* Card Header: Status Tag and Date */}
      <div className="flex justify-between items-start mb-4">
        {/* Status Tag */}
        <div className={`flex items-center text-xs font-semibold px-2 py-0.5 rounded-full text-white ${statusColor} ${isVerified ? 'pl-4 pr-3' : 'px-3'}`}>
          <AlertTriangleIcon className="w-4 h-4 mr-1.5" />
          {status}
        </div>
        {/* Date */}
        <div className="flex items-center text-sm text-gray-500 mt-0.5">
          <CalendarIcon className="w-4 h-4 mr-1 text-gray-400" />
          {date}
        </div>
      </div>

      {/* Company Name and Scam Type */}
      <h3 className="text-xl font-semibold mb-1 text-gray-800">{company}</h3>
      <p className="text-base font-medium text-red-600 mb-6">{scamType}</p>

      {/* Details (Location, Fee, etc.) */}
      <div className="space-y-2 text-sm text-gray-600">
        {details.map((detail, index) => (
          <div key={index} className="flex items-center">
            <detail.icon className="w-4 h-4 mr-2 text-gray-500" />
            <span>{detail.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Component renamed to RecentScamAlerts
const RecentScamAlerts = () => {
  return (
    // Removed min-h-screen so background height fits content exactly
    // Reduced pb-8 to pb-6 to minimize space below the button
    <div className="bg-gray-50 pt-16 pb-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Recent Scam Alerts
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest scam reports from our community. Help us keep everyone safe.
          </p>
        </div>

        {/* Alerts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {scamAlerts.map((alert) => (
            <ScamAlertCard key={alert.id} alert={alert} />
          ))}
        </div>

        {/* View All Reports Button */}
        <div className="flex justify-center">
          <button
            className="px-6 py-3 border border-green-400 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition duration-300 shadow-sm hover:shadow-md"
            onClick={() => console.log('View All Reports clicked')}
            aria-label="View all scam reports"
          >
            View All Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentScamAlerts;