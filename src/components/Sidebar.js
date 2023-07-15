import '../css/sidebar.scss'
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faUser, faFolderOpen, faFile } from '@fortawesome/free-solid-svg-icons';
import LogoPNG from '../images/Una_K.png';
import 'react-bootstrap'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import kodaResume from '../links/Koda_Passey_Resume.pdf'


export default function Sidebar() {
    const [isShown, setIsShown] = useState(true);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    const changeNav = {
        display: 'block'
    }


    return (

        <>

            <div onClick={handleClick} className='mobile-lines'>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className="nav-bar" style={{
                display: isShown & window.screen.width < 1536 ? 'none' : 'block',
            }}>

                <div onClick={handleClick} className='sidebar-x'>
                    <FontAwesomeIcon icon={faClose} />
                </div>

                <Link onClick={window.screen.width < 1536 ? handleClick : changeNav} className="logo" to='/'>
                    <img className='sideK' src={LogoPNG} alt='logo' />
                    <p className='subLogo'>Koda</p>
                </Link>
                <nav>
                    <NavLink onClick={window.screen.width < 1536 ? handleClick : changeNav} exact='true' activeclassname='active' to='/'>
                        <h1 className='sidebarNavLinks'><FontAwesomeIcon icon={faHome} />Home</h1>
                    </NavLink>
                    <NavLink onClick={window.screen.width < 1536 ? handleClick : changeNav} exact='true' activeclassname='active' className='about-link' to='/about'>
                        <h1 className='sidebarNavLinks'><FontAwesomeIcon icon={faUser} />About </h1>
                    </NavLink>
                    <NavLink onClick={window.screen.width < 1536 ? handleClick : changeNav} exact='true' activeclassname='active' className='contact-link' to='/contact'>
                        <h1 className='sidebarNavLinks'><FontAwesomeIcon icon={faEnvelope} />Contact </h1>
                    </NavLink>
                    <NavLink onClick={window.screen.width < 1536 ? handleClick : changeNav} exact='true' activeclassname='active' className='portfolio-link' to='/portfolio'>
                        <h1 className='sidebarNavLinks'><FontAwesomeIcon icon={faFolderOpen} />Portfolio </h1>
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a target='_blank' rel="noreferrer" href='https://github.com/kodapassey'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel="noreferrer" href='https://www.instagram.com/kodapassey/'>
                            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/koda-passey-347966228/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                    </li>
                </ul>

                <div className='resumeDownload'>
                    <a href={kodaResume} download='Koda_Passey_Resume.pdf'>
                        <FontAwesomeIcon icon={faFile} color='#4d4d4e' />Download my resume
                    </a>
                </div>
            </div>
        </>
    )
}
