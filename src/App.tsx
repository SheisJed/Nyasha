
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

function WritingPage() {
  return (
    <main className="container">
      <div className="content-wrapper">
        <div className="main-content">
          <section className="writing-page" id="writing">
            <span className="experience-kicker">
              NOTES FROM MY CORNER
            </span>

            <h1>Writing</h1>

            <p>
              A home for essays, reflections, questions, and ideas
              still finding their words.
            </p>

            <p>
              This space is still taking shape. The writing will
              find its way here soon.
            </p>
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

        {currentRoute === 'contact' && (
          <main className="container">
            <div className="content-wrapper">
              <div className="main-content">
                <ContactSection />
              </div>
            </div>
          </main>
        )}

        <Footer />
        <ChatWidget />
      </div>
    </LanguageProvider>
  )
}

export default App
