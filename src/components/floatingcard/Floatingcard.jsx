import React from 'react';
import './Floatingcard.css';

const Floatingcard = ({image,text1, text2}) => {
  return (
    <div className='floatingCard'>
      <img src={image} alt="" srcset="" />
      <span>{text1}</span>
      <span className='para'>{text2}</span>
      <button className='btn-button f-button'>Learn More</button>
    </div>
  )
}

export default Floatingcard;
