import '../css/portfolio.css'
import { Container, Row, Col } from "react-bootstrap";
import runBuddy from '../images/projects/Screenshot (2).png';


export const Portfolio = () => {
    return (
        <Container>
            <Row className="portfolio-wrap">
                <h1>View my work</h1>
                <h2>Portfolio</h2>

                <Col xl={3} lg={4} md={6} sm={6} xs={12} className="project">
                    <img src={runBuddy} alt=""></img>
                    <h3>Run Buddy</h3>
                    <p>asdlfashdfgalsdhjfgalsdfhg</p>
                    <button className="github">GitHub</button>
                    <button className="live-demo">Live Demo</button>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6} xs={12} className="project">
                    <img src={runBuddy} alt=""></img>
                    <h3>Run Buddy</h3>
                    <p>asdlfashdfgalsdhjfgalsdfhg</p>
                    <button className="github">GitHub</button>
                    <button className="live-demo">Live Demo</button>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6} xs={12} className="project">
                    <img src={runBuddy} alt=""></img>
                    <h3>Run Buddy</h3>
                    <p>asdlfashdfgalsdhjfgalsdfhg</p>
                    <button className="github">GitHub</button>
                    <button className="live-demo">Live Demo</button>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6} xs={12} className="project">
                    <img src={runBuddy} alt=""></img>
                    <h3>Run Buddy</h3>
                    <p>asdlfashdfgalsdhjfgalsdfhg</p>
                    <button className="github">GitHub</button>
                    <button className="live-demo">Live Demo</button>
                </Col>
            </Row>
        </Container >
    )
}