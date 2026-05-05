import React, { useState } from 'react';

const Section = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white border-b border-gray-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-5 bg-purple-600 hover:bg-purple-700 transition-colors"
      >
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <svg
          className={`w-5 h-5 text-white transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
      {isExpanded && <div>{children}</div>}
    </div>
  );
};

export default Section;