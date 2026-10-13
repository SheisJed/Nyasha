
import type { MouseEvent } from 'react'
import './ThingsThatDontFitPage.css'

type CommunityStory = {
  number: string
  emoji: string
  id: string
  title: string
  subtitle: string
  paragraphs: string[]
}

const stories: CommunityStory[] = [
  {
    number: '01',
    emoji: '✉️',
    id: 'unbound',
    title: 'Learning to look beyond the paperwork.',
    subtitle: 'UNBOUND, NAIROBI',
    paragraphs: [
      'During high school, I had the privilege of being on a full scholarship. Naturally, keeping my grades up was part of the deal. So were holiday meetups, letters and report cards to our respective sponsors, and 200 hours of community service every year.',
      'And no, not that kind of sponsor. Get your head out of the gutter, hihi. I mean the Cambridge version: the family that chose to support a student\'s education.',
      'Two hundred hours, in between boarding school and tuition during the holidays, was a huuuuuge gap to cover. I had to be creative. Looking back, the places that responsibility took me, and the lessons I gathered along the way, were worth every hour.',
      'One of those places was UNBOUND, where we gathered for our scholarship programme. Once I had written my letters, coloured my Christmas card and sent my result slip to the family supporting me, I would sometimes sit where my programme coordinator usually sat and help other sponsees check whether they had completed their quarterly responsibilities.',
      'I proofread letters, reminded younger students to shade their A\'s more clearly, and encouraged children to draw more details, like the house they dreamed of moving into. With older sponsees, I might ask whether someone had accompanied them to the meeting or whether they had received their food allocation for the month.',
      'That was mostly it. Simple tasks, really. Except they weren\'t always simple.',
      'How do you ask someone more than five times your senior to rewrite a letter for the third time? How do you ask someone to read a sentence again, knowing that the words on the page don\'t quite communicate what they intended? It could be heartbreaking. I was learning to do a task while remembering that there was a person on the other side of it.',
      'It was one of my first real exposures to how differently people experience the world. It also woke me up to something I had not fully appreciated before: my parents had worked tirelessly to give me an education, and even the seemingly small things, like being able to dot my i\'s and cross my t\'s confidently, were privileges worth recognising.',
      'The irony? My English teacher back at school was still rarely impressed with my writing. Hihi. Perhaps all that proofreading was helping, or perhaps the questionable grammar I encountered was slowly diffusing into my own vocabulary. Active transport, but make it language.',
      'Either way, UNBOUND taught me patience, attention to detail, and the importance of treating people with dignity, even when the task at hand was just paperwork.',
    ],
  },
  {
    number: '02',
    emoji: '🧸',
    id: 'fatima',
    title: 'Little people, very big lessons.',
    subtitle: 'FATIMA MISSION HOSPITAL',
    paragraphs: [
      'During school holidays when I had tuition, I would study all morning. When we broke for lunch, instead of heading home, I would go to my mum\'s workplace: Fatima Mission Hospital.',
      'That place had watched us grow from infancy into adulthood. Mum\'s colleagues had become unofficial aunties, the kind who somehow secure themselves automatic invitations to one another\'s future children\'s weddings. Even for those of us whose light at the end of the tunnel looks particularly dim, the aunties are waiting. Hihi.',
      'Mum worked in the maternity section, and I had grown up around the hospital. At the children\'s section, I knew the little ones by name. One of my closest childhood friends was among them. Thankfully, she was able to return to her parents before we were old enough to understand much of it. I hope she is thriving.',
      'My volunteering afternoons usually began after the children had eaten and the little ones were getting ready for their afternoon naps. I would help change diapers, wipe messy faces, clean the dining room, wash dishes, settle the children into their cots and draw the curtains.',
      'Then came lunch for me, which, I must say, was always sooooo very nice. Omdssss.',
      'Once the little ones were fast asleep, I would spend time with the older children. Sometimes there was laundry to fold. Sometimes homework needed attention. And sometimes we got to run around and jump all over the backyard.',
      'Later, I would help prepare dinner. When the children woke up, we would get everyone cleaned up and ready to eat. With help from the older children, we served the meal, fed those who needed help, and cleaned up afterwards. Before long, the children were settling down for the night, almost as early as the sun.',
      'Early, huh? But children need their sleep to grow healthy, strong and smart, too. At least, that was my opinion.',
      'When Mum finished work, we would leave together and head home. And I would do it all again another day.',
      'Of the volunteering opportunities I had, this was probably the most fun. It taught me patience, gentleness and responsibility, but it also helped me discover how much I enjoyed the company of children: their honesty, their openness, their wonderfully straightforward way of looking at the world.',
      'Sometimes, I think I\'d like to borrow a little of that straightforwardness for myself. Hihi.',
    ],
  },
  {
    number: '03',
    emoji: '🌱',
    id: 'chinga',
    title: 'The day I learnt to ask for more.',
    subtitle: 'CHINGA GIRLS HIGH SCHOOL',
    paragraphs: [
      'Even after my hours at UNBOUND and the hospital, I was almost always short of the 200-hour requirement. I needed another way to make up the difference, and in 2016, I decided to stop trying to solve the problem on my own.',
      'As soon as school reopened, I visited my principal. I explained my scholarship\'s community service requirement, suggested a way we could approach it, and asked whether there was an opportunity to make those hours useful to the school, too.',
      'It was a short, sweet meeting. We reached an agreement: I would take on responsibilities that supported an initiative she was pursuing, and my hours would be signed off for the time I dedicated to it.',
      'There was a catch, of course. I wasn\'t simply going to show up and collect hours. I had to help develop an environmental campaign, discuss my findings and recommendations with the principal, and then present them at assembly in front of the entire school.',
      'So there I was, trying to meet a scholarship requirement and discovering that the solution involved initiative, planning, documentation, and speaking to an audience much larger than I might have chosen for myself.',
      'Three things stayed with me. First, I learnt to speak up. Second, I learnt to be creative, because coming up with campaigns and finding causes worth pursuing required more than waiting to be told what to do. And third, I learnt to solve problems by looking for ways to make a difficult situation useful to more than one person.',
      'After that, the 200 hours stopped being quite so frightening. I had found a way to make the requirement work for me, for the school, and for something I cared about.',
      'What began as a problem to solve became an opportunity to contribute. And that, I think, was one of my earliest lessons in initiative: sometimes you don\'t have to wait for a door to open. You can walk into the principal\'s office with an idea and ask whether you can build something useful together.',
    ],
  },
]

function ThingsThatDontFitPage() {
  const scrollToSection =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

  return (
    <main className="things-page">
      <section className="things-page-intro">
        <span className="things-page-kicker">
          THE THINGS THAT DON'T FIT ON MY CV
        </span>

        <h1>The things that taught me something.</h1>

        <p>
          During high school, I had a full scholarship, a 200-hour
          community service requirement, and absolutely no idea how
          much those hours would teach me. This is the story of three
          places, the people I met, and the things I carried away.
        </p>
      </section>

      <section
        className="things-page-contents"
        id="story-contents"
        aria-label="Chapters in my community service story"
      >
        <span className="things-page-kicker">IN THIS STORY</span>

        <h2>A little table of contents</h2>

        <p className="things-page-contents-intro">
          Three places, three different experiences, and lessons
          that stayed with me long after the hours were completed.
        </p>

        <ol>
          {stories.map((story) => (
            <li key={story.id}>
              <a
                href={`#${story.id}`}
                onClick={scrollToSection(story.id)}
              >
                <span className="things-page-contents-number">
                  {story.number}
                </span>

                <span
                  className="things-page-contents-emoji"
                  aria-hidden="true"
                >
                  {story.emoji}
                </span>

                <span className="things-page-contents-title">
                  {story.title}
                  <span>{story.subtitle}</span>
                </span>

                <span
                  className="things-page-contents-arrow"
                  aria-hidden="true"
                >
                  ↘
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <div className="things-page-stories">
        {stories.map((story, index) => (
          <article
            className="things-page-story"
            id={story.id}
            key={story.id}
          >
            <div className="things-page-story-marker">
              <span>{story.number}</span>
              <span aria-hidden="true">{story.emoji}</span>
            </div>

            <div className="things-page-story-body">
              <span className="things-page-story-label">
                CHAPTER {story.number} · {story.subtitle}
              </span>

              <h2>{story.title}</h2>

              <div className="things-page-story-prose">
                {story.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${story.id}-paragraph-${paragraphIndex}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {index < stories.length - 1 && (
                <a
                  href={`#${stories[index + 1].id}`}
                  onClick={scrollToSection(stories[index + 1].id)}
                  className="things-page-next"
                >
                  Next: {stories[index + 1].subtitle
                    .toLowerCase()
                    .replace(/\b\w/g, (letter) => letter.toUpperCase())}
                  <span aria-hidden="true"> ↓</span>
                </a>
              )}

              {index === stories.length - 1 && (
                <div className="things-page-reflection">
                  <span className="things-page-reflection-label">
                    WHAT I CARRIED WITH ME
                  </span>

                  <p>
                    UNBOUND taught me to look beyond the paperwork.
                    Fatima taught me gentleness and responsibility.
                    Chinga taught me to speak up and turn a requirement
                    into an opportunity. None of these lessons came
                    neatly packaged, but all of them came with me.
                  </p>

                  <a
                    href="#story-contents"
                    onClick={scrollToSection('story-contents')}
                    className="things-page-next"
                  >
                    Back to the contents <span aria-hidden="true">↑</span>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <section className="things-page-closing">
        <span className="things-page-kicker">THE THINGS THAT STAY</span>

        <h2>Not everything important comes with a job title.</h2>

        <p>
          Some of the most meaningful things we learn happen while
          we are simply trying to help, show up, and do our part.
          I am still carrying those lessons with me.
        </p>

        <a
          href="#/work-experience"
          className="things-page-work-link"
        >
          Read the stories behind my work →
        </a>

        <a href="#/" className="things-page-back">
          ← Back to Home
        </a>
      </section>
    </main>
  )
}

export default ThingsThatDontFitPage
