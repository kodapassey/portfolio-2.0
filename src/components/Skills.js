import '../css/skills.css'
import 'react-bootstrap-icons';
import 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

export default function Skills () {
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
                                HTML
                                <p>Advanced</p>
                            </li>
                            <li>
                                CSS
                                <p>Advanced</p>
                            </li>
                            <li>
                                JavaScript
                                <p>Intermediate</p>
                            </li>
                            <li>
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
                                Node JS
                                <p>Intermediate</p>
                            </li>
                            <li>
                                MongoDB
                                <p>Basic</p>
                            </li>
                            <li>
                                MySQL
                                <p>Basic</p>
                            </li>
                            <li>
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