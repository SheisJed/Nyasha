
import { useEffect, useState, type MouseEvent } from 'react'
import './Header.css'
import { useLanguage } from '../contexts/LanguageContext'

type Theme = 'light' | 'dark'

function Header() {
  const [activeSection, setActiveSection] = useState('profile')
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return localStorage.getItem('nyasha-theme') === 'dark'
        ? 'dark'
        : 'light'
    } catch {
      return 'light'
    }
  })

  const { t } = useLanguage()

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      localStorage.setItem('nyasha-theme', theme)
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme])

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

      const scrollPosition = window.scrollY + window.innerHeight / 3
      let currentSection = 'profile'
      let closestDistance = Infinity

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)

        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionMiddle =
            rect.top + window.scrollY + rect.height / 2
          const distance = Math.abs(scrollPosition - sectionMiddle)

          if (distance < closestDistance) {
            closestDistance = distance
            currentSection = sectionId
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault()
    setActiveSection(sectionId)
    setMenuOpen(false)

    const section = document.getElementById(sectionId)

    if (section) {
      const headerOffset = 88
      const offsetPosition =
        section.getBoundingClientRect().top + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      section.classList.remove('highlight-pulse')
      void section.offsetWidth
      section.classList.add('highlight-pulse')

      window.setTimeout(() => {
        section.classList.remove('highlight-pulse')
      }, 2000)
    }
  }

  const navigation = [
    { id: 'profile', label: t.profile },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: t.skills },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: t.contact },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <a
          className="logo"
          href="#profile"
          onClick={(event) => scrollToSection(event, 'profile')}
          aria-label="Jedidah — back to profile"
        >
          <span className="logo-text">JEDIDAH</span>
        </a>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() =>
              setTheme((current) =>
                current === 'light' ? 'dark' : 'light',
              )
            }
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span aria-hidden="true">
              {theme === 'light' ? '☾' : '☀'}
            </span>
            <span className="theme-toggle-label">
              {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </span>
          </button>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="header-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-icon" aria-hidden="true">
              {menuOpen ? '×' : '☰'}
            </span>
            <span className="menu-label">
              {menuOpen ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>

        <nav
          id="header-navigation"
          className={`nav ${menuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
          hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${
                activeSection === item.id ? 'active' : ''
              }`}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={(event) => scrollToSection(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
