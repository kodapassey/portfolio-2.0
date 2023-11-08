import '../css/portfolio.css'
import { Container, Row, Col } from "react-bootstrap";
import { portfolio, bootcampProjects } from '../links/portfolio';
import oregonDucksLogo from '../images/oregon-ducks-8-logo-png-transparent.png'
import indiaPalaceMedford from '../images/projects/India Palace SS.png'



export default function Portfolio() {
    return (
        <Container>
            <Row className="portfolio-wrap">
                <h1>VIEW MY WORK</h1>
                <h2>My Coding Portfolio: Showcasing Innovative Projects</h2>
                {/* map for personal/freelance projects */}
                <Col className='project featuredProject' xl={3}>
                    <img src={indiaPalaceMedford} alt=""></img>
                    <h3>India Palace Medford</h3>
                    <p>India Palace is home to the finest Indian cuisine in the Rogue Valley.</p>
                    <a target="_blank" rel="noreferrer" href='https://www.indiapalacemedford.com/'>
                        <button className="live-demo">Live</button>
                    </a>
                </Col>
                {portfolio.map((project) => (
                    <Col xl={3} lg={4} md={6} sm={6} xs={12} className="project">
                        <img src={project.img} alt=""></img>
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                        <a target="_blank" rel="noreferrer" href={project.github}>
                            <button className="github">GitHub</button>
                        </a>
                        <a target="_blank" rel="noreferrer" href={project.live}>
                            <button className="live-demo">Live</button>
                        </a>
                    </Col>
                ))}

                <div className='subDivPortfolio'>
                    <img className='ducksLogo' src={oregonDucksLogo} /><h3>Bootcamp Projects</h3>
                    <p>Discover the transformative journey of my coding education at the esteemed<span className='githubBoldTxt'> <a className='bootcampHoverTxt' target="_blank" rel="noreferrer" href='https://bootcamp.uoregon.edu/coding/landing/?s=Google-Brand&dki=Learn%20Coding%20and%20More%20Online&pkw=university%20of%20oregon%20coding%20bootcamp&pcrid=648106990472&pmt=e&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CUniversity-of-Oregon%7CSEM%7CCODING%7C-%7COFL%7CTIER-1%7CALL%7CBRD%7CEXACT%7CCore%7CBootcamp&utm_term=university%20of%20oregon%20coding%20bootcamp&s=google&k=university%20of%20oregon%20coding%20bootcamp&utm_adgroupid=116401194470&utm_locationphysicalms=9033108&utm_matchtype=e&utm_network=g&utm_device=c&utm_content=648106990472&utm_placement=&gad=1&gclid=CjwKCAjwh8mlBhB_EiwAsztdBFqTaKbuwzlOXLrReNcc89-syQyZaDulSpF1dSeUiW-ZnRTHZF2orxoCXtUQAvD_BwE&gclsrc=aw.ds'> University of Oregon Coding Bootcamp.</a></span> Through intensive coursework, I gained a solid foundation in HTML, CSS, JavaScript, React, MongoDB, Express, Node.js, and various other languages, frameworks, and libraries. Delve into my impressive portfolio of projects that reflect the knowledge and skills I acquired during this immersive learning experience. Witness the fruits of my dedication and passion for coding as I bring innovative ideas to life.</p>
                </div>

                {/* map for bootcamp projects */}
                {bootcampProjects.map((project) => (
                    <Col xl={3} lg={4} md={6} sm={6} xs={12} className="project duckProject">
                        <img src={project.img} alt=""></img>
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                        <a target="_blank" rel="noreferrer" href={project.github}>
                            <button className="github">GitHub</button>
                        </a>
                        <a target="_blank" rel="noreferrer" href={project.live}>
                            <button className="live-demo">Live</button>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container >
    )
}