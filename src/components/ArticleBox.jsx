import React from 'react';

const ArticleBox = ({ title, description, image, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} className="text-blue-500 hover:text-blue-800">Read More</a>
      </div>
    </div>
  );
};

export default ArticleBox;
