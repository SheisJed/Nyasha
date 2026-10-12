
import './CVPage.css'
import { portfolioConfig } from '../config/portfolio.config'

const experience = [
  {
    dates: 'May 2026 – Present',
    role: 'Water Treatment Design Engineer',
    organisation: 'Kridha Limited',
    points: [
      'Design and size water treatment systems according to client requirements and raw water analysis.',
      'Contribute to reverse osmosis, softening, filtration, and wastewater treatment system design.',
      'Interpret water quality analyses to recommend appropriate treatment solutions.',
      'Prepare technical proposals, quotations, and project documentation.',
      'Collaborate with technical and sales teams to develop customer-specific plant designs.',
    ],
  },
  {
    dates: 'Feb 2026 – Apr 2026',
    role: 'Quality Control Assistant (Volunteer)',
    organisation: 'Devki Steel Mills',
    points: [
      'Performed in-process and final quality inspections across acid pickling, phosphating, wire drawing, and annealing operations.',
      'Checked product conformity through dimensional inspections, tensile strength testing, and specification validation.',
      'Used Vernier callipers, micrometer screw gauges, and universal tensile testing equipment.',
      'Identified non-conforming products before downstream processing and maintained quality inspection records.',
    ],
  },
  {
    dates: 'Oct 2024 – May 2026',
    role: 'Customer Service Representative — Call Center Operations',
    organisation: 'Call Center International (CCI)',
    points: [
      'Resolved customer concerns through active listening, clear communication, and practical problem-solving.',
      'Balanced empathy with accurate policy interpretation while managing complex service interactions.',
      'Investigated account issues and guided customers towards appropriate solutions.',
      'Met quality and performance expectations while managing high daily call volumes.',
      'Collaborated with cross-functional teams to support timely issue resolution.',
    ],
  },
  {
    dates: 'Jan 2023 – Apr 2023',
    role: 'Laboratory Technician (Attaché)',
    organisation: 'Materials Testing and Research Division, State Department for Roads',
    points: [
      'Analysed water, soil, cement, and construction materials to support infrastructure quality and regulatory compliance.',
      'Operated analytical instruments including Atomic Absorption Spectroscopy (AAS) and Flame Photometry.',
      'Prepared technical laboratory reports to inform engineering and construction decisions.',
      'Maintained laboratory quality assurance and safety standards throughout analytical procedures.',
    ],
  },
]

const skillGroups = [
  {
    title: 'Water & process engineering',
    skills: [
      'Water treatment design',
      'Water chemistry',
      'Water quality interpretation',
      'Water and wastewater treatment',
      'Filtration',
      'Softening',
      'Reverse osmosis',
      'Process engineering',
    ],
  },
  {
    title: 'Laboratory & analytical techniques',
    skills: [
      'Atomic Absorption Spectroscopy (AAS)',
      'FTIR',
      'AES',
      'Flame Photometry',
      'Titration',
      'Sample preparation',
      'Chemical analysis',
      'Water sampling',
    ],
  },
  {
    title: 'Quality & technical practice',
    skills: [
      'QA/QC procedures',
      'Materials testing',
      'Dimensional inspection',
      'Tensile strength testing',
      'Regulatory awareness',
      'Technical documentation',
      'Problem-solving',
      'Technical reporting',
    ],
  },
]

function CVPage() {
  const resumeUrl = portfolioConfig.personal.resumeUrl

  return (
    <main className="container cv-page">
      <article className="cv-sheet">
        <header className="cv-header">
          <div className="cv-heading-copy">
            <span className="cv-eyebrow">CURRICULUM VITAE</span>
            <h1>Waithiegeni Jedidah</h1>
            <p className="cv-professional-title">
              Industrial Chemistry Graduate · Water Treatment Design Engineer
            </p>
            <p className="cv-header-intro">
              Chemistry, water quality, and practical engineering solutions.
            </p>
            
<div className="cv-contact-links">
  <a href="mailto:jedidahgithinji12@gmail.com">
    jedidahgithinji19@gmail.com
  </a>
  <a href="tel:+254712293972">
    +254 712 293 972
  </a>
  <a
    href="https://www.linkedin.com/in/waithiegeni-jedidah/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn <span aria-hidden="true">↗</span>
  </a>
</div>

          </div>

          {resumeUrl && (
            <a
              href={resumeUrl}
              download="Waithiegeni_Jedidah_Resume.pdf"
              className="cv-download"
            >
              <span aria-hidden="true">↓</span>
              Download PDF
            </a>
          )}
        </header>

        <div className="cv-body">
          <section className="cv-section cv-profile">
            <div className="cv-section-label">
              <span>01</span>
              <h2>Professional Profile</h2>
            </div>

            <div className="cv-section-content">
              <p>
                Industrial Chemistry graduate with experience spanning
                laboratory analysis, materials testing, quality control,
                customer service, and water treatment plant design.
                Skilled in interpreting water quality results, supporting
                treatment system design, and preparing technical
                documentation.
              </p>
              <p>
                Interested in applying scientific principles to practical
                engineering and environmental challenges. I believe
                engineering has its greatest impact when it quietly makes
                everyday life better.
              </p>
            </div>
          </section>

          <section className="cv-section">
            <div className="cv-section-label">
              <span>02</span>
              <h2>Professional Experience</h2>
            </div>

            <div className="cv-section-content cv-experience-list">
              {experience.map((item) => (
                <article
                  className="cv-role"
                  key={`${item.organisation}-${item.role}`}
                >
                  <div className="cv-role-heading">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="cv-organisation">{item.organisation}</p>
                    </div>
                    <span className="cv-dates">{item.dates}</span>
                  </div>

                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <div className="cv-section-label">
              <span>03</span>
              <h2>Education</h2>
            </div>

            <div className="cv-section-content">
              <article className="cv-education">
                <h3>Bachelor of Science in Industrial Chemistry</h3>
                <p className="cv-organisation">
                  Jomo Kenyatta University of Agriculture and Technology
                </p>
                <p className="cv-dates">Sep 2019 – Jun 2024</p>
              </article>
            </div>
          </section>

          <section className="cv-section">
            <div className="cv-section-label">
              <span>04</span>
              <h2>Research Project</h2>
            </div>

            <div className="cv-section-content">
              <article className="cv-project">
                <h3>
                  Removal of Pb(II) Ions from Wastewater Using Activated
                  Carbon Prepared from Banana Peels
                </h3>
                <p className="cv-organisation">
                  Research project · Jomo Kenyatta University of Agriculture
                  and Technology
                </p>
                <ul>
                  <li>
                    Prepared activated carbon from agricultural waste
                    through controlled carbonisation and activation.
                  </li>
                  <li>
                    Used Atomic Absorption Spectroscopy (AAS) to compare
                    lead concentrations before and after treatment.
                  </li>
                  <li>
                    Conducted adsorption experiments, sample preparation,
                    centrifugation, and analytical testing.
                  </li>
                  <li>
                    Explored the potential of locally available materials
                    for wastewater treatment.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section className="cv-section">
            <div className="cv-section-label">
              <span>05</span>
              <h2>Technical Skills</h2>
            </div>

            <div className="cv-section-content cv-skills">
              {skillGroups.map((group) => (
                <div className="cv-skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <div className="cv-section-label">
              <span>06</span>
              <h2>Community & Voluntary Engagement</h2>
            </div>

            <div className="cv-section-content cv-experience-list">
              <article className="cv-role">
                <div className="cv-role-heading">
                  <div>
                    <h3>Volunteer — Children's Department</h3>
                    <p className="cv-organisation">
                      Fatima Mission Hospital
                    </p>
                  </div>
                  <span className="cv-dates">2015 – 2018</span>
                </div>
                <ul>
                  <li>
                    Supported daily operational activities in a paediatric
                    care environment.
                  </li>
                  <li>
                    Assisted with record organisation and maintaining a
                    clean, safe environment.
                  </li>
                </ul>
              </article>

              <article className="cv-role">
                <div className="cv-role-heading">
                  <div>
                    <h3>Volunteer</h3>
                    <p className="cv-organisation">UNBOUND, Nairobi</p>
                  </div>
                  <span className="cv-dates">2015 – 2018</span>
                </div>
                <ul>
                  <li>
                    Assisted with documentation, record organisation,
                    beneficiary services, and correspondence management.
                  </li>
                </ul>
              </article>

              <article className="cv-role">
                <div className="cv-role-heading">
                  <div>
                    <h3>Community-Initiated Development Projects</h3>
                    <p className="cv-organisation">
                      Chinga Girls High School
                    </p>
                  </div>
                  <span className="cv-dates">2016 – 2018</span>
                </div>
                <ul>
                  <li>
                    Initiated, planned, and carried out student-led
                    community development projects.
                  </li>
                  <li>
                    Coordinated activities and documentation from concept
                    through implementation.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section className="cv-section cv-interests">
            <div className="cv-section-label">
              <span>07</span>
              <h2>Professional Interests</h2>
            </div>

            <div className="cv-section-content">
              <p>
                Water reuse · Circular water systems · Water quality ·
                Low-energy treatment approaches · Sustainable water
                management
              </p>
            </div>
          </section>
        </div>

        <footer className="cv-footer">
          <span>SCIENCE, SYSTEMS & SOLUTIONS</span>
          <span>CV · Waithiegeni Jedidah</span>
        </footer>
      </article>
    </main>
  )
}

export default CVPage
