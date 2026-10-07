import './GitHubReplay.css'

export default function GitHubReplay() {
const workExperience = [
  {
    number: '01',
    emoji: '🔬',
    title: 'Where It Started',
    role: 'Laboratory Technician — Attaché',
    company: 'State Department of Roads, Ministry of Infrastructure',
    dates: 'Jan 2023 – Apr 2023',
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
    highlights: [
      'Design and size water treatment systems based on client requirements and raw water analysis.',
      'Contribute to the design of reverse osmosis, softening, filtration, and wastewater treatment systems.',
      'Interpret water quality analyses to recommend appropriate treatment solutions.',
      'Prepare technical proposals, quotations, and project documentation.',
      'Collaborate with technical and sales teams to develop customer-specific plant designs.',
    ],
  },
]

  const jedBranches = [
    {
      number: '05',
      emoji: '🧪',
      title: 'What I Actually Do',
      role: 'Water, Chemistry & Problem-Solving',
      company: 'Technical Work',
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
      highlights: [
        'Exploring better ways to treat and reuse water.',
        'Learning how low-energy treatment can make water systems more practical and sustainable.',
        'Thinking about circular water systems, especially for communities that face water insecurity.',
        'Growing from water treatment design into deeper technical understanding and problem-solving.',
        'Writing, learning, and asking better questions along the way.',
      ],
    },
  ]

  return (
    <section className="work-experience" id="experience">
      <div className="experience-heading">
        <span className="experience-kicker">
          A LITTLE ABOUT WHERE I'VE BEEN
        </span>

        <h2>Work Experience</h2>

        <p>
          A career that kept circling back to water.
        </p>
      </div>

      <div className="experience-tree">
        <div className="experience-tree-line" />

        <div className="experience-work-column">
          {workExperience.map((experience) => (
            <article
              key={experience.number}
              className="experience-entry experience-entry-left"
            >
              <div className="experience-entry-content">
                <span className="experience-number">
                  {experience.number}
                </span>

                <span className="experience-emoji">
                  {experience.emoji}
                </span>

                <h3>{experience.title}</h3>

                <p className="experience-role">
                  {experience.role}
                </p>

                <p className="experience-company">
                  {experience.company}
                </p>

                <p className="experience-dates">
                  {experience.dates}
                </p>

                <ul className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="experience-node" />
            </article>
          ))}
        </div>

        <div className="experience-jed-column">
          {jedBranches.map((branch) => (
            <article
              key={branch.number}
              className="experience-entry experience-entry-right"
            >
              <span className="experience-node" />

              <div className="experience-entry-content">
                <span className="experience-number">
                  {branch.number}
                </span>

                <span className="experience-emoji">
                  {branch.emoji}
                </span>

                <h3>{branch.title}</h3>

                <p className="experience-role">
                  {branch.role}
                </p>

                <p className="experience-company">
                  {branch.company}
                </p>

                <ul className="experience-highlights">
                  {branch.highlights.map((highlight) => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}