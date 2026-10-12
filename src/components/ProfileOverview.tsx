import './ProfileOverview.css'
import { portfolioConfig } from '../config/portfolio.config'
import { useLanguage } from '../contexts/LanguageContext'

function ProfileOverview() {
  const { t } = useLanguage()

  const paragraphs = t.profileDescription
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <section className="profile-overview" id="profile">
      <div className="profile-content">
        <div className="profile-layout">
          <div className="profile-name-column">
            <span className="profile-butterfly" aria-hidden="true">
              ✧ 🦋 ✧
            </span>

            <h1 className="profile-name">
              {portfolioConfig.personal.name}
            </h1>

            <p className="profile-title">
              {portfolioConfig.personal.title}
            </p>

            <div className="profile-location">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0C5.2 0 3 2.2 3 5c0 3.5 5 11 5 11s5-7.5 5-11c0-2.8-2.2-5-5-5zm0 7.5c-1.4 0-2.5-1.1-2.5-2.5S6.6 2.5 8 2.5z" />
              </svg>

              <span>{portfolioConfig.personal.location}</span>
            </div>
          </div>

          <div className="profile-description-column">
            <span className="profile-intro-label">
              A LITTLE ABOUT ME
            </span>

            <div className="profile-description">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileOverview