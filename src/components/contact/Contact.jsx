import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { useState } from 'react';


const Contact = () => {
    const form = useRef();
    const [done, setdone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l8pi3yu', 'template_4layad9', form.current, 'TtQJXpypjtEJquSpJ')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
    }



    return (
        <div className="contact-wrapper" id='Contact'>
            <div className="c-left">
                <span>Fell free to</span>
                <span>Contact Us</span>
                <span>At anytime</span>
                <span>From anywhere</span>
            </div>


            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label for="name" className="large-label">Name!!!</label> <br />
                        <input id="name" name="user_name" type="text" placeholder="First or Full Name" />
                    </div>
                    <div>
                        <label for="email" className="large-label">Email!!</label><br />
                        <input id="email" name="user_email" type="email" placeholder="name@example.com" />
                    </div>

                    <div class="full-width">
                        <label for="message" className="large-label">Message!!!</label><br />
                        <textarea id="message" name="message" placeholder="Leave a message…"></textarea>
                    </div>
                    <button className='btn-button c-button' type='submit'>Submit</button><br/>
                    <span className="large-label">{done && "hey, yous feedback has been submitted"}</span>

                </form>

            </div>
        </div>
    )
}

export default Contact;
