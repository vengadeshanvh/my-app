import React, { useEffect , useState } from 'react';
import './CSS/Header.css'; // Assuming you have a CSS file for styling
import logo from './images/h3.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
            offset: 10, // offset (in px) from the original trigger point
            duration: 1000, // duration of animation (in ms)
            easing: 'linear', // easing function for the animation
            anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
        });
    }, []);

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className="niv" data-aos="fade-down">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo"/>
            </a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNav"
                aria-controls="navbarNav" 
                aria-expanded={!isNavCollapsed ? true : false} 
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/"> <FontAwesomeIcon icon={faHome}  /> Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"><FontAwesomeIcon icon={faBook}  /> Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"><FontAwesomeIcon icon={faCode} /> Pricing</a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/"> <FontAwesomeIcon icon={faAddressBook} /> Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );
}

export default Header;
