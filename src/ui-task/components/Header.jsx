import React from 'react';

const Header = () => {
  return (
    <header className="bg-white px-4 py-5 flex items-center justify-between shadow-sm">
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <h1 className="text-3xl font-bold text-gray-800">Food</h1>
      
      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-base font-medium">
        Go to store
      </button>
    </header>
  );
};

export default Header;