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
    story: [
      'This was my first and only attachment, and it began with a conversation I still remember. During my first year of university, I met a laboratory technologist who had a remarkable supply of wise words. Some of them were too good to keep to myself, so I thought I would leave them here for whoever comes after me.',
      'You know those entry-level jobs that ask for one or two years of experience? Well, that was where his story began. He explained that there was a way around the little experience paradox, and I remember staring at him in disbelief before leaning in to listen more closely.',
      'In my course, an attachment was not compulsory. But he pointed out that if a student worked for three months after every academic year, then over a four-year course, they could accumulate about a year of experience, perhaps even more, by graduation. And I thought to myself, offering my services for free for a few months would not be so difficult, would it? Future me would surely appreciate the investment.',
      'Well, COVID-19 must have been watching this plan unfold and having a hearty laugh. After my first year, lockdowns and restrictions arrived, and finding an attachment was suddenly not even on the table. There was barely time to search before everything changed.',
      'Second year came and went. When the holiday finally arrived, I was ready. I printed my CV, obtained a letter from the university department, wrote a letter expressing my interest, and went knocking from door to door in search of an attachment. Unfortunately, it seemed the industries had already had their fill of free labour for that season. The next opportunities would open when my next semester began. I was too late, and there was nothing left to do but rest and try again.',
      'For third year, I learnt my lesson. I began searching in the middle of the semester, and, true to the advice I had received, the early bird catches the worm. In fact, I caught lots of worms. Hihi. I had several opportunities to consider, which meant I now had to sit down and evaluate which one I would enjoy most. A rather lovely problem to have, if you ask me.',
      'I settled on an opportunity as a laboratory technician at the Ministry of Roads and Transport, State Department for Roads, in the Materials Testing and Research Division. I began on the 4th of January, and, at last, my attachment story had officially begun.',
      'I got to work alongside wonderful people, both the staff and the other attachees I shared the experience with. The knowledge I encountered stretched far beyond what I had imagined, and we were trusted with independent projects. Sometimes that meant being handed a bag of cement or a jerrican of water and being allowed to carry out the work ourselves. If you know me, you know that freedom paired with responsibility makes me feel very grown up. Hihi. Give me a task, trust me with it, and watch me stand a little taller.',
      'The work itself had a clear purpose: materials used in road construction had to be tested to establish whether they were suitable for their intended use. It was not enough for a material to simply look right. It had to meet the relevant requirements, too. From January through April, we worked on these tests and the associated laboratory work, generally on weekdays from around 8 a.m. to 4 p.m. I may need to verify the exact hours before swearing to them in court, but that is how I remember it.',
      'Looking back, I am grateful for the technologist who shared that advice with me. What sounded like a clever way to accumulate experience became a lesson in timing, initiative, and trying again when the first attempt does not work. Sometimes the opportunity is not waiting for you to graduate. Sometimes you have to start looking while everyone else is still enjoying the holiday.'
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
    story: [
      'After graduation, finding a job was not quite like finding an attachment in third year. Apparently, the job market had not received the memo about my enthusiasm. Hihi. So I did what one does when a door refuses to open: I asked for help.',
      'One of the people I reached out to was my communication lecturer from a CPA course I had taken after high school. He asked me to share my identification details, and, just a day later, I had an interview lined up at CCI Kenya. He did more than help me get my foot in the door; he also connected me with someone at CCI who helped me prepare mentally for the interview. I went in with a little more confidence than I might otherwise have had, and I remain grateful for that kindness.',
      'The interview was conducted in a group, which was, naturally, a wonderful opportunity to wonder what on earth I was doing there. Hihi. Somehow, I made it through the hoops, and less than a month later, I found myself seated in a room with a gentleman whose responses began with, “Thank you for this opportunity.” Around us were so many other lovely human beings, and the facility itself was beautiful. The whole thing felt a little dreamy. I had a job, a workplace, new faces to meet, and a fresh chapter to begin. It was all rather exciting.',
      'Then work began. And honestly, for the first few months, it barely felt like work. During a ten-hour shift, we could answer fifty calls or fewer. We therefore had quite a bit of time to talk, get to know one another, and find creative ways to occupy ourselves. We played those “50 questions to get to know your friend” games, learnt all sorts of card games, and made bets with the gentleman seated across from us about when the sun would finally pierce the horizon. Important scientific research, obviously. Hihi.',
      'Looking back, I think that was part of the welcome package: the chance to settle in, get comfortable with the people around me, and discover that work could introduce you to some genuinely lovely human beings. I did not know it then, but those early, quieter months would become some of the memories I carried with me long after the job itself had changed.',
      'Soon enough, however, the calls were no longer fifty or fewer. Somehow, we became professional yappers, answering a hundred calls or more during a shift. The pace picked up, the pressure grew, and the familiar faces around me gradually began to leave. As they did, the heart started to ache a little. The life I had imagined for myself was calling from somewhere else, and I could feel the distance between where I was and where I hoped to be.',
      'I needed to do something about that distance. So I got a second job. Hihi. First came Devki, where I volunteered in quality control and began gaining experience in an industrial environment. Alongside that, I started reaching out to companies I imagined myself working for. I made calls, wrote countless emails, and offered free trials of my services in the hope that someone would give me an opportunity to prove what I could do.',
      'Eventually, Kridha answered. The emails, the searching, and the little attempts to get closer to the work I wanted to do finally led somewhere. CCI gradually became a distant memory: the first official job I had worked, a place full of firsts, and a chapter that gave me so many fond memories and introduced me to so many wonderful people.',
      'I left with more than experience in customer service. I had learnt to speak to people, listen, explain, persevere, and keep looking for a way forward even when the work in front of me was not the work I ultimately wanted to do. And perhaps that is one of the unexpected gifts of a first job: it teaches you things you do not always recognise until you find yourself using them somewhere else.'
    ],
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

          <a
            href="#/things-that-dont-fit"
            className="work-page-cta"
          >
            Explore the stories beyond the CV <span aria-hidden="true">→</span>
          </a>

          <a
            href="#/cv"
            className="work-page-secondary-link"
          >
            Or take a look at my CV →
          </a>
        </section>
      </div>
    </main>
  )
}

export default WorkExperiencePage