import { Link } from 'react-router-dom';

import "./Navbar.css";

import React from 'react'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h2>
          <link to={'/'}/>mundo das receitas
      </h2>
      <ul>
        <li>
            <link to={'/'}/>Home
        </li>
        <li>
          <link to={'/new'}className='new-btn'/>
            novas receitas
        </li>
      </ul>
    </nav>
  )
}

export default Navbar