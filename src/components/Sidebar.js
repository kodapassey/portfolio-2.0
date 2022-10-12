import '../css/sidebar.scss'
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import LogoPNG from '../images/Una_K.png';
import 'react-bootstrap'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


export default function Sidebar () {
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
                display: isShown ? 'block' : 'none',
            }}>

                <div onClick={handleClick} className='sidebar-x'>
                    <FontAwesomeIcon icon={faClose} />
                </div>

                <Link onClick={window.screen.width < 1536 ? handleClick : changeNav} className="logo" to='/portfolio-2.0'>
                    <img className='sideK' src={LogoPNG} alt='logo' />
                    <p className='subLogo'>Koda</p>
                </Link>
                <nav>
                    <NavLink onClick={window.screen.width < 1536 ? handleClick : changeNav} exact='true' activeclassname='active' to='/portfolio-2.0'>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink>
                    <NavLink onClick={window.screen.width < 1536 ? handleClick : changeNav} exact='true' activeclassname='active' className='about-link' to='/portfolio-2.0/about'>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>
                    <NavLink onClick={window.screen.width < 1536 ? handleClick : changeNav} exact='true' activeclassname='active' className='contact-link' to='/portfolio-2.0/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                    <NavLink onClick={window.screen.width < 1536 ? handleClick : changeNav} exact='true' to='/portfolio-2.0/portfolio'>
                        <h3 className='portfolioBtn' >Portfolio</h3>
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
                </ul>
            </div>
        </>
    )
}
