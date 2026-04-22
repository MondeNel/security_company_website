import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../constants/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`nav-glass ${scrolled ? 'scrolled' : ''}`}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px',
                    display:'flex', alignItems:'center', justifyContent:'space-between', height:72 }}>

        {/* Logo with Image - Made Bigger */}
        <a href="#home" style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none' }}>
          <img 
            src="/sterlin-security.jpg" 
            alt="Sterlin Security Services Logo" 
            style={{
              height: 56,
              width: 'auto',
              objectFit: 'contain',
              borderRadius: 8,
              background: 'rgba(255,255,255,0.05)',
              padding: 6,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          <div>
            <div style={{ fontFamily:'Oswald,sans-serif', fontWeight:700, fontSize:'1.3rem',
                          color:'#fff', letterSpacing:'0.04em', textTransform:'uppercase' }}>
              Sterlin <span style={{ color:'var(--blue)' }}>Security</span>
            </div>
            <div style={{ fontSize:'0.6rem', letterSpacing:'0.18em', color:'var(--muted)',
                          textTransform:'uppercase', marginTop:-2,
                          fontFamily:'Barlow Condensed,sans-serif' }}>
              Services (Pty) Ltd
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display:'flex', alignItems:'center', gap:36 }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}
               style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:'0.82rem',
                        letterSpacing:'0.18em', textTransform:'uppercase',
                        color:'var(--sub)', textDecoration:'none', transition:'color 0.2s' }}
               onMouseEnter={e => e.target.style.color='var(--blue)'}
               onMouseLeave={e => e.target.style.color='var(--sub)'}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding:'10px 24px', fontSize:'0.78rem' }}>
            Get Protected
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(v => !v)} className="mobile-menu-btn"
                style={{ background:'none', border:'none', color:'var(--text)',
                         cursor:'pointer', display:'none' }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background:'rgba(5,12,20,0.98)', padding:'20px 32px 32px',
                      borderTop:'1px solid rgba(43,168,216,0.15)' }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
               style={{ display:'block', fontFamily:'Barlow Condensed,sans-serif', fontSize:'1rem',
                        letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--sub)',
                        textDecoration:'none', padding:'12px 0',
                        borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary"
             style={{ marginTop:20, display:'flex', justifyContent:'center' }}>
            Get Protected
          </a>
        </div>
      )}
    </nav>
  )
}