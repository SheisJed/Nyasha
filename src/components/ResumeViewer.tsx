
import './ResumeViewer.css'
import { portfolioConfig } from '../config/portfolio.config'

function ResumeViewer() {
  const resumeUrl = portfolioConfig.personal.resumeUrl

  return (
    <section className="resume-section" id="resume">
      <div className="resume-card">
        <div className="resume-card-art" aria-hidden="true">
          <div className="resume-paper">
            <span className="resume-paper-line resume-paper-title" />
            <span className="resume-paper-line resume-paper-short" />
            <span className="resume-paper-rule" />
            <span className="resume-paper-line" />
            <span className="resume-paper-line resume-paper-medium" />
            <span className="resume-paper-line" />
            <span className="resume-paper-rule" />
            <span className="resume-paper-line resume-paper-medium" />
            <span className="resume-paper-line" />
            <span className="resume-paper-line resume-paper-short" />
          </div>

          <span className="resume-art-caption">
            THE FORMAL VERSION
          </span>
        </div>

        <div className="resume-card-copy">
          <span className="resume-kicker">
            THE FORMAL VERSION
          </span>

          <h2>A little more about my work.</h2>

          <p className="resume-card-intro">
            The qualifications, experience, and technical skills
            behind the person you meet on this website.
          </p>

          <div className="resume-highlights">
            <span>Water treatment</span>
            <span>Laboratory analysis</span>
            <span>Technical problem-solving</span>
          </div>

          <div className="resume-actions">
            <a href="#/cv" className="resume-btn resume-read-btn">
              Read my CV <span aria-hidden="true">→</span>
            </a>

            {resumeUrl && (
              <a
                href={resumeUrl}
                download="Waithiegeni_Jedidah_Resume.pdf"
                className="resume-btn download-btn"
                title="Download CV as PDF"
              >
                <span aria-hidden="true">↓</span>
                Download PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeViewer
