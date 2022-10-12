import { Col, Container, Row } from 'react-bootstrap';
import '../css/about.css';

export default function About () {
    return (
        <Container>
            <Row className='about'>
                <Col xl={6} lg={6} xs={12} className='about-text'>
                    <h1>ABOUT ME</h1>
                    <h2>Koda Passey - Web Developer</h2>
                    <p>Hello, I'm Koda Passey. In just a few weeks, I will graduate from the University of Oregon's coding bootcamp. In the meantime, I'm looking for my first full-time job. To succeed in this field, I am dedicated to learning the latest, most up-to-date technologies. Despite not being an expert in this field, I am able to offer a fresh perspective and extraordinary attention to every project I work on. If you have any challenges, questions or constructive feedback, please do not hesitate to contact me. My goal is to become a team player and dedicate all my skills and talents to develop high-quality and unique products.</p>
                </Col>

                <div xl={6} lg={6} xs={12} className='pic-container'>
                    <div className='pic' id='pic3' />
                    <div className='pic' id='pic2' />
                    <div className='pic' id='pic1' />
                </div>
            </Row>
        </Container>
    )
};