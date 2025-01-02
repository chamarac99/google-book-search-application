import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          Created by <strong>Chamara Bandara</strong> | © {new Date().getFullYear()}
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
