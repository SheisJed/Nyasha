
import './Showcases.css'
import { portfolioConfig } from '../config/portfolio.config'
import { useLanguage } from '../contexts/LanguageContext'

function AchievementsShowcase() {
  const { t } = useLanguage()

  const education = portfolioConfig.achievements.find(
    (achievement) =>
      achievement.title === 'Bachelor of Science in Industrial Chemistry'
  )

  if (!education) return null

  return (
    <section className="education-section" id="education">
      <div className="education-heading">
        <span className="education-kicker">
          MY ACADEMIC BACKGROUND
        </span>
        <h2>{t.achievementShowcase}</h2>
        <p>
          The foundation I built, and the questions I explored along the way.
        </p>
      </div>

      <div className="education-list">
        <article className="education-feature">
          <div className="education-feature-icon" aria-hidden="true">
            {education.icon || '🎓'}
          </div>

          <div className="education-feature-content">
            <span className="education-feature-label">
              01 / EDUCATION
            </span>

            <h3>{education.title}</h3>

            <p className="education-feature-institution">
              {education.description}
            </p>

            {education.year && (
              <span className="education-year">
                Graduated {education.year}
              </span>
            )}
          </div>

          <span
            className="education-feature-number"
            aria-hidden="true"
          >
            01
          </span>
        </article>

        <article className="education-research">
          <div className="education-research-top">
            <div className="education-research-icon" aria-hidden="true">
              🧪
            </div>

            <div className="education-research-heading">
              <span className="education-feature-label">
                02 / RESEARCH PROJECT
              </span>

              <h3>
                Removal of Pb(II) Ions from Wastewater Using Activated
                Carbon Prepared from Banana Peels
              </h3>

              <p className="education-feature-institution">
                Jomo Kenyatta University of Agriculture and Technology
              </p>
            </div>
          </div>

          <div className="education-research-body">
            <p className="education-research-intro">
              Exploring the potential of agricultural waste as a
              locally available material for wastewater treatment.
            </p>

            <div className="education-research-details">
              <div className="education-research-detail">
                <span className="education-detail-number">01</span>
                <div>
                  <h4>Material preparation</h4>
                  <p>
                    Prepared activated carbon from banana peels
                    through controlled carbonisation and activation.
                  </p>
                </div>
              </div>

              <div className="education-research-detail">
                <span className="education-detail-number">02</span>
                <div>
                  <h4>Laboratory analysis</h4>
                  <p>
                    Used Atomic Absorption Spectroscopy (AAS) to
                    compare lead concentrations before and after
                    treatment.
                  </p>
                </div>
              </div>

              <div className="education-research-detail">
                <span className="education-detail-number">03</span>
                <div>
                  <h4>Experimental work</h4>
                  <p>
                    Conducted adsorption experiments, sample
                    preparation, centrifugation, and analytical testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="education-research-focus">
              <span className="education-focus-mark" aria-hidden="true">
                ✳
              </span>
              <p>
                A practical exploration of how locally available
                resources could contribute to wastewater treatment.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AchievementsShowcase
