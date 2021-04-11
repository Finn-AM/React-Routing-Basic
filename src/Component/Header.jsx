import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [randomRoute, setRandomRoute] = useState('');

  let random = Math.random().toString(16).slice(5);

  return (
    <header className="header">
      <span className="logo">Company</span>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link onClick={() => setRandomRoute(random)} to={randomRoute}>
          Random
        </Link>
      </nav>
      <div className="hamburger">
        <span>Hamb</span>
      </div>
    </header>
  );
}

export default Header;
