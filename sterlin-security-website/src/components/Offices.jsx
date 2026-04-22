import { useState } from 'react'
import { MapPin, Building2, Phone, Mail, Clock } from 'lucide-react'
import { OFFICES, CONTACT } from '../constants/data'

export default function Offices() {
  const [hoveredOffice, setHoveredOffice] = useState(null)

  return (
    <section style={{ background: '#07111C', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(43,168,216,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center', fontSize: '0.85rem', letterSpacing: '0.3em' }}>
            NATIONAL PRESENCE
          </div>
          <h2 style={{ 
            fontFamily: 'Oswald,sans-serif', 
            fontWeight: 700, 
            textTransform: 'uppercase',
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            lineHeight: 1.05,
            marginTop: 16,
          }}>
            OUR <span style={{ color: '#2BA8D8' }}>OFFICES</span>
          </h2>
        </div>

        {/* Offices Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 24,
          marginBottom: 80,
        }}>
          {OFFICES.map((office, idx) => (
            <div 
              key={office.city}
              onMouseEnter={() => setHoveredOffice(idx)}
              onMouseLeave={() => setHoveredOffice(null)}
              style={{
                background: hoveredOffice === idx 
                  ? 'linear-gradient(135deg, rgba(43,168,216,0.1), rgba(43,168,216,0.05))'
                  : 'rgba(255,255,255,0.02)',
                border: `1px solid ${hoveredOffice === idx ? 'rgba(43,168,216,0.3)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '20px',
                padding: '28px 24px',
                transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                transform: hoveredOffice === idx ? 'translateY(-6px)' : 'translateY(0)',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                background: 'rgba(43,168,216,0.1)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                transition: 'transform 0.3s ease',
                transform: hoveredOffice === idx ? 'scale(1.05)' : 'scale(1)',
              }}>
                <MapPin size={24} color="#2BA8D8" strokeWidth={1.6} />
              </div>
              
              <h3 style={{
                fontFamily: 'Barlow Condensed,sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: hoveredOffice === idx ? '#2BA8D8' : '#E0EAF3',
                marginBottom: 12,
                transition: 'color 0.3s ease',
              }}>
                {office.city}
              </h3>
              
              <p style={{
                fontSize: '0.85rem',
                color: '#6A8A9F',
                lineHeight: 1.65,
              }}>
                {office.address}
              </p>
            </div>
          ))}
        </div>

        {/* Company Info Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(43,168,216,0.08), rgba(43,168,216,0.03))',
          border: '1px solid rgba(43,168,216,0.15)',
          borderRadius: '24px',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 40,
        }}>
          <div>
            <Building2 size={32} color="#2BA8D8" style={{ marginBottom: 16 }} />
            <h3 style={{
              fontFamily: 'Oswald,sans-serif',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: 12,
            }}>
              STERLIN <span style={{ color: '#2BA8D8' }}>SECURITY</span>
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#6A8A9F', lineHeight: 1.7 }}>
              A dynamic BEE company providing integrated, innovative, and high-quality
              security services across South Africa since 2014.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              <span className="cred-badge">PSIRA REGISTERED</span>
              <span className="cred-badge">BEE LEVEL 1</span>
            </div>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'Barlow Condensed,sans-serif',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#2BA8D8',
              marginBottom: 16,
            }}>QUICK LINKS</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {['Services', 'About', 'Why Us', 'Training', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} style={{
                  color: '#6A8A9F',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.2s',
                }} onMouseEnter={e => e.target.style.color = '#2BA8D8'}
                   onMouseLeave={e => e.target.style.color = '#6A8A9F'}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'Barlow Condensed,sans-serif',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#2BA8D8',
              marginBottom: 16,
            }}>CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={14} color="#2BA8D8" />
                <span style={{ fontSize: '0.85rem', color: '#6A8A9F' }}>{CONTACT.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={14} color="#2BA8D8" />
                <span style={{ fontSize: '0.85rem', color: '#6A8A9F' }}>{CONTACT.office}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Mail size={14} color="#2BA8D8" />
                <span style={{ fontSize: '0.85rem', color: '#6A8A9F' }}>{CONTACT.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}