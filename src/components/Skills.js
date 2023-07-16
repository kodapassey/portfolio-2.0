import '../css/skills.css'
import 'react-bootstrap-icons';
import 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

export default function Skills() {

    return (
        <section className="experience">

            <div className='text'>
                <h2>My Experience</h2>
                <p>
                    Through my rigorous training at the<span className='githubBoldTxt'> <a className='bootcampHoverTxt' target="_blank" rel="noreferrer" href='https://bootcamp.uoregon.edu/coding/landing/?s=Google-Brand&dki=Learn%20Coding%20and%20More%20Online&pkw=university%20of%20oregon%20coding%20bootcamp&pcrid=648106990472&pmt=e&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CUniversity-of-Oregon%7CSEM%7CCODING%7C-%7COFL%7CTIER-1%7CALL%7CBRD%7CEXACT%7CCore%7CBootcamp&utm_term=university%20of%20oregon%20coding%20bootcamp&s=google&k=university%20of%20oregon%20coding%20bootcamp&utm_adgroupid=116401194470&utm_locationphysicalms=9033108&utm_matchtype=e&utm_network=g&utm_device=c&utm_content=648106990472&utm_placement=&gad=1&gclid=CjwKCAjwh8mlBhB_EiwAsztdBFqTaKbuwzlOXLrReNcc89-syQyZaDulSpF1dSeUiW-ZnRTHZF2orxoCXtUQAvD_BwE&gclsrc=aw.ds'> University of Oregon's Coding Bootcamp</a> </span>, I have acquired extensive knowledge and proficiency in a broad spectrum of both front-end and back-end frameworks, languages, and technologies. With a <span className='githubBoldTxt'> comprehensive understanding of HTML, CSS, JavaScript, React, Express, Node.js and MongoDB</span>, I possess a well-rounded skill set that enables me to tackle various aspects of web development. Additionally, my educational background has equipped me with valuable experience in collaborating with others using tools like <span className='githubBoldTxt'>GitHub and version control</span>, ensuring efficient teamwork and smooth project coordination.</p>
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
                                <p>Advanced</p>
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
                                <p>Advanced</p>
                            </li>
                            <li>
                                MySQL
                                <p>Basic</p>
                            </li>
                            <li>
                                Express
                                <p>Advanced</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}