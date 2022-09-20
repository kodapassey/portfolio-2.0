import '../css/banner.scss';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import selfImg from '../images/Screen Shot 2022-05-03 at 12.43.03 PM.png';
import selfImg2 from '../images/Screen Shot 2022-05-03 at 12.43.03 PM(1).PNG';
import pixelImg from '../images/image (2).png';
import logo from '../images/Una_K.png'


export const Banner = () => {

    const navigate = useNavigate();

    const navigateToContact = () => {
        navigate('/contact');
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} lg={6} xl={7}>
                        <span className="tagLine">
                            Welcome to my Portfolio
                        </span>
                        <h1>Hi! I'm <img className='nameK' src={logo} alt='K inside name' />oda Passey</h1>
                        <span className="fakeCode">&lt;h2&gt;</span><h2>Web Developer</h2><span className="fakeCode">&lt;h2 /&gt;</span>
                        <p>I am Koda, and this is a paragraph text about me(this might get removed)</p>
                        <button onClick={navigateToContact}>Lets Connect <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col className='imgWrap' xs={12} md={6} lg={6} xl={5}>
                        <img src={selfImg2} className='topImg' alt="Header Img" />
                        <img src={pixelImg} className='bottomImg' alt="Alternating header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}