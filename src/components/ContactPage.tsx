
import './ContactPage.css'

const professionalLinks = [
  {
    label: 'Call me',
    detail: '+254 712 293 972',
    href: 'tel:+254712293972',
    icon: '↗',
    external: false,
  },
  {
    label: 'Email me',
    detail: 'jedidahgithinji19@gmail.com',
    href: 'mailto:jedidahgithinji19@gmail.com',
    icon: '✉',
    external: false,
  },
  {
    label: 'LinkedIn',
    detail: 'Connect professionally',
    href: 'https://www.linkedin.com/in/waithiegeni-jedidah/',
    icon: 'in',
    external: true,
  },
]

const personalLinks = [
  {
    label: 'Instagram',
    detail: 'Little glimpses of life',
    href: 'https://www.instagram.com/she.is.jed/',
    icon: '◎',
  },
  {
    label: 'X',
    detail: 'Thoughts, in real time',
    href: 'https://x.com/WaithiegeniJ',
    icon: '𝕏',
  },
  {
    label: 'Substack',
    detail: 'Words from my corner',
    href: 'https://waithiegeni.substack.com',
    icon: '✎',
  },
]

function ContactPage() {
  return (
    <main className="container contact-page">
      <div className="content-wrapper">
        <div className="main-content">
          <section className="contact-page-intro">
            <span className="contact-page-kicker">
              A LITTLE ABOUT WHERE TO FIND ME
            </span>

            <h1>Let's find our way to a conversation.</h1>

            <p>
              Have a project in mind, an idea to exchange, or simply
              found something that resonated with you? I'd love to
              hear from you.
            </p>
          </section>

          <div className="contact-link-panels">
            <section className="contact-link-panel professional-panel">
              <span className="contact-panel-number">01 / CONNECT</span>

              <h2>The Work Side</h2>

              <p className="contact-panel-description">
                For opportunities, collaborations, and good work.
              </p>

              <div className="contact-link-list">
                {professionalLinks.map((link) => (
                  <a
                    className="contact-link-card"
                    href={link.href}
                    key={link.label}
                    {...(
                      link.external
                        ? {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          }
                        : {}
                    )}
                  >
                    <span className="contact-link-icon" aria-hidden="true">
                      {link.icon}
                    </span>

                    <span className="contact-link-copy">
                      <span className="contact-link-label">
                        {link.label}
                      </span>
                      <span className="contact-link-detail">
                        {link.detail}
                      </span>
                    </span>

                    <span className="contact-link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section className="contact-link-panel personal-panel">
              <span className="contact-panel-number">02 / BE CURIOUS</span>

              <h2>The Stalk Me Side</h2>

              <p className="contact-panel-description">
                For the thoughts, the photographs, and the bits in between.
              </p>

              <div className="contact-link-list">
                {personalLinks.map((link) => (
                  <a
                    className="contact-link-card"
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-link-icon" aria-hidden="true">
                      {link.icon}
                    </span>

                    <span className="contact-link-copy">
                      <span className="contact-link-label">
                        {link.label}
                      </span>
                      <span className="contact-link-detail">
                        {link.detail}
                      </span>
                    </span>

                    <span className="contact-link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <p className="contact-page-signoff">
            Until then, may you find something here worth staying for.
          </p>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
