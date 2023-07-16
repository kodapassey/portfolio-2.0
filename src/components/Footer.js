import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    MDBFooter,
    MDBContainer,
    MDBBtn
} from 'mdb-react-ui-kit';
import { faA, faD, faK, faO } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css';




export default function Footer() {
    return (
        <MDBFooter className='text-center' color='white'>
            <MDBContainer>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1'>
                        <FontAwesomeIcon icon={faK} />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1'>
                        <FontAwesomeIcon icon={faO} />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1'>
                        <FontAwesomeIcon icon={faD} />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1'>
                        <FontAwesomeIcon icon={faA} />
                    </MDBBtn>
                </section>

                <section>
                    <p>
                        Thank you for visiting my portfolio! For inquiries or collaboration opportunities, feel free to reach out. Let's create something amazing together!                    </p>
                </section>

                <section className='footerSocials'>
                    <a target='_blank' rel="noreferrer" href='https://github.com/kodapassey'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/kodapassey/'>
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                    </a>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/koda-passey-347966228/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </section>
            </MDBContainer>
        </MDBFooter>
    )
}