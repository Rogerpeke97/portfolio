import React from 'react';

const TechnologyBox = ({ className = '', imageSource, alt }) => {
  return (
    <img src={imageSource} alt={alt} className={`${className} rounded-md bg-terciary text-white w-full h-[50px] max-w-[80px] min-w-[50px]`} />
  )
}

export default TechnologyBox;