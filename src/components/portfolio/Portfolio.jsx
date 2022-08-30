import React from 'react';
import './Portfolio.css';
import sidebar from '../../img/sidebar.png';
import ecommerce from '../../img/ecommerce.png';
import hoc from '../../img/hoc.png';
import musicapp from '../../img/musicapp.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Portfolio = () => {
    return (
        <div className="portfolio" id='Portfolio'>
            <span>Recent Project handled by John</span>
            <span>Portfolio</span>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={sidebar} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt="" srcset="" />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default Portfolio;
