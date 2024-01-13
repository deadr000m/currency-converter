import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="app-menu">
      <div>
        <Link to={'/'}>Converter</Link>
      </div>
      <div>
        <Link to={'/rates'}>Rates</Link>
      </div>
    </div>
  );
}

export default Menu;
