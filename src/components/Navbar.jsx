import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <div>
      <nav className='navbar'>
        <ul className='brand__name'>
          <li><a href="/">DIGITREND</a></li>
        </ul>

        <ul className='nav__items'>
          <li>
            <a 
              href="/" 
              className={`nav__link ${active === "Home" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); setActive("Home"); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="/about" 
              className={`nav__link ${active === "About" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); setActive("About"); }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="/services" 
              className={`nav__link ${active === "Services" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); setActive("Services"); }}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="/pricing" 
              className={`nav__link ${active === "Pricing" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); setActive("Pricing"); }}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className={`nav__link ${active === "Portfolio" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); setActive("Portfolio"); }}
            >
              Portfolio
            </a>
          </li>
        </ul>

        <button className='btn btn-success'>Contact Us</button>
      </nav>
    </div>
  );
}

export default Navbar;
