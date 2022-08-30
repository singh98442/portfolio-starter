import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from '../../img/profile2.jpg';
import profilepic3 from '../../img/profile3.jpg';
import profilepic4 from '../../img/profile4.jpg';

const Testimonial = () => {
    const clients = [
        {
            img: profilepic1,
            review: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",

        },
        {
            img: profilepic2,
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",

        },
        {
            img: profilepic3,
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",

        },
        {
            img: profilepic4,
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",

        }
    ]

    return (
        <div className="t-wrapper" id='Testimonial'>
            <div className="t-heading">
                <span>Lorem, ipsum dolor.</span>
                <span>Lorem, ipsum dolor.</span>
                <span>Lorem, ipsum dolor.</span>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {
                    clients.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial">
                                    <img src={client.img} alt="" srcset="" />
                                    <span>{client.review}</span>

                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div >
    )
}

export default Testimonial;
