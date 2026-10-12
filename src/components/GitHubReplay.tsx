
import { useState } from 'react'
import './GitHubReplay.css'
import WhimsyCompanion from './WhimsyCompanion'

type ExperienceEntry = {
  number: string
  emoji: string
  title: string
  role: string
  company: string
  dates?: string
  summary: string
  highlights: string[]
}

const workExperience: ExperienceEntry[] = [
  {
    number: '01',
    emoji: '🔬',
    title: 'Where It Started',
    role: 'Laboratory Technician — Attaché',
    company: 'State Department of Roads, Ministry of Infrastructure',
    dates: 'Jan 2023 – Apr 2023',
    summary:
      'Built a foundation in laboratory analysis, analytical instruments, and technical reporting.',
    highlights: [
      'Conducted laboratory analysis of water, soil, cement, and construction materials.',
      'Operated analytical instruments including AAS and Flame Photometry.',
      'Prepared technical laboratory reports supporting engineering and construction decisions.',
      'Maintained laboratory quality assurance and safety standards.',
    ],
  },
  {
    number: '02',
    emoji: '📞',
    title: 'Learning People',
    role: 'Customer Service Representative',
    company: 'CCI Global',
    dates: 'Oct 2024 – May 2026',
    summary:
      'Developed communication, empathy, and practical problem-solving through customer support.',
    highlights: [
      'Resolved customer concerns through active listening, clear communication, and practical problem-solving.',
      'Balanced empathy with accurate policy interpretation during complex service interactions.',
      'Investigated account issues and guided customers toward appropriate solutions.',
      'Collaborated with cross-functional teams to support timely issue resolution.',
    ],
  },
  {
    number: '03',
    emoji: '🏭',
    title: 'Chemistry Meets Industry',
    role: 'Quality Control Analyst — Volunteer',
    company: 'Devki Group of Companies',
    dates: 'Feb 2026 – Apr 2026',
    summary:
      'Applied chemistry and precision measurement to quality checks in steel manufacturing.',
    highlights: [
      'Performed in-process and final quality inspections across steel manufacturing operations.',
      'Conducted dimensional inspection and tensile strength testing to verify product quality.',
      'Used Vernier calipers, micrometers, and UTS testing equipment for precision measurements.',
      'Identified non-conforming products and maintained quality inspection records.',
    ],
  },
  {
    number: '04',
    emoji: '🌊',
    title: 'Coming Back to Water',
    role: 'Water Treatment Design Engineer',
    company: 'Kridha Limited',
    dates: 'May 2026 – Present',
    summary:
      'Designs water treatment systems and translates water quality results into practical solutions.',
    highlights: [
      'Design and size water treatment systems based on client requirements and raw water analysis.',
      'Contribute to the design of reverse osmosis, softening, filtration, and wastewater treatment systems.',
      'Interpret water quality analyses to recommend appropriate treatment solutions.',
      'Prepare technical proposals, quotations, and project documentation.',
      'Collaborate with technical and sales teams to develop customer-specific plant designs.',
    ],
  },
  {
    number: '05',
    emoji: '🧪',
    title: 'What I Actually Do',
    role: 'Water, Chemistry & Problem-Solving',
    company: 'Technical Work',
    summary:
      'Connects water analysis, treatment design, documentation, and real-world client needs.',
    highlights: [
      'Translate raw water analysis into practical treatment requirements.',
      'Work across filtration, softening, reverse osmosis, and wastewater treatment.',
      'Prepare technical proposals, quotations, and supporting documentation.',
      'Balance technical requirements with client needs and project realities.',
      'Keep learning because every water problem seems to come with another question.',
    ],
  },
  {
    number: '06',
    emoji: '🌱',
    title: "Where I'm Going",
    role: 'Building Better Water Systems',
    company: "The Questions I'm Following",
    summary:
      'Explores water reuse, low-energy treatment, and circular systems that support water security.',
    highlights: [
      'Exploring better ways to treat and reuse water.',
      'Learning how low-energy treatment can make water systems more practical and sustainable.',
      'Thinking about circular water systems, especially for communities that face water insecurity.',
      'Growing from water treatment design into deeper technical understanding and problem-solving.',
      'Writing, learning, and asking better questions along the way.',
    ],
  },
]

function GitHubReplay() {
  const [expandedEntries, setExpandedEntries] = useState<
    Record<string, boolean>
  >({})

  const toggleEntry = (number: string) => {
    setExpandedEntries((current) => ({
      ...current,
      [number]: !current[number],
    }))
  }

  return (
    <section className="work-experience" id="experience">
      <div className="experience-heading">
        <span className="experience-kicker">
          A LITTLE ABOUT WHERE I'VE BEEN
        </span>

        <h2>Work Experience</h2>

        <p>A career that kept circling back to water.</p>
      </div>

      <div className="experience-stage">
        <div className="experience-cards">
          {workExperience.map((experience) => {
            const isExpanded = Boolean(
              expandedEntries[experience.number]
            )
            const detailsId = `experience-details-${experience.number}`

            return (
              <article
                key={experience.number}
                className={`experience-card ${
                  isExpanded ? 'is-expanded' : ''
                }`}
              >
                <div className="experience-card-top">
                  <span className="experience-number">
                    {experience.number}
                  </span>

                  <span className="experience-emoji" aria-hidden="true">
                    {experience.emoji}
                  </span>
                </div>

                <h3>{experience.title}</h3>

                <p className="experience-role">
                  {experience.role}
                </p>

                <p className="experience-company">
                  {experience.company}
                </p>

                {experience.dates && (
                  <p className="experience-dates">
                    {experience.dates}
                  </p>
                )}

                <p className="experience-summary">
                  {experience.summary}
                </p>

                <button
                  type="button"
                  className="experience-toggle"
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                  onClick={() => toggleEntry(experience.number)}
                >
                  {isExpanded ? 'Show less' : 'Read more'}

                  <span aria-hidden="true">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>

                <div
                  id={detailsId}
                  className="experience-details"
                  hidden={!isExpanded}
                >
                  <ul className="experience-highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>

        <div className="experience-whimsy-bottom">
          <WhimsyCompanion />
        </div>
      </div>
    </section>
  )
}

export default GitHubReplay
