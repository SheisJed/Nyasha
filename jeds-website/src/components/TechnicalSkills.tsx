import './Showcases.css'
import { portfolioConfig } from '../config/portfolio.config'
import { useLanguage } from '../contexts/LanguageContext'

function TechnicalSkills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="skills-section">
      <div className="skills-heading">
        <span className="skills-kicker">THE THINGS I GET TO PLAY WITH</span>

        <h2>{t.technicalSkills}</h2>

        <p>
          A growing collection of things I know, use, and keep learning.
        </p>
      </div>

      <div className="skills-list">
        {Object.entries(portfolioConfig.technicalSkills).map(
          ([category, skills], categoryIndex) => (
            <div
              key={category}
              className={`skills-category skills-category-${categoryIndex + 1}`}
            >
              <div className="skills-category-heading">
                <span className="skills-category-number">
                  {String(categoryIndex + 1).padStart(2, '0')}
                </span>

                <h3>{category}</h3>
              </div>

              <div className="skills-items">
                {skills.map((skill) => (
                  <span key={skill} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default TechnicalSkills