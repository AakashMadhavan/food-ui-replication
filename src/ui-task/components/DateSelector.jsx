import React, { useState } from 'react';

const DateSelector = ({ dateList, activeDate, onDateChange }) => {
  const [viewMode, setViewMode] = useState('week'); // week or month

  return (
    <div className="bg-white px-4 py-4 border-b border-gray-200">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-base font-semibold text-gray-800">Apr 2026</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <span className="text-base text-gray-700">16 April 2026</span>
      </div>

      {/* View Mode Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setViewMode('week')}
          className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
            viewMode === 'week'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Week
        </button>
        <button
          onClick={() => setViewMode('month')}
          className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
            viewMode === 'month'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Month
        </button>
      </div>

      {/* Date Picker */}
      <div className="flex gap-2 overflow-x-auto">
        {dateList.map((dateItem) => (
          <button
            key={dateItem.date}
            onClick={() => onDateChange(dateItem.date)}
            className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg whitespace-nowrap transition-all ${
              activeDate === dateItem.date
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="text-xs font-medium">{dateItem.day}</span>
            <span className="text-sm font-bold">{dateItem.date}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateSelector;