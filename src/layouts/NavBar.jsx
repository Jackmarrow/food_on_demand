import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul className='flex'>
            <li className='mx-2'> <Link to={'/'}>Home</Link> </li>
            <li className='mx-2'> <Link to={'/menu'}>Menu</Link></li>
            <li className='mx-2'> <Link to={'/about'}>About</Link></li>
            <li className='mx-2'> <Link to={'/contact'}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar