import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-container">
        <a href="/" className="social-media-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="social-media-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="social-media-icon">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <div className="contact-container">
        <p className="contact-info">Phone: 123-456-7890</p>
        <p className="contact-info">Email: example@example.com</p>
      </div>
      <div className="about-container">
        <p className="about-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius urna eget mattis
          aliquam.
        </p>
      </div>
      <div className="partnership-container">
        <p className="partnership-info">Partnership Groups: Lorem, Ipsum, Dolor</p>
      </div>
    </footer>
  );
};

export default Footer;
