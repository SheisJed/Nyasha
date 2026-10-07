import { useState, useEffect } from 'react'
import './Header.css'
import { useLanguage } from '../contexts/LanguageContext'

function Header() {
  const [activeSection, setActiveSection] = useState('profile')
  const { t } = useLanguage()

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault()

    setActiveSection(sectionId)

    const section = document.getElementById(sectionId)

    if (section) {
      const headerOffset = 100
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      section.classList.add('highlight-pulse')

      setTimeout(() => {
        section.classList.remove('highlight-pulse')
      }, 2000)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'profile',
        'experience',
        'education',
        'skills',
        'hobbies',
        'contact',
      ]

      const scrollPosition =
        window.scrollY + window.innerHeight / 3

      let currentSection = 'profile'
      let closestDistance = Infinity

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)

        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionMiddle = sectionTop + rect.height / 2

          const distance = Math.abs(
            scrollPosition - sectionMiddle
          )

          if (distance < closestDistance) {
            closestDistance = distance
            currentSection = sectionId
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header">
      <div className="header-main">
        <div className="header-container">
          <div className="header-left">
            <div className="logo">
              <span className="logo-text">JEDIDAH</span>
            </div>

            <nav className="nav">
              <a
                href="#profile"
                className={`nav-link ${
                  activeSection === 'profile' ? 'active' : ''
                }`}
                onClick={(e) => scrollToSection(e, 'profile')}
              >
                {t.profile}
              </a>

              <a
                href="#experience"
                className={`nav-link ${
                  activeSection === 'experience' ? 'active' : ''
                }`}
                onClick={(e) => scrollToSection(e, 'experience')}
              >
                Experience
              </a>

              <a
                href="#education"
                className={`nav-link ${
                  activeSection === 'education' ? 'active' : ''
                }`}
                onClick={(e) => scrollToSection(e, 'education')}
              >
                Education
              </a>

              <a
                href="#skills"
                className={`nav-link ${
                  activeSection === 'skills' ? 'active' : ''
                }`}
                onClick={(e) => scrollToSection(e, 'skills')}
              >
                {t.skills}
              </a>

              <a
                href="#hobbies"
                className={`nav-link ${
                  activeSection === 'hobbies' ? 'active' : ''
                }`}
                onClick={(e) => scrollToSection(e, 'hobbies')}
              >
                Hobbies
              </a>

              <a
                href="#contact"
                className={`nav-link ${
                  activeSection === 'contact' ? 'active' : ''
                }`}
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                {t.contact}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header