import '../css/sidebar.scss'
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import LogoPNG from '../images/Una_K.png';
import 'react-bootstrap'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img className='sideK' src={LogoPNG} alt='logo' />
                <p className='subLogo'>Koda</p>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' to='/portfolio'>
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
    )
}