import './ThingsThatDontFitPage.css'

type CommunityStory = {
  number: string
  emoji: string
  id: string
  title: string
  subtitle: string
  paragraphs: string[]
  takeaway: string
}

const stories: CommunityStory[] = [
  {
    number: '01',
    emoji: '✉️',
    id: 'beyond-unbound',
    title: 'Letters, Sponsors & Learning to Listen',
    subtitle: 'UNBOUND · 2015–2018',
    paragraphs: [
      'I was fortunate enough to receive a full scholarship during high school. As you can imagine, I was thrilled. The scholarship came with expectations beyond good grades, though. We had holiday meetups to attend, letters and report cards to send to our sponsors, and 200 hours of community service to complete every year.',
      'And before anyone raises an eyebrow at the word sponsor, no, this was not a Cambridge-style situation. Hihi. It was a programme that supported children and young people, and part of our responsibility was to stay connected with the people who made that support possible.',
      'My community service took me to the UNBOUND office in Nairobi, where I helped with documentation and the correspondence between beneficiaries and their sponsors. Some days, I helped children check that they had completed their quarterly requirements. Other times, I proofread letters, helped children make their As more legible, or watched as they drew pictures of the houses they hoped to have one day.',
      'There were practical questions, too. Had an older student found someone who could help them? Had the family received its food allocation? Were the necessary details recorded correctly? These were small tasks on paper, but the answers could matter a great deal to the people involved.',
      'I began to understand how much we take for granted when reading and writing come easily to us. A letter that looked simple to me could be a difficult task for someone else. Sometimes I had to work hard to understand what a child was trying to communicate, and sometimes I had to help them find a clearer way to express it.',
      'It made me think about education differently. I became more aware of the sacrifices my parents made to keep me in school and the privilege of being able to read, write, and express myself. I also learnt that literacy is not simply a school subject. It can shape how easily a person asks for help, communicates a need, or tells their own story.',
      'There was, of course, the occasional occupational hazard. Spend enough time proofreading other people’s writing and you start worrying that their grammar might begin to rub off on yours. I was almost ready to investigate whether grammar could spread through active transport. Hihi.',
    ],
    takeaway:
      'I learnt to appreciate the privileges that can feel ordinary when we live with them every day. I also learnt that helping someone communicate is not about speaking for them; it is about helping their own voice be heard.',
  },
  {
    number: '02',
    emoji: '🧸',
    id: 'beyond-fatima',
    title: 'A Place That Already Felt Familiar',
    subtitle: 'Fatima Mission Hospital · Children’s Department · 2015–2018',
    paragraphs: [
      'Fatima Mission Hospital was not an entirely unfamiliar place to me. My mother worked in maternity, and when I was little, I spent time around the children’s section and children’s home. I knew some of the children by name. One of my closest childhood friends was from there, although she eventually returned to live with her parents.',
      'Years later, volunteering there felt like returning to a place that had already been part of my life, this time with a little more understanding of what it took to care for the children.',
      'After school, I would spend time there before going home to do my own homework. The work was wonderfully ordinary and wonderfully important: changing diapers, wiping little faces, cleaning the dining room, washing dishes, helping children settle into their cots, and drawing the curtains when it was time to rest.',
      'There was laundry to fold, homework to help with, and time to play outside. Then came the preparation and serving of dinner, helping the children eat, and cleaning up afterwards. Care was not one grand gesture. It was a long string of small tasks, repeated with patience and attention.',
      'I enjoyed the children’s honesty. They could be wonderfully direct, and there was something refreshing about being around people who had not yet learnt to disguise every thought behind politeness. They reminded me that people need gentleness, but they also need us to show up and do the practical things that make a day easier.',
      'I learnt that caring for children requires more than affection. It requires responsibility, patience, attentiveness, and a willingness to do the unglamorous work. You cannot only be present for the sweet moments. You also have to wash the dishes, tidy the room, and make sure everyone is settled safely.',
    ],
    takeaway:
      'Care is often made of little things done consistently. A clean room, a meal served, a child helped with homework, or someone being treated gently can all be meaningful forms of showing up.',
  },
  {
    number: '03',
    emoji: '🌱',
    id: 'beyond-chinga',
    title: 'Finding Another Way to Get It Done',
    subtitle: 'Chinga Girls High School · Community-Initiated Development Projects · 2016–2018',
    paragraphs: [
      'The 200 hours of community service were an annual requirement, and there were years when I had to think creatively about how to complete them. In 2016, I approached the school principal with an idea: what if I worked on a school and environmental campaign, planned the activities, documented what we did, and reported the findings and recommendations? Could that work count towards my service hours?',
      'Thankfully, the answer was yes. We agreed on the arrangement, and I got to work.',
      'I had to think through the project, organise what needed to happen, keep track of the work, and present the findings and recommendations to the principal. I also had to speak at a school assembly. That last part meant standing in front of a room full of people and explaining what we had done and what could be improved.',
      'It was a useful lesson in taking an idea beyond the exciting first thought. A project needs planning, follow-through, documentation, and someone willing to explain what happened and why it matters. It also needs the courage to stand up and share the work, even when public speaking feels a little intimidating.',
      'And there was a practical bonus: the service hours became easier to manage because I was doing work that had a purpose beyond ticking a requirement off a list. I had found a way to meet the commitment while contributing something to the school community.',
    ],
    takeaway:
      'I learnt that when a requirement feels difficult, it can be worth asking whether there is another useful way to meet it. Initiative is not only about coming up with an idea; it is also about doing the work, documenting it, and being willing to stand behind the result.',
  },
]

function ThingsThatDontFitPage() {
  return (
    <main className="things-page">
      <section className="things-page-intro">
        <span className="things-page-kicker">
          THE STORIES BEYOND A RÉSUMÉ
        </span>

        <h1>Beyond the CV</h1>

        <p>
          Some experiences don't fit neatly into job titles or
          bullet points. They still matter. These are the people,
          places, and small moments that helped shape how I see
          the world.
        </p>
      </section>

      <section className="things-page-contents" aria-label="Story contents">
        <span className="things-page-kicker">A LITTLE TABLE OF CONTENTS</span>

        <h2>Three stories from those years</h2>

        <p className="things-page-contents-intro">
          They began with a scholarship and a community-service
          requirement. They became something much more personal.
        </p>

        <ol>
          {stories.map((story) => (
            <li key={story.id}>
              <a href={`#${story.id}`}>
                <span className="things-page-contents-number">
                  {story.number}
                </span>

                <span className="things-page-contents-emoji" aria-hidden="true">
                  {story.emoji}
                </span>

                <span className="things-page-contents-title">
                  {story.title}
                  <span>{story.subtitle}</span>
                </span>

                <span className="things-page-contents-arrow" aria-hidden="true">
                  ↘
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <div className="things-page-stories">
        {stories.map((story) => (
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
                STORY {story.number}
              </span>

              <h2>{story.title}</h2>

              <p className="things-page-story-subtitle">
                {story.subtitle}
              </p>

              <div className="things-page-story-prose">
                {story.paragraphs.map((paragraph, index) => (
                  <p key={`${story.id}-paragraph-${index}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <aside className="things-page-takeaway">
                <span>WHAT I LEARNT</span>
                <p>{story.takeaway}</p>
              </aside>
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

        <a href="#/work-experience" className="things-page-work-link">
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