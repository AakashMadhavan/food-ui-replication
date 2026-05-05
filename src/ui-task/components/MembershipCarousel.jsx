import React from 'react';

const MembershipCarousel = ({ memberships }) => {
  return (
    <div className="bg-white px-4 py-6 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">Food Memberships</h2>
      
      <div className="flex gap-4 overflow-x-auto">
        {memberships.map((membership) => (
          <div
            key={membership.id}
            className="flex-shrink-0 w-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              className="relative h-32 bg-cover bg-center"
              style={{ backgroundImage: `url(${membership.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30" />
            </div>
            
            <div className="p-4 bg-white">
              <h3 className="font-bold text-gray-800 text-base mb-2">{membership.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{membership.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-purple-600">{membership.price}</span>
                <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipCarousel;