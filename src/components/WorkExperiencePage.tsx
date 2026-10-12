
import './WorkExperiencePage.css'

type ExperienceChapter = {
  number: string
  emoji: string
  title: string
  role: string
  company: string
  dates?: string
  introduction: string
  responsibilities: string[]
  takeaway: string
}

const chapters: ExperienceChapter[] = [
  {
    number: '01',
    emoji: '🔬',
    title: 'Where It Started',
    role: 'Laboratory Technician — Attaché',
    company: 'State Department of Roads, Ministry of Infrastructure',
    dates: 'Jan 2023 – Apr 2023',
    introduction:
      'My professional foundation began in the laboratory, where analytical work connected scientific measurements to practical engineering and construction needs.',
    responsibilities: [
      'Conducted laboratory analysis of water, soil, cement, and construction materials.',
      'Operated analytical instruments, including Atomic Absorption Spectroscopy (AAS) and Flame Photometry.',
      'Prepared technical laboratory reports to support engineering and construction decisions.',
      'Maintained laboratory quality assurance and safety standards.',
    ],
    takeaway:
      'This chapter introduced me to the importance of careful measurement, reliable results, and technical reporting.',
  },
  {
    number: '02',
    emoji: '📞',
    title: 'Learning People',
    role: 'Customer Service Representative',
    company: 'CCI Global',
    dates: 'Oct 2024 – May 2026',
    introduction:
      'Customer service took me into a different kind of problem-solving. Instead of working only with samples and measurements, I worked with people, their concerns, and the information they needed to find a way forward.',
    responsibilities: [
      'Resolved customer concerns through active listening, clear communication, and practical problem-solving.',
      'Balanced empathy with accurate policy interpretation during complex service interactions.',
      'Investigated account issues and guided customers towards appropriate solutions.',
      'Collaborated with cross-functional teams to support timely issue resolution.',
    ],
    takeaway:
      'This experience gave my technical background another dimension: understanding the person on the other side of a problem matters, too.',
  },
  {
    number: '03',
    emoji: '🏭',
    title: 'Chemistry Meets Industry',
    role: 'Quality Control Analyst — Volunteer',
    company: 'Devki Group of Companies',
    dates: 'Feb 2026 – Apr 2026',
    introduction:
      'In steel manufacturing, chemistry and precision measurement came together in a production environment. Quality checks required attention to specifications, accurate measurements, and careful records.',
    responsibilities: [
      'Performed in-process and final quality inspections across steel manufacturing operations.',
      'Conducted dimensional inspections and tensile strength testing to verify product quality.',
      'Used Vernier calipers, micrometers, and universal tensile testing equipment for precision measurements.',
      'Identified non-conforming products and maintained quality inspection records.',
    ],
    takeaway:
      'This chapter connected scientific precision with industrial quality control and the importance of checking work against defined requirements.',
  },
  {
    number: '04',
    emoji: '🌊',
    title: 'Coming Back to Water',
    role: 'Water Treatment Design Engineer',
    company: 'Kridha Limited',
    dates: 'May 2026 – Present',
    introduction:
      'Water brought my scientific background and my interest in practical problem-solving together. My work involves translating water quality information and client requirements into treatment systems suited to the problem at hand.',
    responsibilities: [
      'Design and size water treatment systems based on client requirements and raw water analysis.',
      'Contribute to the design of reverse osmosis, softening, filtration, and wastewater treatment systems.',
      'Interpret water quality analyses to recommend appropriate treatment solutions.',
      'Prepare technical proposals, quotations, and project documentation.',
      'Collaborate with technical and sales teams to develop customer-specific plant designs.',
    ],
    takeaway:
      'This is where analysis becomes design: understanding what is in the water, identifying the treatment requirements, and working towards a practical solution.',
  },
  {
    number: '05',
    emoji: '🧪',
    title: 'What I Actually Do',
    role: 'Water, Chemistry & Problem-Solving',
    company: 'Technical Work',
    introduction:
      'My day-to-day technical interests sit at the intersection of water quality, treatment processes, engineering decisions, and the documentation that helps turn an idea into a workable proposal.',
    responsibilities: [
      'Translate raw water analysis into practical treatment requirements.',
      'Work across filtration, softening, reverse osmosis, and wastewater treatment.',
      'Prepare technical proposals, quotations, and supporting documentation.',
      'Balance technical requirements with client needs and project realities.',
      'Continue learning as new treatment questions and design challenges arise.',
    ],
    takeaway:
      'I am learning to connect the chemistry, the engineering, the customer requirements, and the practical realities of a project.',
  },
  {
    number: '06',
    emoji: '🌱',
    title: "Where I'm Going",
    role: 'Building Better Water Systems',
    company: "The Questions I'm Following",
    introduction:
      'My professional direction extends beyond individual treatment plants. I am interested in how water can be treated, reused, and managed in ways that make water security more achievable, especially for communities facing water insecurity.',
    responsibilities: [
      'Explore better ways to treat and reuse water.',
      'Learn how low-energy treatment can make water systems more practical and sustainable.',
      'Investigate circular water systems, especially for communities facing water insecurity.',
      'Build deeper technical understanding of water treatment design and problem-solving.',
      'Document the questions, ideas, and learning that shape this journey.',
    ],
    takeaway:
      'The direction is still unfolding, but the question guiding it is clear: how can we help water serve people better?',
  },
]

function WorkExperiencePage() {
  return (
    <main className="container work-experience-page">
      <img
        className="work-page-background"
        src={`${import.meta.env.BASE_URL}whimsy-cat.gif`}
        alt=""
        aria-hidden="true"
      />

      <div className="work-page-content">
        <section className="work-page-hero">
          <span className="work-page-kicker">
            THE JOURNEY SO FAR
          </span>

          <h1>Work Experience</h1>

          <p className="work-page-intro">
            From laboratory analysis to water treatment design,
            every chapter has added another piece to the picture.
          </p>

          <p className="work-page-note">
            A little science, a little people, a little industry,
            and a growing return to water.
          </p>

          <a className="work-page-down-link" href="#experience-journey">
            Explore the journey <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section
          className="work-journey"
          id="experience-journey"
          aria-label="Professional journey"
        >
          <div className="work-journey-heading">
            <span className="work-page-kicker">
              SIX CHAPTERS
            </span>

            <h2>How the pieces fit together</h2>

            <p>
              Each experience has brought a different perspective
              to the work I do and the questions I want to explore.
            </p>
          </div>

          <div className="work-chapters">
            {chapters.map((chapter) => (
              <article
                className="work-chapter"
                key={chapter.number}
                id={`experience-chapter-${chapter.number}`}
              >
                <div className="work-chapter-marker">
                  <span className="work-chapter-number">
                    {chapter.number}
                  </span>

                  <span className="work-chapter-emoji" aria-hidden="true">
                    {chapter.emoji}
                  </span>
                </div>

                <div className="work-chapter-body">
                  <span className="work-chapter-label">
                    CHAPTER {chapter.number}
                  </span>

                  <h2>{chapter.title}</h2>

                  <p className="work-chapter-role">
                    {chapter.role}
                  </p>

                  <p className="work-chapter-company">
                    {chapter.company}
                  </p>

                  {chapter.dates && (
                    <p className="work-chapter-dates">
                      {chapter.dates}
                    </p>
                  )}

                  <p className="work-chapter-introduction">
                    {chapter.introduction}
                  </p>

                  <div className="work-chapter-details">
                    <h3>What the work involved</h3>

                    <ul>
                      {chapter.responsibilities.map((responsibility) => (
                        <li key={responsibility}>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="work-chapter-takeaway">
                    <span>WHAT THIS CHAPTER ADDED</span>
                    <p>{chapter.takeaway}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="work-page-closing">
          <span className="work-page-kicker">
            STILL LEARNING, STILL BUILDING
          </span>

          <h2>The story is still unfolding.</h2>

          <p>
            I am building on what I have learned, asking better
            questions, and finding ways to connect technical work
            with the real needs of people and communities.
          </p>

          <a href="#/cv" className="work-page-cta">
            Take a look at my CV <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>
    </main>
  )
}

export default WorkExperiencePage
