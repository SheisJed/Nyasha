import './ResumeViewer.css'
import { portfolioConfig } from '../config/portfolio.config'

function ResumeViewer() {
  const resumeUrl = portfolioConfig.personal.resumeUrl

  return (
    <section className="resume-section" id="resume">
      <div className="resume-card">
        <div className="resume-card-art" aria-hidden="true">
          <div className="resume-document-icon">
            <svg
              viewBox="0 0 64 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.5H38L53 19.5V68C53 70 51 71.5 49 71.5H12C10 71.5 8.5 70 8.5 68V8C8.5 6 10 4.5 12 4.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M38 5V20H52"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M18 33H43M18 42H43M18 51H36"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 23H28"
                stroke="#ED85C7"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
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