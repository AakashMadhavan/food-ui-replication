import React, { useState } from 'react';

const FoodItemRow = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=120&h=120&fit=crop';

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="px-4 py-5 border-b border-gray-100 flex gap-4 hover:bg-gray-50 transition-colors items-start">
      <img
        src={imageError ? fallbackImage : item.image}
        alt={item.name}
        onError={handleImageError}
        className="w-28 h-28 rounded-lg object-cover flex-shrink-0 shadow-sm"
      />
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-gray-800 text-base">{item.name}</h3>
            {item.isVeg && (
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 flex-shrink-0" title="Vegetarian" />
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-800 text-base">{item.price}</span>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold whitespace-nowrap">
              {item.timer}
            </span>
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors flex-shrink-0">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItemRow;