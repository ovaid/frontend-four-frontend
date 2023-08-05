import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='nav'>
        <h2>TravelMedia.in </h2>
        <div className='sub-nav'>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/notification'>NOTF</NavLink>
            <NavLink to='./aboute'>ABOUT</NavLink>
            <NavLink to='/profile'>PROFILE</NavLink>
        </div>
    </div>
  )
}

export default NavBar ;