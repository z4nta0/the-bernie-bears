import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/links', label: 'Social Links' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-logo">
          <span className="paw-icon">🐾</span>
          <span className="logo-text">The Bernie Bears</span>
        </NavLink>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="nav-link"
              style={({ isActive }) => isActive ? {
                color: 'var(--text-dark)',
                background: 'var(--main)',
                border: '1.5px solid var(--main-dark)',
                boxShadow: '0 4px 12px rgba(139, 173, 137, 0.25)',
              } : {}}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
