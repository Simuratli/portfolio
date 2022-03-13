import { NavLink } from 'react-router-dom'
import Home from '../../assets/navbar/menu.svg'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav>
        <div className="logo">Simuratli</div>
        <div className="menu">
          <ul className={`menu-list ${open && 'open'}`}>
            <li className="menu-list-item"><NavLink to='/'>HOME</NavLink></li>
            <li className="menu-list-item"><NavLink to="/about">ABOUT</NavLink></li>
            <li className="menu-list-item"><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
            <li className="menu-list-item"><NavLink to="/blog">BLOG</NavLink></li>
          </ul>
          <img onClick={() => { setOpen(!open) }} className='home-icon' src={Home} alt="home" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar