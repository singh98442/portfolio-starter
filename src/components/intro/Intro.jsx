import React from 'react'
import './Intro.css'
import githubimg from '../../img/github.png';
import linkinimg from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import FloatingDiv from '../floatingDiv/FloatingDiv';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassimoj from '../../img/glassesimoji.png';

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy, I am</span>
                    <span>Andrew!!!....</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi commodi expedita ea iure. Ullam ex dolorem animi amet provident aperiam rem accusantium atque aliquam odio corrupti fuga exercitationem doloribus error natus eveniet veniam sint pariatur consequatur obcaecati enim, dolor neque culpa. Numquam itaque pariatur nesciunt omnis, expedita rerum aperiam praesentium, minima quibusdam nemo unde inventore eligendi. Minus, adipisci facilis!</span>
                </div>
                <button className='btn-button i-button'>Hire me</button>
                <div className="i-cons">
                    <img src={githubimg} alt="" srcset="" />
                    <img src={linkinimg} alt="" srcset="" />
                    <img src={instagram} alt="" srcset="" />
                </div>
            </div>
            <div className="i-right">
                <img src={vector1} alt="" srcset="" />
                <img src={vector2} alt="" srcset="" />
                <img src={boy} alt="" srcset="" />
                <div style={{top:'-4%',left : '68%' }}><FloatingDiv image={crown} text1={"Web"} text2={"Development"}/> </div>
                <div style={{top:'15rem',left : '0' }}><FloatingDiv image={thumbup} text1={"Best"} text2={"Design"}/> </div>
                <div style={{top:'-4%',left : '-2%' }}><FloatingDiv image={glassimoj}/> </div>
            </div>
        </div>

    )
}

export default Intro;
