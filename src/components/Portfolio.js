import '../css/portfolio.css'
import { Container, Row, Col } from "react-bootstrap";
import portfolio from '../links/portfolio';


export default function Portfolio () {
    return (
        <Container>
            <Row className="portfolio-wrap">
                <h1>VIEW MY WORK</h1>
                <h2>Portfolio</h2>

                {portfolio.map((project) => (
                    <Col xl={3} lg={4} md={6} sm={6} xs={12} className="project">
                        <img src={project.img} alt=""></img>
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                        <a target="_blank" rel="noreferrer" href={project.github}>
                            <button className="github">GitHub</button>
                        </a>
                        <a target="_blank" rel="noreferrer" href={project.live}>
                            <button className="live-demo">Live Demo</button>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container >
    )
}