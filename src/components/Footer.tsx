import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <span className="footer-logo">🐾 The Bernie Bears</span>
          <p className="footer-tagline">Lilah & Norah — spreading joy, bear hugs & fluffy paws one day at a time</p>
        </div>

        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/links">Social Links</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} The Bernie Bears. Made with 🩷, bear hugs & lots of treats.
        </p>
      </div>
    </footer>
  )
}

export default Footer
