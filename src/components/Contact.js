import '../css/contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export const Contact = () => {

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };


    return (
        <>
            <div className='contanier contact-page'>
                <div className='text-zone'>
                    <h1>Get in touch</h1>
                    <p>I am interested in....</p>
                    <div className='contact-form'>
                        <form>
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
                </div>


                <div className='info-map'>
                    <h4>Koda Passey</h4>

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
                </div>
            </div>
        </>
    )
}

