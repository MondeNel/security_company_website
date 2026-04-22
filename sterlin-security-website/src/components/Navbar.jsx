import { useState, useEffect } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { NAV_LINKS } from '../constants/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`nav-glass ${scrolled ? 'scrolled' : ''}`}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto', 
        padding: '0 32px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        height: 80 
      }}>
        {/* Logo with Image */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <img 
            src="/sterlin-security.jpg" 
            alt="Sterlin Security Services Logo" 
            style={{
              height: 52,
              width: 'auto',
              objectFit: 'contain',
              borderRadius: 8,
            }}
            onError={(e) => {
              // Fallback if image doesn't load
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ 
              fontFamily: 'Oswald,sans-serif', 
              fontWeight: 700, 
              fontSize: '1.2rem',
              color: '#fff', 
              letterSpacing: '0.04em', 
              textTransform: 'uppercase' 
            }}>
              STERLIN <span style={{ color: '#2BA8D8' }}>SECURITY</span>
            </div>
            <div style={{ 
              fontSize: '0.55rem', 
              letterSpacing: '0.18em', 
              color: '#4A7A9B',
              textTransform: 'uppercase',
              fontFamily: 'Barlow Condensed,sans-serif',
              marginTop: -2,
            }}>
              SERVICES (PTY) LTD
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {NAV_LINKS.map(l => (
            <a 
              key={l.label} 
              href={l.href}
              style={{ 
                fontFamily: 'Barlow Condensed,sans-serif', 
                fontSize: '0.85rem',
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                color: '#9BAFC0', 
                textDecoration: 'none', 
                transition: 'color 0.2s',
                fontWeight: 500,
              }}
              onMouseEnter={e => e.target.style.color = '#2BA8D8'}
              onMouseLeave={e => e.target.style.color = '#9BAFC0'}
            >
              {l.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary" 
            style={{ 
              padding: '10px 28px', 
              fontSize: '0.8rem',
              background: 'linear-gradient(135deg, #2BA8D8, #1A7FA8)',
              borderRadius: '40px',
              color: '#fff',
              textDecoration: 'none',
              fontFamily: 'Barlow Condensed,sans-serif',
              fontWeight: 600,
              letterSpacing: '0.1em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(43,168,216,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            GET PROTECTED
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className="mobile-menu-btn"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#fff',
            cursor: 'pointer', 
            display: 'none',
            padding: '8px',
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ 
          background: 'rgba(5,12,20,0.98)', 
          padding: '20px 32px 32px',
          borderTop: '1px solid rgba(43,168,216,0.15)',
          backdropFilter: 'blur(10px)',
        }}>
          {NAV_LINKS.map(l => (
            <a 
              key={l.label} 
              href={l.href} 
              onClick={() => setOpen(false)}
              style={{ 
                display: 'block', 
                fontFamily: 'Barlow Condensed,sans-serif', 
                fontSize: '1rem',
                letterSpacing: '0.15em', 
                textTransform: 'uppercase', 
                color: '#9BAFC0',
                textDecoration: 'none', 
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#2BA8D8'}
              onMouseLeave={e => e.target.style.color = '#9BAFC0'}
            >
              {l.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
            onClick={() => setOpen(false)}
            style={{ 
              marginTop: 20, 
              display: 'flex', 
              justifyContent: 'center',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #2BA8D8, #1A7FA8)',
              borderRadius: '40px',
              color: '#fff',
              textDecoration: 'none',
              fontFamily: 'Barlow Condensed,sans-serif',
              fontWeight: 600,
              letterSpacing: '0.1em',
            }}
          >
            GET PROTECTED
          </a>
        </div>
      )}
    </nav>
  )
}