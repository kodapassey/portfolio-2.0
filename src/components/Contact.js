import '../css/contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Col, Container, Row } from 'react-bootstrap';

export default function Contact() {
    const refForm = useRef()


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u3nl63j', 'template_nxfxj0u', refForm.current, 'nd5F-JQfuBSg3CQaS')
            .then(() => {
                alert('Message successfully sent!');
                e.target.reset();
            }, () => {
                alert('Failed to send message, please try again')
            });
    };


    return (
        <Container>
            <Row className='contanier contact-page'>
                <Col xl={6} lg={6} xs={12} className='text-zone'>
                    <h1>GET IN TOUCH</h1>
                    <p className='contactP'>
                        Hey there! I'm thrilled you're here! Got a question, feedback, or just wanna say hi? Shoot me a message using the contact form below. I'll get back to you ASAP! Can't wait to chat with you. Thanks for checking out my portfolio!</p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' className='name' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' className='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' className='subject' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' className='message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </Col>


                <Col xl={6} lg={6} xs={12} className='info-map'>
                    <h4>Koda Passey</h4>
                    <a className='tel' href="tel:541-778-2746">541-778-2746</a>
                    <h5>Medford, OR United States</h5>


                    <div className='map-wrap'>
                        <MapContainer center={[42.326515, -122.875595]} zoom={13}>
                            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[42.326515, -122.875595]}>
                                <Popup>Koda lives here!</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

