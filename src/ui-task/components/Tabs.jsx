import React, { useState } from 'react';

const Tabs = ({ categories, activeTab, onTabChange }) => {
  const [vegOnly, setVegOnly] = useState(false);

  return (
    <div className="bg-white px-4 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4">
        <div className="flex gap-3 overflow-x-auto flex-shrink-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onTabChange(category)}
              className={`px-4 py-2 rounded-full text-base font-medium whitespace-nowrap transition-all ${
                activeTab === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-sm font-semibold text-gray-700">Veg</span>
          <button
            onClick={() => setVegOnly(!vegOnly)}
            className={`relative w-10 h-6 rounded-full transition-all ${
              vegOnly ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                vegOnly ? 'translate-x-4' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;