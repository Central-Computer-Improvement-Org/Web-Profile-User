import React from 'react';

const ArticleCard = ({ title = '' }) => {
  return (
    <div className="w-full p-4 bg-white border-2 border-bluePallete-800 rounded-xl">
      <p className="text-bluePallete-700 text-[0.8em] font-bold lg:text-2xl lg:font-semibold">
        {title}
      </p>
    </div>
  );
};

export default ArticleCard;