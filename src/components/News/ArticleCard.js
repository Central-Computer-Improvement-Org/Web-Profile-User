import React from 'react';

const ArticleCard = ({ title = '' }) => {
  return (
    <div className="w-full border-2 bg-white border-bluePallete-800 p-4 rounded-xl">
      <p className="text-bluePallete-700 text-[0.8em] font-bold lg:text-2xl lg:font-semibold">
        {title}
      </p>
    </div>
  );
};

export default ArticleCard;
