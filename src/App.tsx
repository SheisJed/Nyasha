import Header from './components/Header'
import ProfileOverview from './components/ProfileOverview'
import GitHubReplay from './components/GitHubReplay'
import AchievementsShowcase from './components/AchievementsShowcase'
import TechnicalSkills from './components/TechnicalSkills'
import ResumeViewer from './components/ResumeViewer'
import ThingsThatDontFit from './components/ThingsThatDontFit'
import ThingsThatDontFitPage from './components/ThingsThatDontFitPage'
import PersonalHobbies from './components/PersonalHobbies'
import SignOutSatire from './components/SignOutSatire'
import ContactSection from './components/ContactSection'
import ChatWidget from './components/ChatWidget'
import Footer from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import './styles/App.css'

function App() {

  // Simple routing - check if we're on the satire sign out page
  const isSignOutPage = window.location.pathname === '/satire-signout'
  const isThingsPage =
  window.location.pathname === '/Nyasha/things-that-dont-fit'


  // Show satire sign out page
  if (isSignOutPage) {
    return <SignOutSatire />
  }
  if (isThingsPage) {
  return <ThingsThatDontFitPage />
}

  // Show main portfolio
  return (
    <LanguageProvider>
      <div className="app">
     <Header/>
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
        <Footer />
        <ChatWidget />
      </div>
    </LanguageProvider>
  )
}

export default App
