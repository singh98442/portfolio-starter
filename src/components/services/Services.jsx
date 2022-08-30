import React from 'react';
import Floatingcard from '../floatingcard/Floatingcard';
import './Services.css';
import heartemoji from '../../img/heartemoji.png';
import glass from '../../img/glasses.png';
import humble from '../../img/humble.png';
import resume from './sop.pdf';

const Services = () => {
    return (
        <div className="services"id='Service' >
            <div className="awesome">
                <span>Awesome Website</span>
                <span>Hello World</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dignissimos<br /> magnam fugiat exercitationem ex facilis.</span>
                <a href={resume} download>
                    <button className='btn-button a-button'>Download Cv</button>

                </a>
            </div>
            <div className="card">
                <div className='heart'>
                    <Floatingcard image={heartemoji} text1={"Design"} text2={"Lorem Ipsum is simply dummy text industry. Lorem Ipsum has been the industry's standard"} />
                </div>
                <div className='heart1'>
                    <Floatingcard image={glass} text1={"UI/UX"} text2={"Lorem Ipsum is simply dummy text industry. Lorem Ipsum has been the industry's standard"} />
                </div>
                <div className='heart2'>
                    <Floatingcard image={humble} text1={"Developer"} text2={"Lorem Ipsum is simply dummy text industry. Lorem Ipsum has been the industry's standard"} />
                </div>
            </div>
        </div>

    )
}

export default Services;
