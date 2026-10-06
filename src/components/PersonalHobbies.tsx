import './Showcases.css'
import { portfolioConfig } from '../config/portfolio.config'
import { useLanguage } from '../contexts/LanguageContext'

function PersonalHobbies() {
  const { t } = useLanguage()

  return (
    <section className="hobbies-section" id="hobbies">
      <div className="hobbies-heading">
        <span className="hobbies-kicker">THE HUMAN PART</span>

        <h2>{t.personalHobbies}</h2>

        <p>
          The things I tend to disappear into when nobody is asking me
          about water treatment.
        </p>
      </div>

      <div className="hobbies-list">
        {portfolioConfig.hobbies.map((hobby, index) => (
          <article
            key={hobby.id}
            className={`hobby-item hobby-item-${index + 1}`}
          >
            <div className="hobby-icon">{hobby.icon}</div>

            <div className="hobby-content">
              <span className="hobby-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{hobby.title}</h3>

              <p>{hobby.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PersonalHobbies