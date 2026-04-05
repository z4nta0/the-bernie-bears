import './About.css'
import groupPhoto from '../assets/group-photo.jpg'
import lilahPhoto from '../assets/lilah.jpg'
import norahPhoto from '../assets/norah.jpg'

const About = () => {
  return (
    <div className="about page-enter">
      {/* Page Header */}
      <section className="page-header">
        <h1>Meet the Girls</h1>
        <p>Two sisters. One big fluffy adventure.</p>
      </section>

      {/* Main intro */}
      <section className="about-intro container">
        <div className="about-intro-text">
          <h2>The Bernie Bears Story</h2>
          <p>
            The Bernie Bears started with a simple idea — share the joy that Lilah and Norah
            bring every single day. These two Bernese Mountain Dog sisters have a gift for making
            people smile, whether they're dressed up in adorable outfits, romping through the snow,
            or just being their big, lovable selves.
          </p>
          <p>
            What began as a fun way to share family moments quickly grew into a community of
            fellow dog lovers, Bernie fans, and anyone who just needs a little more fluff in
            their day. We're so glad you're here!
          </p>
        </div>
        <div className="about-intro-img">
          <div className="img-card-placeholder">
            {/*<span style={{ fontSize: '5rem' }}>🐾</span>
            <p>Add a group photo here</p>*/}
            <img className='groupPhoto' src={groupPhoto} alt='Cartoonized picture of The Bernie Bears, both Lilah and Norah' />
          </div>
        </div>
      </section>

      <div className="paw-divider">🐾 🐾 🐾</div>

      {/* Meet Each Dog */}
      <section className="meet-the-girls container">
        <h2 className="section-title">Meet Lilah & Norah</h2>

        <div className="dog-cards">
          {/* Lilah */}
          <div className="dog-card dog-card--lilah">
            <div className="dog-card-img">
              <div className="img-placeholder-round">
                {/*<span>🌸</span>
                <p>Lilah's photo</p>*/}
                <img className='lilahPhoto' src={lilahPhoto} alt='Picture of Lilah, the older sister' />

              </div>
            </div>
            <div className="dog-card-content">
              <div className="dog-badge">The Older Sister</div>
              <h3>Lilah</h3>
              <p>
                Lilah is the first-born bear and she owns the title with grace and flair.
                She loves being the center of attention and has mastered the art of the
                perfect pose — whether it's for a silly video or a heartfelt moment. Lilah
                is the one who sets the tone, and her little sister Norah always follows her lead.
              </p>
              <div className="dog-traits">
                <span>🎀 Fashion forward</span>
                <span>📸 Natural model</span>
                <span>💕 Total sweetheart</span>
              </div>
            </div>
          </div>

          {/* Norah */}
          <div className="dog-card dog-card--norah">
            <div className="dog-card-img">
              <div className="img-placeholder-round">
                {/*<span>🌺</span>
                <p>Norah's photo</p>*/}
                <img className='norahPhoto' src={norahPhoto} alt='Picture of Norah, the younger sister' />

              </div>
            </div>
            <div className="dog-card-content">
              <div className="dog-badge dog-badge--norah">The Little Sister</div>
              <h3>Norah</h3>
              <p>
                Norah may be the younger sibling, but she has just as much personality packed
                into her fluffy frame. She's playful, goofy, and loves to steal the spotlight
                just when you least expect it. Norah brings the chaos, the comedy, and all of
                the heart to every Bernie Bears moment.
              </p>
              <div className="dog-traits">
                <span>😂 Class clown</span>
                <span>🏃 Always zooming</span>
                <span>🐾 Trouble maker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="fun-facts">
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Fun Facts</h2>
          <div className="facts-grid">
            {[
              { icon: '🐕', fact: 'Bernese Mountain Dogs', label: 'Breed' },
              { icon: '👭', fact: 'Sisters', label: 'Relationship' },
              { icon: '🎬', fact: 'Silly & Heartfelt', label: 'Content Style' },
              { icon: '🌍', fact: 'All Ages Welcome', label: 'Audience' },
              { icon: '👗', fact: 'Costume Queens', label: 'Signature Move' },
              { icon: '🩷', fact: 'Spreading Joy', label: 'Mission' },
            ].map(({ icon, fact, label }) => (
              <div key={label} className="fact-card">
                <span className="fact-icon">{icon}</span>
                <span className="fact-value">{fact}</span>
                <span className="fact-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
