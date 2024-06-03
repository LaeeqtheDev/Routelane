import React from 'react';

const Card = ({ title, description, image, tags }) => {
  return (
    <div className="w-64 h-96 overflow-hidden shadow-lg bg-blue-200/50 rounded-xl">
      <div className="flex items-center justify-center">
        <img className="w-1/2" src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base h-24 overflow-hidden">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
