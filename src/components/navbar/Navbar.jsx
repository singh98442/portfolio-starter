import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Andrew</div>
                <span>toggle button</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link className='hello' spy={true} to='Navbar' smooth={true} activeClass='activeClass'><li>Home </li></Link>
                        <Link className='hello' spy={true} to='Service' smooth={true}><li> Services</li></Link>
                        <Link className='hello' spy={true} to='Experience' smooth={true}><li> Experience</li></Link>
                        <Link className='hello' spy={true} to='Portfolio' smooth={true}><li> Portfolio</li></Link>
                        <Link className='hello' spy={true} to='Testimonial' smooth={true}><li>Testimonial</li></Link>

                    </ul>
                </div>
                <Link className='hello' spy={true} to='Contact' smooth={true}>
                <button className='btn-button' >Contact Us</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Navbar;
