import './ContactSection.css'

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section card">
      <div className="contact-content">
        <div className="contact-intro">
          <p className="contact-kicker">LET'S TALK</p>

          <h2>Have a question, an idea, or a water problem?</h2>

          <p>
            Whether you want to talk about water, chemistry, writing, a project,
            or simply have a question, I’d love to hear from you.
          </p>
        </div>

        <div className="contact-actions">
          <a
            href="mailto:jedidahgithinji12@gmail.com"
            className="contact-button primary"
          >
            ✉️ Email me
          </a>

          <a
            href="tel:+254712293972"
            className="contact-button"
          >
            📞 Call me
          </a>

          <a
            href="https://www.linkedin.com/in/waithiegeni-jedidah/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://x.com/WaithiegeniJ"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            𝕏 X
          </a>

          <a
            href="https://www.instagram.com/she.is.jed/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            📷 Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection