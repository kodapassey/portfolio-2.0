import '../css/portfolio.css'
import { Row, Col } from "react-bootstrap";


import cascaderanch from '../images/projects/Screenshot (5).png'
import superiorshiftchange from '../images/projects/Screenshot (17).png'
import platformInnovations from '../images/projects/Screenshot (3).png'





export default function Banner() {
    return (
        <Row className='portfolio-wrap featuredProjectRow'>
            <h2>Featured Projects</h2>
            <p>Checkout some of my best work!</p>

            <Col className='project featuredProject' xl={3}>
                <img src={cascaderanch} alt=""></img>
                <p>Cascade Mountain Ranch</p>
                <a target="_blank" rel="noreferrer" href='https://github.com/kodapassey/wedding-website'>
                    <button className="github">GitHub</button>
                </a>
                <a target="_blank" rel="noreferrer" href='https://cascaderanch.netlify.app/'>
                    <button className="live-demo">Live</button>
                </a>
            </Col>

            <Col className='project featuredProject' xl={3}>
                <img src={superiorshiftchange} alt=""></img>
                <p>Superior Athletic Club Shift Change Website</p>
                <a target="_blank" rel="noreferrer" href='https://github.com/kodapassey/Shift-Change-Book'>
                    <button className="github">GitHub</button>
                </a>
                <a target="_blank" rel="noreferrer" href='https://superiorshiftchange-de0ea833dd80.herokuapp.com/'>
                    <button className="live-demo">Live</button>
                </a>
            </Col>


            <Col className='project featuredProject' xl={3}>
                <img src={platformInnovations} alt=""></img>
                <p>Platform Innovations</p>
                <a target="_blank" rel="noreferrer" href='https://github.com/mwjones2186/platform-technologies'>
                    <button className="github">GitHub</button>
                </a>
                <a target="_blank" rel="noreferrer" href='https://platforminnovations.com/'>
                    <button className="live-demo">Live</button>
                </a>
            </Col>

        </Row>
    )
}