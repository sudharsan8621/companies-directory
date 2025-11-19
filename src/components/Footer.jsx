import React from 'react';
import '../styles/Footer.css';

// Import SVGs as URLs (Vite handles this natively)
import waveIcon from '../assets/svg/wave.svg';
import linkedinIcon from '../assets/svg/linkedin.svg';
import twitterIcon from '../assets/svg/twitter.svg';
import facebookIcon from '../assets/svg/facebook.svg';
import instagramIcon from '../assets/svg/instagram.svg';
import githubIcon from '../assets/svg/github.svg';
import emailIcon from '../assets/svg/email.svg';
import phoneIcon from '../assets/svg/phone.svg';
import locationIcon from '../assets/svg/location.svg';
import heartIcon from '../assets/svg/heart.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-wave">
        <img src={waveIcon} alt="Wave decoration" />
      </div>
      
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <span className="logo-icon">🏢</span>
              <h3>Companies Directory</h3>
            </div>
            <p className="footer-description">
              Your trusted platform for discovering and connecting with leading companies across industries. 
              Empowering business connections worldwide.
            </p>
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Industries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Employees</span>
              </div>
            </div>
          </div>

          <div className="footer-section footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#companies">Browse Companies</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section footer-industries">
            <h4>Top Industries</h4>
            <ul>
              <li><a href="#tech">Technology</a></li>
              <li><a href="#healthcare">Healthcare</a></li>
              <li><a href="#finance">Finance</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#energy">Energy</a></li>
              <li><a href="#retail">Retail</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <img src={emailIcon} alt="Email" className="contact-icon-svg" />
                <span>info@companiesdirectory.com</span>
              </div>
              <div className="contact-item">
                <img src={phoneIcon} alt="Phone" className="contact-icon-svg" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <img src={locationIcon} alt="Location" className="contact-icon-svg" />
                <span>123 Business Ave, Tech City, TC 12345</span>
              </div>
            </div>
            
            <div className="newsletter">
              <h5>Subscribe to Newsletter</h5>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  aria-label="Email for newsletter"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link linkedin">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link github">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>© {currentYear} Companies Directory. All rights reserved.</p>
              <p className="made-with">
                Made with <img src={heartIcon} alt="love" className="heart-icon" /> for Frontlines Media
              </p>
            </div>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#cookies">Cookie Policy</a>
              <span className="separator">•</span>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;