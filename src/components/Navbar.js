import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [isFolded,setFolded]=useState(false);
    const showNav=()=>{
        setFolded(!isFolded);
    }
  return (
    <div className='header'>
            <div className='logoContainer'>
                <img src={logo} alt=''/>
                <div className={!isFolded?'meuicon':'meuicon rot '}> <AiOutlineMenu onClick={showNav}/> </div>
            </div>
            <nav className={!isFolded?'navbar folded':'navbar expand'}>
                <ul className='nav-links'>
                <li><NavLink to='/' onClick={()=>setFolded(false)}>Home</NavLink></li>
                <li><NavLink to='/about' onClick={()=>setFolded(false)}>About</NavLink></li>
                </ul>
            </nav>
    </div>

  )
}

export default Navbar;