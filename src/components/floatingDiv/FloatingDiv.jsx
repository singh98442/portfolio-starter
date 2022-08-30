import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({image, text1, text2}) => {
  return (
    <div className='floatingimg'>
      <img src={image} alt="" srcset="" />
      <span>{text1} <br/>{text2}</span>
    </div>
  )
}

export default FloatingDiv;
