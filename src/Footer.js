import React from 'react';
import './CSS/Footer.css'; // Assuming you have a CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHouse, faBook, faCode, faAddressBook, faChevronUp, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    window.history.back();
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollToTopButton = document.querySelector('.scroll-to-top');
      if (scrollPosition > 300) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer id="contact">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className='inform'>
          <h1 className="head11">Contact Information:</h1>
          
          <p>
            <b><FontAwesomeIcon icon={faPhone} style={{ color: '#00FFFF' }} /> Phone:</b> 
            <a className="contact1" href="tel:+919688453974">+919688453974</a>
          </p>
          
          <p>
            <b><FontAwesomeIcon icon={faEnvelope} style={{ color: '#00FFFF' }} /> Email:</b> 
            <a className="contact1" href="mailto:VENGADESHANV1@GMAIL.COM">VENGADESHANV1@GMAIL.COM</a>
          </p>
          
          <p>
            <b><FontAwesomeIcon icon={faWhatsapp} style={{ color: '#00FFFF' }} /> WhatsApp:</b> 
            <a className="contact1" href="https://wa.me/9688453974">+919688453974</a>
          </p>
        </div>
        
        <div className='wish'>
          <nav>
            <h1 className="head2">Quick Links:</h1>
            <ul className="menu1">
              <li><a href="#top" className="nav2"><FontAwesomeIcon icon={faHouse} /> Home</a></li>
              <li><a href="#timeline" className="nav2"><FontAwesomeIcon icon={faBook} /> Education</a></li>
              <li><a href="#skill" className="nav2"><FontAwesomeIcon icon={faCode} /> Skills</a></li>
              <li><a href="#contact" className="nav2"><FontAwesomeIcon icon={faAddressBook} /> Contact</a></li>
            </ul>
          </nav>
          
          <h6 className="head8">
            <span>“</span> Thank you for visiting my portfolio <span>”</span>
          </h6>
          
          <hr className="hr" />
          
          <div className="social-media">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/9688453974" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>

          <button onClick={goBack} className="go-back">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </button>
          
          <button onClick={scrollToTop} className="scroll-to-top">
            <FontAwesomeIcon icon={faChevronUp} />
          </button>

          <div className="copy">{currentYear} &copy; All Rights Reserved. Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
