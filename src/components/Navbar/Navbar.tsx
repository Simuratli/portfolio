import { NavLink } from 'react-router-dom'
import Home from '../../assets/navbar/menu.svg'
import React,{ useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav>
        <div className="logo"><NavLink to='/'>Simuratli</NavLink></div>
        <div className="menu">
          <ul className={`menu-list ${open && 'open'}`}>
            <li onClick={() => { setOpen(false) }} className="menu-list-item"><NavLink to='/'>HOME</NavLink></li>
            <li onClick={() => { setOpen(false) }} className="menu-list-item"><NavLink to="/about">ABOUT</NavLink></li>
            <li onClick={() => { setOpen(false) }} className="menu-list-item"><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
            <li onClick={() => { setOpen(false) }} className="menu-list-item"><NavLink to="/blog">BLOG</NavLink></li>
          </ul>
          <img onClick={() => { setOpen(!open) }} className='home-icon' src={Home} alt="home" />
        </div>
      </nav>
    </header>
  )
}

export default React.memo(Navbar)