import { useState } from 'react'
import { Phone, Mail, Printer, MapPin, Shield, ArrowUp } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '../constants/data'

const CONTACT_ITEMS = [
  { Icon: Phone,   label:'TEL',    value: CONTACT.phone,  href: `tel:${CONTACT.phone}`    },
  { Icon: Phone,   label:'OFFICE', value: CONTACT.office, href: `tel:${CONTACT.office}`   },
  { Icon: Printer, label:'FAX',    value: CONTACT.fax,    href: null                      },
  { Icon: Mail,    label:'EMAIL',  value: CONTACT.email,  href: `mailto:${CONTACT.email}` },
]

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#020810', borderTop: '1px solid rgba(43,168,216,0.15)', padding: '64px 0 32px', position: 'relative' }}>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'absolute',
          top: -20,
          right: 40,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: '#2BA8D8',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.background = '#3DC4F8'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.background = '#2BA8D8'
        }}
      >
        <ArrowUp size={20} color="#fff" />
      </button>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div className="footer-grid"
             style={{ 
               display: 'grid', 
               gridTemplateColumns: '2fr 1fr 1.5fr', 
               gap: 64, 
               marginBottom: 56,
               '@media (max-width: 768px)': {
                 gridTemplateColumns: '1fr',
                 gap: 40,
               }
             }}>

          {/* Brand Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <img 
                src="/sterlin-security.jpg" 
                alt="Sterlin Security Services Logo" 
                style={{
                  height: 50,
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.05)',
                  padding: 4,
                }}
              />
              <div>
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
                  fontFamily: 'Barlow Condensed,sans-serif' 
                }}>
                  SERVICES (PTY) LTD
                </div>
              </div>
            </div>
            
            <p style={{ color: '#4A7A9B', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 20 }}>
              A dynamic BEE company providing integrated, innovative, and high-quality
              security services across South Africa since 2014.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Shield size={14} color="#2BA8D8" />
                <span style={{ fontSize: '0.75rem', color: '#6A8A9F' }}>PSIRA Registered</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Shield size={14} color="#2BA8D8" />
                <span style={{ fontSize: '0.75rem', color: '#6A8A9F' }}>BEE Level 1 Contributor</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ 
              fontFamily: 'Barlow Condensed,sans-serif', 
              fontWeight: 700,
              letterSpacing: '0.18em', 
              fontSize: '0.75rem',
              textTransform: 'uppercase', 
              color: '#2BA8D8', 
              marginBottom: 24 
            }}>
              QUICK LINKS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV_LINKS.map((l, idx) => (
                <a 
                  key={l.label} 
                  href={l.href}
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    fontFamily: 'Barlow Condensed,sans-serif',
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: hoveredLink === idx ? '#2BA8D8' : '#6A8A9F',
                    textDecoration: 'none',
                    transition: 'color 0.2s, transform 0.2s',
                    display: 'inline-block',
                    transform: hoveredLink === idx ? 'translateX(5px)' : 'translateX(0)',
                  }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <div style={{ 
              fontFamily: 'Barlow Condensed,sans-serif', 
              fontWeight: 700,
              letterSpacing: '0.18em', 
              fontSize: '0.75rem',
              textTransform: 'uppercase', 
              color: '#2BA8D8', 
              marginBottom: 24 
            }}>
              CONTACT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CONTACT_ITEMS.map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <c.Icon size={14} color="#2BA8D8" strokeWidth={2} />
                  <div>
                    <span style={{ 
                      fontFamily: 'Barlow Condensed,sans-serif', 
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#2BA8D8' 
                    }}>
                      {c.label}:{' '}
                    </span>
                    {c.href
                      ? <a href={c.href}
                           style={{ fontSize: '0.85rem', color: '#6A8A9F', textDecoration: 'none', transition: 'color 0.2s' }}
                           onMouseEnter={e => e.target.style.color = '#2BA8D8'}
                           onMouseLeave={e => e.target.style.color = '#6A8A9F'}>
                          {c.value}
                        </a>
                      : <span style={{ fontSize: '0.85rem', color: '#6A8A9F' }}>{c.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.06)', 
          paddingTop: 28,
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: 16 
        }}>
          <div style={{ fontSize: '0.7rem', color: '#2A4A5E' }}>
            © {new Date().getFullYear()} Sterlin Security Services (Pty) Ltd.
            All rights reserved.
          </div>
          <div style={{ fontSize: '0.7rem', color: '#2A4A5E', letterSpacing: '0.08em' }}>
            A proud subsidiary of M&amp;D Holdings (Pty) Ltd
          </div>
        </div>
      </div>
    </footer>
  )
}