import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder submit handler — wire up to a backend or email service
    setSubmitted(true)
  }

  return (
    <div className="contact page-enter">
      <section className="page-header">
        <h1>Say Hello!</h1>
        <p>We'd love to hear from you — Lilah & Norah are always listening 🐾</p>
      </section>

      <section className="contact-section">
        <div className="contact-grid">

          {/* Info panel */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have a question, a collaboration idea, or just want to share how much you
              love Lilah & Norah? Drop us a message — we read every one!
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email Us</strong>
                  <p>hello@theberniebears.com</p>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Social Media</strong>
                  <p>DM us on Facebook or Instagram</p>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">⏱️</span>
                <div>
                  <strong>Response Time</strong>
                  <p>Usually within 1–2 business days</p>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <span>🐻</span>
              <p>
                For collabs, sponsorships, or media inquiries, please include
                "Collab" in your subject line so we can find you quickly!
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-message">
                <span className="success-emoji">🐾</span>
                <h3>Message sent!</h3>
                <p>
                  Thanks for reaching out! Lilah & Norah are doing a happy dance and sending you the biggest bear hugs right now. We'll get back to you soon. 🩷
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject...</option>
                    <option value="general">General Hello 👋</option>
                    <option value="collab">Collab / Sponsorship 🤝</option>
                    <option value="media">Media Inquiry 📰</option>
                    <option value="fan">Fan Mail 🩷</option>
                    <option value="other">Something Else 🐾</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message 🐾
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom bear wave */}
      <section className="contact-footer-wave">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="wave-bears">🐻 🐾 🐻</p>
          <p className="wave-text">Lilah & Norah can't wait to hear from you!</p>
        </div>
      </section>
    </div>
  )
}

export default Contact
