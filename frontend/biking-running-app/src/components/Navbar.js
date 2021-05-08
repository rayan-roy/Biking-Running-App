import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Running-Biking App</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/session" className="nav-link">Session</Link>
          </li>
        </ul>
        </div>
      </nav>
    )
}

export default navbar
