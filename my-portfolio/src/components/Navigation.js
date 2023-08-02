import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='App-nav'>
      <ul>
        <li>
          <Link className='App-link' to="/">Home</Link>
        </li>
        <li>
          <Link className='App-link' to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link className='App-link' to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
