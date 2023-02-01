import React from 'react';
import {Link } from 'react-router-dom';
import {Bar} from '../styles/NavBar.js';


export const NavBar = ({themeToggler}) => {
  return (
    <Bar>
      <button onClick={themeToggler}>Switch Theme</button>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/contact'>Contact</Link>
    </Bar>
  )
}