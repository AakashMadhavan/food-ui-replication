import React, { useState } from 'react';

const ComboCard = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=200&h=200&fit=crop';

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img
          src={imageError ? fallbackImage : item.image}
          alt={item.title}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
          {item.timer}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-bold text-gray-800 text-base leading-snug">{item.title}</h3>
            {item.isVeg && (
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 flex-shrink-0" title="Vegetarian" />
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.description}</p>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="font-bold text-base text-purple-600">{item.price}</span>
          <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComboCard;