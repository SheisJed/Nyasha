
import type { MouseEvent } from 'react'
import './WorkExperiencePage.css'

type ExperienceChapter = {
  number: string
  emoji: string
  title: string
  role: string
  company: string
  dates?: string
  introduction: string
  story?: string[]
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
    takeaway:
      'This experience gave my technical background another dimension: understanding the person on the other side of a problem matters, too.',
  },
  {
    number: '03',
    emoji: '🏭',
    title: 'Chemistry Meets Industry',
    role: 'Quality Control Analyst — Volunteer',
    company: 'Devki Steel Mills, Devki Group',
    dates: 'Feb 2026 – Apr 2026',
    introduction:
      'I wanted experience in the fields my heart was set on, but getting that first opportunity was proving difficult. So I took a different route: I went looking for the experience myself.',
    story: [
      'Then came Devki, and with it, the rather intimidating brick wall of not getting a job in the fields my heart was lost in. A very smart friend reminded me that, at that point in our lives, we were young, without too many responsibilities, and had the occasional luxury of working for free in exchange for experience.',
      'So one morning, I printed copies of my CV, wrote letters expressing my interest, and went from factory to factory in search of knowledge, growth, and hopefully a bridge between the job I had and the work I wanted to do. That morning, Devki Steel Mills opened its doors to me. I was offered flexibility around my hours and days, and a pool of knowledge to delight in. What a steal!',
      'I went home that afternoon, thanked my very smart friend, and shared the news. I was about to become a two-job big girl!',
      'Then day one arrived, and I felt very small, both literally and figuratively. The knowledge piling up around me was astonishing. Everything was new, and there was so much to understand.',
      'The factory produced several steel products, including binding wire, nails, weld mesh and BRC mesh. Those were the products I encountered as I moved through the quality control work. Each one depended on a sequence of processes, and each stage depended on the one before it being done properly. That was where I found myself: in quality control, a department I came to think of as the spine of an industry.',
      'Take mild steel nails, for example. Before production could proceed, incoming material had to be checked against the required specifications. The quality control team used measuring instruments and tensile testing equipment to assess the material, and the results helped determine whether it was suitable for the intended product. Material was identified and sorted according to its grade and whether it met the required standards; anything that failed those checks could not simply be sent along to production and hoped for the best.',
      'For material that passed, the next steps included pickling in a hydrochloric acid bath, rinsing, and treatment in a phosphate bath. The process depended on controlled chemical concentrations, so quality control had to check those too, including through titration. The chemistry was not a side note to manufacturing. It helped prepare the material for what came next.',
      'Then came wire drawing: pulling the wire through progressively smaller dies to bring it to the required diameter. The dimensions mattered. If the wire was not drawn to the right size, it could not reliably produce a nail of the intended dimensions. Packaging and product weights depended on consistency, too. If the wire dimensions were off, the production line could be stopped while the team investigated the cause and corrected it.',
      'And the nails themselves had their own specifications. They needed the correct length, the required tip angle, and properly centred heads and tips. The tensile strength of the drawn wire also had to be checked so that the finished nail would meet the mechanical requirements expected of it. If a check revealed a problem, production could not simply carry on as though nothing had happened.',
      'For someone who had come in looking for knowledge, it was a lot to take in. I was seeing how chemistry, measurement, machinery, and decision-making depended on one another. A small deviation at one stage could travel down the line and become a much bigger problem later.',
    ],
    takeaway:
      'This opportunity taught me that it is better to stop and investigate when something first goes wrong than to let a small deviation travel through an entire process. The principle applies in manufacturing, and, in its own way, in everyday life too, doesn’t it?',
  },
  {
    number: '04',
    emoji: '🌊',
    title: 'Coming Back to Water',
    role: 'Water Treatment Design Engineer',
    company: 'Kridha Limited',
    dates: 'May 2026 – Present',
    introduction:
      'Water had been on my mind long before I had a job in water treatment. Eventually, I stopped waiting for the right opportunity to find me and began looking for it myself.',
    story: [
      'I have always been heartbroken by stories of people dying from dehydration, diarrhoeal disease, and the consequences of poor sanitation. I have also been baffled by the experience of turning on a tap and finding it dry. The sea is vast, rivers keep flowing, and rain falls so generously in its season. So why do so many people still struggle to access safe water?',
      'That question stayed with me. Every so often, I would send my CV to a water company I came across, hoping that somewhere there would be an opening for someone with my background and a genuine desire to understand the problem.',
      'But there was another part of the story: CCI. After long, sometimes treacherous shifts, I would get home and return to my list of water companies. I would look them up, find a way to reach out, and send another email. It was a small routine, but it was my way of keeping the door open to the work I wanted to do.',
      'One of those cold outreach emails went out in September. Months passed. Then, in February, just when hope was beginning to feel rather thin, an invitation to interview arrived. That email had travelled a long way from the evening I sent it, and I was grateful I had sent it at all.',
      'That opportunity led me to Kridha Limited, a water and wastewater treatment company. At last, I was getting to work in the field I had been asking questions about for so long. The knowledge I have gained has been tremendous, and the problem that once felt so distant does not seem quite so out of reach anymore.',
      'My days involve interpreting water analyses, understanding what a client needs, and helping identify and design a treatment system that can meet those requirements. The work also involves explaining the proposed solution, preparing technical proposals and quotations, and answering the questions that come with helping someone understand how a treatment system will work.',
      'And water treatment is only one side of the coin. Wastewater treatment asks a different but equally important set of questions: how can homes and industries treat the water they have used so that it can be discharged safely to the environment or, where appropriate, to the public sewer? The answer depends on the wastewater, the applicable requirements, and what the system is designed to achieve.',
      'The work is satisfying in a way that sometimes makes you forget you skipped breakfast. Hihi. It is intellectually demanding, too, because every analysis and every client brings a different problem to understand. Most importantly, it brings me closer to the question I am still wrestling with: how can we make better use of the water we already have?',
      'That question leads me to the circular economy of water: treating water not simply as something we use and discard, but as a resource we can manage, recover, and reuse responsibly. I am still learning, and I have a long way to go. But I finally feel that I am building the knowledge I need to keep asking the question properly.',
    ],
    takeaway:
      'This is where analysis becomes design: understanding what is in the water, identifying the treatment requirements, and working towards a practical solution. It is also where a long-standing question is beginning to turn into a professional direction.',
  },
  {
    number: '05',
    emoji: '🌱',
    title: "Where I'm Going",
    role: 'Building Better Water Systems',
    company: "The Questions I'm Following",
    introduction:
      'My professional direction extends beyond individual treatment plants. I am interested in how water can be treated, reused, and managed in ways that make water security more achievable, especially for communities facing water insecurity.',
    takeaway:
      'The direction is still unfolding, but the question guiding it is clear: how can we help water serve people better?',
  },
]

function WorkExperiencePage() {
  const scrollToSection =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

  return (
    <main className="container work-experience-page">
      <div className="work-page-content">
        <section className="work-page-hero">
          <span className="work-page-kicker">
            THE JOURNEY SO FAR
          </span>

          <h1>The Work &amp; the Stories</h1>

          <p className="work-page-intro">
            Every role has taught me something different. These
            are the stories behind the job titles, the lessons
            I carried away, and the questions that keep drawing
            me forward.
          </p>

          <p className="work-page-note">
            A little science, a little people, a little industry,
            and a growing return to water.
          </p>

          <a
            className="work-page-down-link"
            href="#experience-journey"
            onClick={scrollToSection('experience-journey')}
          >
            Explore the journey <span aria-hidden="true">↓</span>
          </a>
        </section>

        <nav
          className="work-contents"
          id="experience-journey"
          aria-label="Work stories"
        >
          <span className="work-page-kicker">
            IN THIS CHAPTER OF MY LIFE
          </span>

          <h2>A little table of contents</h2>

          <p className="work-contents-intro">
            Start wherever you like. Each chapter has its own place
            in the story.
          </p>

          <ol>
            {chapters.map((chapter) => (
              <li key={chapter.number}>
                <a
                  href={`#experience-chapter-${chapter.number}`}
                  onClick={scrollToSection(
                    `experience-chapter-${chapter.number}`,
                  )}
                >
                  <span className="work-contents-number">
                    {chapter.number}
                  </span>

                  <span
                    className="work-contents-emoji"
                    aria-hidden="true"
                  >
                    {chapter.emoji}
                  </span>

                  <span className="work-contents-title">
                    {chapter.title}
                    <span className="work-contents-role">
                      {chapter.role}
                    </span>
                  </span>

                  <span
                    className="work-contents-arrow"
                    aria-hidden="true"
                  >
                    ↘
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section
          className="work-stories"
          aria-label="Work experience stories"
        >
          {chapters.map((chapter) => (
            <article
              className="work-story"
              key={chapter.number}
              id={`experience-chapter-${chapter.number}`}
            >
              <div className="work-story-marker">
                <span>{chapter.number}</span>
                <span aria-hidden="true">{chapter.emoji}</span>
              </div>

              <div className="work-story-body">
                <span className="work-story-label">
                  CHAPTER {chapter.number}
                </span>

                <h2>{chapter.title}</h2>

                <p className="work-story-role">{chapter.role}</p>
                <p className="work-story-company">{chapter.company}</p>

                {chapter.dates && (
                  <p className="work-story-dates">{chapter.dates}</p>
                )}

                <p className="work-story-introduction">
                  {chapter.introduction}
                </p>

                {chapter.story && (
                  <div className="work-story-prose">
                    {chapter.story.map((paragraph, index) => (
                      <p key={`${chapter.number}-paragraph-${index}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                <aside className="work-story-lesson">
                  <span>WHAT I LEARNT</span>
                  <p>{chapter.takeaway}</p>
                </aside>
              </div>
            </article>
          ))}
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

          <a
            href="#/things-that-dont-fit"
            className="work-page-secondary-link"
          >
            Or explore the stories beyond the CV →
          </a>
        </section>
      </div>
    </main>
  )
}

export default WorkExperiencePage
