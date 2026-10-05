import './ProfileOverview.css'
import { portfolioConfig } from '../config/portfolio.config'
import { useLanguage } from '../contexts/LanguageContext'

function ProfileOverview() {
  const { t } = useLanguage()

  return (
    <section className="profile-overview" id="profile">
      <div className="profile-content">
        <div className="profile-center">
          <h1 className="profile-name">{portfolioConfig.personal.name}</h1>

          <p className="profile-title">
            {portfolioConfig.personal.title}
          </p>

          <div className="profile-location">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C5.2 0 3 2.2 3 5c0 3.5 5 11 5 11s5-7.5 5-11c0-2.8-2.2-5-5-5zm0 7.5c-1.4 0-2.5-1.1-2.5-2.5S6.6 2.5 8 2.5s2.5-1.1 2.5-2.5S9.4 7.5 8 7.5z" />
            </svg>

            <span>{portfolioConfig.personal.location}</span>
          </div>

          <p className="profile-description">
            {t.profileDescription.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < t.profileDescription.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProfileOverview
