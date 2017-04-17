import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <div className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand"> Maryland Facts QuizBowl</Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="how-to-play">How To Play</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
