import './Showcases.css'
import { portfolioConfig } from '../config/portfolio.config'
import { useLanguage } from '../contexts/LanguageContext'

function AchievementsShowcase() {
  const { t } = useLanguage()

  return (
    <section className="education-section" id="education">
      <div className="education-heading">
        <span className="education-kicker">A LITTLE ABOUT HOW I KEEP LEARNING</span>
        <h2>{t.achievementShowcase}</h2>
      </div>

      <div className="education-tree">
        {portfolioConfig.achievements.slice(0, 2).map((achievement, index) => (
          <div
            key={achievement.id}
            className={`education-branch education-branch-${index + 1}`}
          >
            <div className="education-node">
              {achievement.logo ? (
                <img
                  src={achievement.logo}
                  alt=""
                  className="education-logo"
                />
              ) : (
                <span className="education-icon">{achievement.icon}</span>
              )}
            </div>

            <div className="education-entry">
              <h3>{achievement.title}</h3>

              <p className="education-description">
                {achievement.description}
              </p>

              {achievement.year && (
                <span className="education-year">
                  {achievement.year}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AchievementsShowcase
```
