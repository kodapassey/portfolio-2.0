import { Col, Container, Row } from 'react-bootstrap';
import '../css/about.css';

import pic1 from '../images/About/KPXP1522.JPG'
import pic2 from '../images/About/IMG_2268.JPG'
import pic3 from '../images/About/IMG_4736.JPG'
import pic4 from '../images/About/IMG_8795.JPG'
import pic5 from '../images/About/IMG_8921.JPG'
import pic6 from '../images/About/PMGM4001.JPG'



export default function About() {
    return (
        <Container>
            <Row className='about'>
                <Col xl={6} lg={6} xs={12} className='about-text'>
                    <h1>ABOUT ME</h1>
                    <h2>Professional Journey</h2>
                    <p>I am a graduate of the University of Oregon's coding bootcamp and am currently seeking a full-time position. To succeed in this field, I am dedicated to learning the latest, most up-to-date technologies. Despite not being an expert in this field, I am able to offer a fresh perspective and extraordinary attention to every project I work on. If you have any challenges, questions or constructive feedback, please do not hesitate to contact me. I aim to become a team player and dedicate all my skills and talents to developing high-quality, unique products.</p>
                </Col>

                <div xl={6} lg={6} xs={12} className='pic-container'>
                    <div className='pic' id='pic3' />
                    <div className='pic' id='pic2' />
                    <div className='pic' id='pic1' />
                </div>
            </Row>

            <Row className='about'>
                <Col xl={12} className='about-text'>
                    <h2>Personal Background</h2>
                    <p>Hello, I'm Koda Passey, a 19-year-old born and raised in the city of Medford, Oregon. I thrive on living life to the fullest and enjoy connecting with new people. My journey is accompanied by my three loyal furry companions, my loving family and my wonderful girlfriend, Emma, whose presence brings endless laughter and happiness to my daily adventures.</p>
                    <p>Beyond my love for furry friends, I have a deep appreciation for both physical and mental fitness. When I'm not building websites you'll often find me at the gym, dedicating myself to workouts and honing my strength. Sports have always held a special place in my heart, allowing me to challenge myself and build a competitive spirit. Through years of playing football and baseball, I've cultivated valuable team-building skills and leadership qualities that have shaped me both on and off the field.</p>
                    <p>As an outgoing and energetic individual, I thrive in social settings and love the opportunity to build new connections. Whether it's hanging out with friends, engaging in meaningful conversations, or meeting new people, I revel in the experiences that broaden my horizons.</p>
                    <p>I possess a lighthearted and easygoing personality, finding comfort in approaching life with a balanced perspective. While I am driven and motivated, I believe in maintaining a sense of humor and not taking things overly seriously.</p>
                    <p>I'd like to thank you for checking out my portfolio page and learning a little about me!</p>
                </Col>
            </Row>

            <div class="row about about-text">
                <h2>Through the Lens: A Glimpse into My World</h2>
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src={pic1}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />

                    <img
                        src={pic2}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={pic3}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />

                    <img
                        src={pic4}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={pic5}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />

                    <img
                        src={pic6}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>
            </div>
        </Container>
    )
};