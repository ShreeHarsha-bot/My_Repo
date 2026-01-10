import React from 'react';

const Card = ({ img, desc }) => {
  return (
    <div className='h-90 w-60 rounded-4xl relative hover:w-65 hover:h-95 '>
      <img
        src={img}
        alt={desc}
        className='rounded-4xl w-full h-full object-cover '
      />
      <p className='absolute bottom-5 left-5 text-white text-lg font-semibold'>
        {desc}
      </p>
    </div>
  );
};

export default Card;
