import { useEffect, useState } from 'react'
import './Header.css'

type Theme = 'light' | 'dark'

const navigation = [
  { id: 'home', label: 'Home', href: '#/' },
  {
    id: 'work-experience',
    label: 'The Work & the Stories',
    href: '#/work-experience',
  },
  {
    id: 'things-that-dont-fit',
    label: 'Beyond the CV',
    href: '#/things-that-dont-fit',
  },
  { id: 'cv', label: 'CV', href: '#/cv' },
  { id: 'writing', label: 'Writing', href: '#/writing' },
  { id: 'contact', label: 'Contact', href: '#/contact' },
]

function getActiveRoute() {
  const hash = window.location.hash

  const currentPage = navigation.find(
    (item) => item.href === hash,
  )

  return currentPage?.id ?? 'home'
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeRoute, setActiveRoute] = useState(getActiveRoute)

  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return localStorage.getItem('nyasha-theme') === 'dark'
        ? 'dark'
        : 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      localStorage.setItem('nyasha-theme', theme)
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveRoute(getActiveRoute())
      setMenuOpen(false)
    }

    window.addEventListener('hashchange', handleRouteChange)

    return () => {
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <header className="header">
      <div className="header-container">
        <a
          className="logo"
          href="#/"
          aria-label="Jedidah — Home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="logo-text">JEDIDAH</span>
        </a>

        <nav
          id="header-navigation"
          className={`nav ${menuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${
                activeRoute === item.id ? 'active' : ''
              }`}
              aria-current={
                activeRoute === item.id ? 'page' : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() =>
              setTheme((current) =>
                current === 'light' ? 'dark' : 'light',
              )
            }
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } mode`}
            title={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } mode`}
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
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
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
      </div>
    </header>
  )
}

export default Header