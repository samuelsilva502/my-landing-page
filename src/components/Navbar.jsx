import { Link } from 'react-router-dom';

import "./Navbar.css";

import React from 'react'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h2>
          <link to={'/'}>mundo das receitas</link>
      </h2>
      <ul>
        <li>
            <link to={'/'}>Home</link>
        </li>
        <li>
          <link to={'/new'}className='new-btn'>
            novas receitas
          </link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar