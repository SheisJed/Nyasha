
import { useEffect, useState } from 'react'
import Header from './components/Header'
import ProfileOverview from './components/ProfileOverview'
import GitHubReplay from './components/GitHubReplay'
import WorkExperiencePage from './components/WorkExperiencePage'
import AchievementsShowcase from './components/AchievementsShowcase'
import TechnicalSkills from './components/TechnicalSkills'
import ResumeViewer from './components/ResumeViewer'
import ThingsThatDontFit from './components/ThingsThatDontFit'
import ThingsThatDontFitPage from './components/ThingsThatDontFitPage'
import PersonalHobbies from './components/PersonalHobbies'
import SignOutSatire from './components/SignOutSatire'
import ContactSection from './components/ContactSection'
import CVPage from './components/CVPage'
import ContactPage from './components/ContactPage'
import ChatWidget from './components/ChatWidget'
import Footer from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import './styles/App.css'

type PageRoute =
  | 'home'
  | 'work-experience'
  | 'things-that-dont-fit'
  | 'cv'
  | 'writing'
  | 'contact'

function getCurrentRoute(): PageRoute {
  switch (window.location.hash) {
    case '#/work-experience':
      return 'work-experience'
    case '#/things-that-dont-fit':
      return 'things-that-dont-fit'
    case '#/cv':
      return 'cv'
    case '#/writing':
      return 'writing'
    case '#/contact':
      return 'contact'
    default:
      return 'home'
  }
}

function HomePage() {
  return (
    <main className="container">
      <div className="content-wrapper">
        <div className="main-content">
          <ProfileOverview />
          <GitHubReplay />
          <AchievementsShowcase />
          <TechnicalSkills />
          <ResumeViewer />
          <ThingsThatDontFit />
          <PersonalHobbies />
          <ContactSection />
        </div>
      </div>
    </main>
  )
}

const writingStories = [
  {
    title: 'Jed, to Earth, Please',
    subtitle:
      'Thoughts from a noisy café while waiting, watching some human flowers, wondering, and trying not to look at the door.',
    date: 'September 11, 2026',
    excerpt:
      'A noisy café, a pair of imaginary perfect lives, and a little reminder that being yourself is more than enough.',
    url: 'https://waithiegeni.substack.com/p/jed-to-earth-please',
    category: 'Little observations',
  },
  {
    title: 'Which One Is Breaking My Heart: The Brain or the Heart?',
    subtitle:
      'What if the heart gets blamed for things the brain has been quietly doing all along?',
    date: 'September 15, 2026',
    excerpt:
      'A curious little journey through neuroscience, feelings, and the complicated conversation between the brain and the body.',
    url: 'https://waithiegeni.substack.com/p/which-one-is-breaking-my-heart-the',
    category: 'Science & wonder',
  },
  {
    title: '27 Remote masters and a stapler',
    subtitle: 'I am going to steal my way out of this quicksand.',
    date: 'September 17, 2026',
    excerpt:
      'A stubborn stapler, a missing page, and an unexpected reminder about feeling stuck and finding a way forward.',
    url: 'https://waithiegeni.substack.com/p/27-remote-masters-and-a-stapler',
    category: 'Life lately',
  },
]

function WritingPage() {
  return (
    <main className="container">
      <div className="content-wrapper">
        <div className="main-content">
          <section className="writing-page" id="writing">
            <header className="writing-intro">
              <span className="experience-kicker">
                NOTES FROM MY CORNER
              </span>

              <h1>Writing</h1>

              <p className="writing-lead">
                A home for essays, reflections, questions, and ideas
                still finding their words.
              </p>

              <p className="writing-description">
                Sometimes I write about science. Sometimes about being
                human. Sometimes a thought simply refuses to leave me
                alone until I give it somewhere to live.
              </p>

              <p className="writing-signature">
                A little curiosity, a little chaos, and a lot of me.
              </p>
            </header>

            <div className="writing-section-heading">
              <div>
                <span className="writing-overline">THE FIRST FEATURE</span>
                <h2>A story to begin with</h2>
              </div>
              <span className="writing-count">01 / FEATURED</span>
            </div>

            <article className="writing-featured">
              <div className="writing-featured-decoration" aria-hidden="true">
                <span>H₂O</span>
                <span>♡</span>
              </div>

              <div className="writing-featured-content">
                <span className="writing-category">
                  CHEMISTRY · WATER · BECOMING
                </span>

                <h2>
                  I Fell in Love With Chemistry. Then I Fell Into a Toilet.
                </h2>

                <p className="writing-story-subtitle">
                  Ten years after choosing chemistry, I’m finally
                  beginning to understand why water might be the problem
                  I was looking for all along.
                </p>

                <p className="writing-excerpt">
                  A decade-old love for chemistry leads to a growing
                  fascination with water, sanitation, and the possibility
                  of giving every drop another life. A little science,
                  a few big questions, and one very determined Jed.
                </p>

                <div className="writing-story-footer">
                  <span>September 4, 2026</span>

                  <a
                    className="writing-read-link"
                    href="https://waithiegeni.substack.com/p/i-fell-in-love-with-chemistry-then"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the story
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </div>
              </div>
            </article>

            <div className="writing-section-heading writing-more-heading">
              <div>
                <span className="writing-overline">FROM THE NOTEBOOK</span>
                <h2>And a few more things</h2>
              </div>
              <span className="writing-count">03 STORIES</span>
            </div>

            <div className="writing-stories-grid">
              {writingStories.map((story, index) => (
                <article className="writing-story-card" key={story.url}>
                  <div className="writing-card-topline">
                    <span className="writing-card-number">
                      0{index + 2}
                    </span>
                    <span className="writing-category">
                      {story.category}
                    </span>
                  </div>

                  <h3>{story.title}</h3>

                  <p className="writing-story-subtitle">
                    {story.subtitle}
                  </p>

                  <p className="writing-excerpt">
                    {story.excerpt}
                  </p>

                  <div className="writing-story-footer">
                    <span>{story.date}</span>

                    <a
                      className="writing-read-link"
                      href={story.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${story.title} on Substack`}
                    >
                      Read
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <footer className="writing-outro">
              <span className="writing-outro-symbol" aria-hidden="true">
                ✳
              </span>

              <h2>There is more where that came from.</h2>

              <p>
                More questions, more little discoveries, more stories
                that refuse to stay in my head. This corner is still
                growing, and I have a feeling it has plenty more to say.
              </p>

              <a
                className="writing-read-link writing-substack-link"
                href="https://waithiegeni.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find me on Substack
                <span aria-hidden="true"> ↗</span>
              </a>
            </footer>
          </section>
        </div>
      </div>
    </main>
  )
}

function App() {
  const [currentRoute, setCurrentRoute] =
    useState<PageRoute>(getCurrentRoute)

  const isSignOutPage =
    window.location.pathname === '/satire-signout'

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(getCurrentRoute())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('hashchange', handleRouteChange)

    return () => {
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [])

  if (isSignOutPage) {
    return <SignOutSatire />
  }

  return (
    <LanguageProvider>
      <div className="app">
        <Header />

        {currentRoute === 'home' && <HomePage />}

        {currentRoute === 'work-experience' && (
          <WorkExperiencePage />
        )}

        {currentRoute === 'things-that-dont-fit' && (
          <ThingsThatDontFitPage />
        )}

        {currentRoute === 'cv' && <CVPage />}

        {currentRoute === 'writing' && <WritingPage />}

        {currentRoute === 'contact' && <ContactPage />}

        <Footer />
        <ChatWidget />
      </div>
    </LanguageProvider>
  )
}

export default App
