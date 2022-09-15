import '../css/banner.css'
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
// import selfImg from '../images/Screen Shot 2022-05-03 at 12.43.03 PM.png'
import selfImg2 from '../images/Screen Shot 2022-05-03 at 12.43.03 PM(1).PNG'

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col border-primary xs={12} md={6} lg={6} xl={7}>
                        <span className="tagLine">Welcome to my Portfolio</span>
                        <h1>Hi! I'm Koda Passey</h1>
                        <span className="fakeCode">&lt;h2&gt;</span><h2>Web Developer</h2><span className="fakeCode">&lt;h2 /&gt;</span>
                        <p>I am Koda, and this is a paragraph text about me(this might get removed)</p>
                        <button onClick={() => console.log('lets connect button clicked!')}>Lets Connect <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} lg={6} xl={5}>
                        <img src={selfImg2} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}