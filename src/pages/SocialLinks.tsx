import './SocialLinks.css'
import React from 'react'

const socials = [
  {
    platform: 'Facebook',
    handle: '@TheBernieBears',
    description: 'Our home base! Join the community, watch videos, and keep up with all the latest bear adventures.',
    url: 'https://facebook.com/placeholder',
    emoji: '📘',
    color: '#1877F2',
    bgColor: '#e7f0fd',
  },
  {
    platform: 'Instagram',
    handle: '@theberniebears',
    description: 'Beautiful photos, reels, and behind-the-scenes moments from Lilah & Norah\'s daily life.',
    url: 'https://instagram.com/placeholder',
    emoji: '📸',
    color: '#E1306C',
    bgColor: '#fdeef3',
  },
  {
    platform: 'YouTube',
    handle: 'The Bernie Bears',
    description: 'Full-length videos, funny skits, seasonal specials and heartfelt stories — all in one place.',
    url: 'https://youtube.com/placeholder',
    emoji: '▶️',
    color: '#FF0000',
    bgColor: '#fff0f0',
  },
  {
    platform: 'TikTok',
    handle: '@theberniebears',
    description: 'Short clips, trending sounds and maximum fluff. For your daily dose of Bernie Bear chaos.',
    url: 'https://tiktok.com/placeholder',
    emoji: '🎵',
    color: '#010101',
    bgColor: '#f0f0f0',
  },
]

const SocialLinks = () => {
  return (
    <div className="social-links page-enter">
      <section className="page-header">
        <h1>Follow the Bears</h1>
        <p>Find Lilah & Norah on all their favorite platforms</p>
      </section>

      <section className="links-section container">
        <p className="links-intro">
          Whether you love long videos, quick clips, or scrolling through adorable photos,
          there's a place for every kind of Bernie Bears fan. 🐾
        </p>

        <div className="social-cards">
          {socials.map(({ platform, handle, description, url, emoji, color, bgColor }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{ '--card-color': color, '--card-bg': bgColor } as React.CSSProperties}
            >
              <div className="social-card-icon" style={{ background: bgColor }}>
                <span>{emoji}</span>
              </div>
              <div className="social-card-body">
                <div className="social-platform">{platform}</div>
                <div className="social-handle" style={{ color }}>{handle}</div>
                <p className="social-desc">{description}</p>
              </div>
              <div className="social-card-arrow" style={{ color }}>
                →
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="social-cta">
        <div className="container">
          <h2>Don't miss a thing! 🐾</h2>
          <p>
            Hit follow, turn on notifications, and become part of The Bernie Bears community.
            New content is always just around the corner!
          </p>
        </div>
      </section>
    </div>
  )
}

export default SocialLinks
