import { Col, Container, Row } from 'react-bootstrap';
import '../css/about.css';

export const About = () => {
    return (
        <Container>
            <Row className='about'>
                <Col xl={6} lg={6} xs={12} className='about-text'>
                    <h1>About me</h1>
                    <p>asdfhgasldfihgawelifhgqabweklufygqbkefuyhqgbwefkluyjhqgweflhagwdflkhqgwefyuhqwgefkuqywegfkqwuyefg</p>
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