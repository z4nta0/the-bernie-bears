import { Link } from 'react-router-dom'
import './Home.css'
import portraitBoth from '../assets/portrait-both.jpg'

const Home = () => {
  return (
    <div className="home page-enter">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Welcome to the world of</p>
          <h1 className="hero-title">The Bernie Bears</h1>
          <p className="hero-sub">
            Meet Lilah & Norah — two adorable Bernese Mountain Dog sisters bringing
            laughter, love, bear hugs, and the occasional dramatic outfit to your feed. 🐾
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Meet the Girls</Link>
            <Link to="/links" className="btn btn-outline">Follow Along</Link>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-blob" />
          <div className="hero-img-frame">
            <img
              src={portraitBoth}
              alt="Lilah and Norah, the Bernie Bears"
              className="hero-img"
            />
          </div>
          <div className="floating-badge floating-badge--1">🌸 Lilah</div>
          <div className="floating-badge floating-badge--2">🌺 Norah</div>
        </div>
      </section>

      {/* Divider */}
      <div className="paw-divider">🐾 🐾 🐾</div>

      {/* Features Section */}
      <section className="features container">
        <h2 className="section-title">Life with the Bernie Bears</h2>
        <p className="section-sub">Every day is an adventure when you've got fluffy ears and a flair for drama</p>

        <div className="features-grid">
          {[
            {
              emoji: '🎭',
              title: 'Fun & Silly Videos',
              desc: 'From costume adventures to comedic hijinks, Lilah and Norah never fail to entertain.',
            },
            {
              emoji: '🐻',
              title: 'Bear Hugs',
              desc: 'Giving bear hugs is what Lilah & Norah do best — and they\'ve got plenty to go around for everyone.',
            },
            {
              emoji: '👗',
              title: 'Fabulous Outfits',
              desc: 'These girls take their wardrobe seriously. Bear ears? Bunny ears? Yes to all of it.',
            },
            {
              emoji: '🌿',
              title: 'Outdoor Adventures',
              desc: 'Snow days, garden romps, and everything in between — life is better outside.',
            },
          ].map(({ emoji, title, desc }) => (
            <div key={title} className="feature-card">
              <div className="feature-emoji">{emoji}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Join the Bernie Bears family!</h2>
          <p>Follow Lilah & Norah across all their favorite platforms and never miss a moment — or a bear hug.</p>
          <Link to="/links" className="btn btn-white">See All Social Links 🐾</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
