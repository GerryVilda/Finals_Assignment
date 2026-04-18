import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-name">Gerry Vilda</span>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }: any) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }: any) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }: any) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
