import React from 'react'
import './Work.css'
import upwork from '../../img/Upwork.png';
import fiver from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import shopify from '../../img/Shopify.png';
import facebook from '../../img/Facebook.png';

const Work = () => {
  return (
    <div className="work">
        <div className="w-left">
            <h1>hello world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi, velit reiciendis error corrupti nesciunt magnam commodi eveniet. Quidem, numquam.</p>
            <button className='btn-button'>Hire me </button>
        </div>

        
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="secCircle">
                    <img src={upwork} alt="" srcset="" />
                </div>
                <div className="secCircle">
                    <img src={fiver} alt="" srcset="" />
                </div>
                <div className="secCircle">
                    <img src={amazon} alt="" srcset="" />
                </div>
                <div className="secCircle">
                    <img src={shopify} alt="" srcset="" />
                </div>
                <div className="secCircle">
                    <img src={facebook} alt="" srcset="" />
                </div>
            </div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work;
