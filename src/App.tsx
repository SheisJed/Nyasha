import { useState } from 'react'
import Header from './components/Header'
import ProfileOverview from './components/ProfileOverview'
import GitHubReplay from './components/GitHubReplay'
import AchievementsShowcase from './components/AchievementsShowcase'
import TechnicalSkills from './components/TechnicalSkills'
import ResumeViewer from './components/ResumeViewer'
import PersonalHobbies from './components/PersonalHobbies'
import InfoModal from './components/InfoModal'
import SignOutSatire from './components/SignOutSatire'
import ContactSection from './components/ContactSection'
import ChatWidget from './components/ChatWidget'
import Footer from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import { portfolioConfig } from './config/portfolio.config'
import './styles/App.css'

function App() {
  const [showInfoModal, setShowInfoModal] = useState(false)

  // Simple routing - check if we're on the satire sign out page
  const isSignOutPage = window.location.pathname === '/satire-signout'


  // Show satire sign out page
  if (isSignOutPage) {
    return <SignOutSatire />
  }

  // Show main portfolio
  return (
    <LanguageProvider>
      <div className="app">
     <Header
  onOpenInfo={() => setShowInfoModal(true)}
        />
        <main className="container">
          <div className="content-wrapper">
            <div className="main-content">
              <ProfileOverview />
              <GitHubReplay />
              <AchievementsShowcase />
              <TechnicalSkills />
              <ResumeViewer />
              <PersonalHobbies />
              <ContactSection />
            </div>
          </div>
        </main>
        <Footer />
        <ChatWidget />
        <InfoModal
          isOpen={showInfoModal}
          onClose={() => setShowInfoModal(false)}
        />
      </div>
    </LanguageProvider>
  )
}

export default App
