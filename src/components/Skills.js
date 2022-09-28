import '../css/skills.css'
import 'react-bootstrap-icons';
import { LightningChargeFill } from 'react-bootstrap-icons';
import 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

export const Skills = () => {
    return (
        <section className="experience">

            <div className='text'>
                <h2>My Experience</h2>
                <p>What Skills I have</p>
            </div>

            <Container>
                <Row className='boxes align-items-center'>
                    <Col xs={12} md={4} className="frontend">
                        <div className='h3text'>
                            <h3>Frontend Development</h3>
                        </div>
                        <ul>
                            <li>
                                {/* <LightningChargeFill /> */}
                                HTML
                                <p>Advanced</p>
                            </li>
                            <li>
                                {/* <LightningChargeFill /> */}
                                CSS
                                <p>Advanced</p>
                            </li>
                            <li>
                                {/* <LightningChargeFill /> */}
                                JavaScript
                                <p>Intermediate</p>
                            </li>
                            <li>
                                {/* <LightningChargeFill /> */}
                                React
                                <p>Intermediate</p>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4} className="backend">
                        <div className='h3text'>
                            <h3>Backend Development</h3>
                        </div>
                        <ul>
                            <li>
                                {/* <LightningChargeFill /> */}
                                Node JS
                                <p>Intermediate</p>
                            </li>
                            <li>
                                {/* <LightningChargeFill /> */}
                                MongoDB
                                <p>Basic</p>
                            </li>
                            <li>
                                {/* <LightningChargeFill /> */}
                                MySQL
                                <p>Basic</p>
                            </li>
                            <li>
                                {/* <LightningChargeFill /> */}
                                Express
                                <p>Intermediate</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}