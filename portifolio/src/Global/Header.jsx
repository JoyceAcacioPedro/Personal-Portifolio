import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/aboutme', label: 'About Me' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
  ];

  const ctaLinks = [
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header-wrapper">
      <div className="header-container">

        <div className="logo">
          <Link to="/"><h2>Joyce<span>.</span></h2></Link>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {ctaLinks.map(link => (
              <li key={link.to} className="btn-pink">
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Header;