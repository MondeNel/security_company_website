import { useState } from 'react'
import { Award, Users, Globe, TrendingUp, ArrowRight, Mail, Sparkles, Shield } from 'lucide-react'

const PILLARS = [
  { 
    Icon: Award, 
    title: 'BEE LEVEL 1', 
    body: '100% black-owned and SANAS-accredited, committed to transformation and empowerment.',
    gradient: 'linear-gradient(135deg, #2BA8D8, #1A7FA8)',
    color: '#2BA8D8'
  },
  { 
    Icon: Users, 
    title: 'OUR PEOPLE', 
    body: 'Integrity assessments, criminal checks, and ID verification for every deployed officer.',
    gradient: 'linear-gradient(135deg, #3DC4F8, #2BA8D8)',
    color: '#3DC4F8'
  },
  { 
    Icon: Globe, 
    title: 'NATIONAL COVERAGE', 
    body: 'Offices in Gauteng, Kimberley, Prieska, Upington, and Kathu — we go where you are.',
    gradient: 'linear-gradient(135deg, #2BA8D8, #1A7FA8)',
    color: '#2BA8D8'
  },
  { 
    Icon: TrendingUp, 
    title: 'GROWTH PARTNER', 
    body: 'We align our services with your growth strategy, adding measurable operational value.',
    gradient: 'linear-gradient(135deg, #3DC4F8, #2BA8D8)',
    color: '#3DC4F8'
  },
]

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [hoveredBtn, setHoveredBtn] = useState(null)

  return (
    <section id="about" style={{ background: '#07111C', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(43,168,216,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(43,168,216,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div className="two-col"
             style={{ 
               display: 'grid', 
               gridTemplateColumns: '1fr 1fr', 
               gap: 80, 
               alignItems: 'start',
               '@media (max-width: 768px)': {
                 gridTemplateColumns: '1fr',
                 gap: 48,
               }
             }}>

          {/* Left Column - About Content */}
          <div>
            {/* Section Label - ENLARGED */}
            <div className="section-label" style={{ 
              marginBottom: 20,
              fontSize: '0.85rem',
              letterSpacing: '0.3em',
            }}>
              ABOUT US
            </div>
            
            {/* Main Heading - ENLARGED */}
            <h2 style={{ 
              fontFamily: 'Oswald,sans-serif', 
              fontWeight: 700, 
              textTransform: 'uppercase',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
              lineHeight: 1.05, 
              marginBottom: 28 
            }}>
              A DYNAMIC BEE<br />
              <span style={{ 
                color: '#2BA8D8',
                position: 'relative',
                display: 'inline-block',
              }}>
                SECURITY PARTNER
                <span style={{
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '70%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #2BA8D8, #3DC4F8)',
                  borderRadius: '2px',
                }} />
              </span>
            </h2>
            
            {/* Description - Cleaner text without "formerly" */}
            <p style={{ 
              color: '#7A9BB5', 
              lineHeight: 1.8, 
              fontSize: '0.98rem', 
              marginBottom: 20,
              background: 'rgba(255,255,255,0.02)',
              padding: '24px 28px',
              borderRadius: '20px',
              borderLeft: '3px solid #2BA8D8',
            }}>
              Sterlin Security Services commenced operations in{' '}
              <strong style={{ color: '#2BA8D8', fontSize: '1.05rem' }}>2014</strong>, a dynamic Black Economic 
              Empowerment company structured to deliver integrated security solutions across South Africa.
            </p>
            
            <p style={{ 
              color: '#6A8A9F', 
              lineHeight: 1.8, 
              fontSize: '0.95rem', 
              marginBottom: 36,
              padding: '0 4px',
            }}>
              We employ PSIRA-registered security officers experienced in handling the needs of
              large corporate clients, and continuously benchmark ourselves against international
              security industry standards.
            </p>
            
            {/* Modern CTA Buttons */}
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {/* Explore Services Button */}
              <a 
                href="#services" 
                onMouseEnter={() => setHoveredBtn('services')}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 32px',
                  background: hoveredBtn === 'services' 
                    ? 'linear-gradient(135deg, #3DC4F8, #2BA8D8)' 
                    : 'linear-gradient(135deg, #2BA8D8, #1A7FA8)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#fff',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                  transform: hoveredBtn === 'services' ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredBtn === 'services' 
                    ? '0 12px 30px rgba(43,168,216,0.4), 0 0 0 1px rgba(255,255,255,0.2)' 
                    : '0 6px 20px rgba(43,168,216,0.25)',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transition: 'left 0.6s ease',
                  ...(hoveredBtn === 'services' && { left: '100%' }),
                }} />
                <Sparkles size={18} style={{
                  transition: 'transform 0.3s ease',
                  transform: hoveredBtn === 'services' ? 'rotate(15deg) scale(1.1)' : 'rotate(0)',
                }} />
                <span>EXPLORE SERVICES</span>
                <ArrowRight size={18} style={{
                  transition: 'transform 0.3s ease',
                  transform: hoveredBtn === 'services' ? 'translateX(6px)' : 'translateX(0)',
                }} />
              </a>

              {/* Contact Us Button */}
              <a 
                href="#contact"  
                onMouseEnter={() => setHoveredBtn('contact')}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '13px 32px',
                  background: hoveredBtn === 'contact' 
                    ? 'rgba(255,255,255,0.12)' 
                    : 'transparent',
                  border: '2px solid rgba(43,168,216,0.6)',
                  borderRadius: '50px',
                  color: hoveredBtn === 'contact' ? '#fff' : '#9BAFC0',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                  transform: hoveredBtn === 'contact' ? 'translateY(-3px)' : 'translateY(0)',
                  boxShadow: hoveredBtn === 'contact' 
                    ? '0 8px 25px rgba(43,168,216,0.2), inset 0 0 20px rgba(43,168,216,0.1)' 
                    : 'none',
                }}
              >
                <Mail size={18} style={{
                  transition: 'all 0.3s ease',
                  color: hoveredBtn === 'contact' ? '#3DC4F8' : '#6A8A9F',
                }} />
                <span>CONTACT US</span>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '10%',
                  width: '80%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #2BA8D8, #3DC4F8, #2BA8D8, transparent)',
                  transform: hoveredBtn === 'contact' ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.3s ease',
                }} />
              </a>
            </div>
          </div>

          {/* Right Column - Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {PILLARS.map(({ Icon, title, body, gradient, color }, idx) => (
              <div 
                key={title}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: hoveredCard === idx 
                    ? `linear-gradient(135deg, ${color}15, ${color}08)`
                    : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${hoveredCard === idx ? `${color}40` : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '20px',
                  padding: '28px 22px',
                  transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                  transform: hoveredCard === idx ? 'translateY(-6px)' : 'translateY(0)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Animated gradient overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: gradient,
                  transform: hoveredCard === idx ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.4s ease',
                  transformOrigin: 'left',
                }} />

                {/* Icon container with animated ring */}
                <div style={{
                  position: 'relative',
                  display: 'inline-flex',
                  marginBottom: 18,
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '50%',
                    border: `2px solid ${color}`,
                    opacity: hoveredCard === idx ? 0.3 : 0,
                    transform: hoveredCard === idx ? 'scale(1.2)' : 'scale(0.8)',
                    transition: 'all 0.4s ease',
                  }} />
                  <div style={{
                    width: 52,
                    height: 52,
                    background: `radial-gradient(circle at 30% 30%, ${color}20, transparent)`,
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    transform: hoveredCard === idx ? 'scale(1.05) rotate(3deg)' : 'scale(1) rotate(0)',
                  }}>
                    <Icon size={24} color={color} strokeWidth={1.6} />
                  </div>
                </div>

                {/* Title */}
                <div style={{
                  fontFamily: 'Barlow Condensed,sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: hoveredCard === idx ? color : '#E0EAF3',
                  marginBottom: 12,
                  transition: 'color 0.3s ease',
                }}>
                  {title}
                </div>

                {/* Body text */}
                <div style={{
                  fontSize: '0.83rem',
                  color: '#6A8A9F',
                  lineHeight: 1.65,
                  transition: 'color 0.3s ease',
                }}>
                  {body}
                </div>

                {/* Decorative arrow on hover */}
                <div style={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  opacity: hoveredCard === idx ? 1 : 0,
                  transform: hoveredCard === idx ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'all 0.3s ease',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Stats Section */}
        <div style={{
          marginTop: 80,
          paddingTop: 48,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 32,
          textAlign: 'center',
        }}>
          <div>
            <Shield size={28} color="#2BA8D8" style={{ marginBottom: 12, margin: '0 auto 12px' }} />
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#2BA8D8' }}>2014</div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#6A8A9F' }}>Year Established</div>
          </div>
          <div>
            <Award size={28} color="#2BA8D8" style={{ marginBottom: 12, margin: '0 auto 12px' }} />
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#2BA8D8' }}>100%</div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#6A8A9F' }}>Black-Owned</div>
          </div>
          <div>
            <TrendingUp size={28} color="#2BA8D8" style={{ marginBottom: 12, margin: '0 auto 12px' }} />
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#2BA8D8' }}>Level 1</div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#6A8A9F' }}>BEE Contributor</div>
          </div>
          <div>
            <Globe size={28} color="#2BA8D8" style={{ marginBottom: 12, margin: '0 auto 12px' }} />
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#2BA8D8' }}>5+</div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#6A8A9F' }}>Office Locations</div>
          </div>
        </div>
      </div>
    </section>
  )
}