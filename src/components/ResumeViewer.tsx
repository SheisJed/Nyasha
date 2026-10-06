import { useState } from 'react'
import './ResumeViewer.css'
import { portfolioConfig } from '../config/portfolio.config'

function ResumeViewer() {
  const [isExpanded, setIsExpanded] = useState(false)
  const resumeUrl = portfolioConfig.personal.resumeUrl

  if (!resumeUrl) {
    return null
  }

  return (
    <section className="resume-section" id="resume">
      <div className="resume-heading">
        <span className="resume-kicker">THE FORMAL VERSION</span>

        <div className="resume-heading-row">
          <div>
            <h2>Resume</h2>

            <p>
              For when you want the short, professional version of me.
            </p>
          </div>

          <div className="resume-actions">
            <a
              href={resumeUrl}
              download="Waithiegeni_Jedidah_Resume.pdf"
              className="resume-btn download-btn"
              title="Download resume"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
              Download
            </a>

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="resume-btn expand-btn"
              title={isExpanded ? 'Collapse resume' : 'Expand resume'}
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>
      </div>

      <div className={`resume-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="resume-preview">
          <iframe
            src={`${resumeUrl}#view=FitH`}
            title="Waithiegeni Jedidah resume"
            className="resume-iframe"
          />

          <div className="resume-overlay">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn view-full-btn"
            >
              Open Full Screen →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeViewer