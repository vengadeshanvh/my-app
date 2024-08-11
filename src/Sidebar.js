import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faGooglePlusG, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './CSS/Sidebar.css'; // Import the CSS file

const SidebarWithScrollButton = () => {
  return (
    <div>
      {/* Sidebar with social media links */}
      <div className="sticky-icon">
        <a href="https://www.instagram.com" className="Instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" style={{ color: 'red' }} /> Instagram
        </a>
        <a href="https://www.facebook.com" className="Facebook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="icon" style={{ color: 'rgb(58, 58, 252)' }} /> Facebook
        </a>
        <a href="https://plus.google.com" className="Google" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGooglePlusG} className="icon" style={{ color: 'brown' }} /> Google +
        </a>
        <a href="https://wa.me/9688453974" className="Whatsapp" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="icon" style={{ color: 'green' }} /> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default SidebarWithScrollButton;
