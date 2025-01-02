import React, { useState } from 'react';
import { Home, Info, Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


function Navbar({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    if (onNavigate) onNavigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <div className="brand">
          <img src={logo} alt="BookHub Logo" className="brand-logo" />
          <span className="brand-name">MyBooks.LK</span>
          <div className="desktop-nav">
          <Link to="/" className="nav-link" onClick={() => handleNavigation('/')}>
          </Link>
         </div>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <Link to="/" className="nav-link" onClick={() => handleNavigation('/')}>
            <Home size={24} />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => handleNavigation('/about')}
          >
            <Info size={24} />
            <span>About</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link
            to="/"
            className="mobile-nav-link"
            onClick={() => handleNavigation('/')}
          >

            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="mobile-nav-link"
            onClick={() => handleNavigation('/about')}
          >
            <Info size={20} />
            <span>About</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
