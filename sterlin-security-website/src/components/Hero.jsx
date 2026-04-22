import { useState, useEffect } from 'react'
import { Phone, MapPin, BadgeCheck, ArrowRight, Shield, Clock, Award } from 'lucide-react'
import { CONTACT } from '../constants/data'

const TRUST = [
  { Icon: Phone,      label: CONTACT.phone,  sub: '24/7 Hotline', color: '#25D366' },
  { Icon: MapPin,     label: '4 Provinces',  sub: 'National Reach', color: '#2BA8D8' },
  { Icon: BadgeCheck, label: 'PSIRA',        sub: 'Certified & Compliant', color: '#2BA8D8' },
]

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero-bg" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated gradient background that follows mouse */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(43,168,216,0.15), rgba(5,12,20,0.95))`,
          transition: 'background 0.3s ease',
          pointerEvents: 'none',
        }}
      />
      
      <div className="hero-grid" />
      <div className="hero-glow" />

      {/* Animated floating particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: '#2BA8D8',
              borderRadius: '50%',
              opacity: 0.3,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative abstract shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(43,168,216,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 8s infinite ease-in-out',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '0%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(43,168,216,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 12s infinite ease-in-out reverse',
      }} />

      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto', 
        padding: '130px 32px 90px',
        position: 'relative', 
        zIndex: 2 
      }}>
        <div style={{ maxWidth: 680 }}>

          {/* Formerly known badge - animated */}
          <div 
            className="fade-up delay-100"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 28,
              background: 'rgba(43,168,216,0.12)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(43,168,216,0.35)',
              borderRadius: '50px',
              color: '#2BA8D8',
              fontSize: '0.7rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              padding: '8px 20px',
              fontFamily: 'Barlow Condensed,sans-serif',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.background = 'rgba(43,168,216,0.2)'
              e.currentTarget.style.borderColor = 'rgba(43,168,216,0.6)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.background = 'rgba(43,168,216,0.12)'
              e.currentTarget.style.borderColor = 'rgba(43,168,216,0.35)'
            }}
          >
            <span style={{ width: 6, height: 6, background: '#2BA8D8', borderRadius: '50%', display: 'inline-block' }} />
            Formerly Masicebise (MBS) Protection Services
          </div>

          {/* Main heading with animated underline */}
          <h1 className="fade-up delay-200" style={{
            fontFamily: 'Oswald,sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 8vw, 6.2rem)',
            lineHeight: 0.94,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: '#fff',
            position: 'relative',
            display: 'inline-block',
          }}>
            Guarding What<br />
            <span style={{ 
              color: '#2BA8D8',
              position: 'relative',
              display: 'inline-block',
            }}>
              Matters Most
              <span style={{
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '0%',
                height: '4px',
                background: 'linear-gradient(90deg, #2BA8D8, #3DC4F8, #2BA8D8)',
                animation: 'underlineExpand 1s ease forwards 0.5s',
                borderRadius: '2px',
              }} />
            </span>
          </h1>

          {/* Description with soft styling */}
          <p className="fade-up delay-300" style={{
            fontSize: '1.05rem',
            color: '#7A9BB5',
            maxWidth: 500,
            lineHeight: 1.75,
            fontWeight: 300,
            margin: '28px 0 40px',
            background: 'rgba(0,0,0,0.2)',
            padding: '16px 20px',
            borderRadius: '12px',
            backdropFilter: 'blur(5px)',
            borderLeft: '3px solid #2BA8D8',
          }}>
            South Africa's trusted intelligence-led security partner.
            PSIRA-registered. BEE Level 1. Serving corporate, industrial,
            and commercial clients since 2014.
          </p>

          {/* CTA Buttons with modern styling */}
          <div className="fade-up delay-400" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a 
              href="#contact" 
              className="btn-primary"
              style={{
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(43,168,216,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Get a Free Assessment 
              <ArrowRight size={16} style={{ transition: 'transform 0.3s ease' }} />
            </a>
            <a 
              href="#services" 
              className="btn-outline"
              style={{
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.background = 'rgba(43,168,216,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Our Services
            </a>
          </div>

          {/* Trust indicators with animated cards */}
          <div className="fade-up delay-400"
               style={{ 
                 display: 'flex', 
                 gap: 40, 
                 marginTop: 64, 
                 flexWrap: 'wrap',
               }}>
            {TRUST.map(({ Icon, label, sub, color }) => (
              <div 
                key={label} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 14,
                  background: 'rgba(255,255,255,0.03)',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.background = 'rgba(43,168,216,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(43,168,216,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  background: `radial-gradient(circle at 30% 30%, ${color}20, transparent)`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={22} color={color} strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ 
                    fontFamily: 'Barlow Condensed,sans-serif', 
                    fontWeight: 700,
                    fontSize: '1rem', 
                    color: '#E0EAF3', 
                    letterSpacing: '0.05em' 
                  }}>
                    {label}
                  </div>
                  <div style={{ 
                    fontSize: '0.7rem', 
                    color: '#4A7A9B',
                    letterSpacing: '0.12em', 
                    textTransform: 'uppercase' 
                  }}>
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats Row */}
          <div className="fade-up delay-400"
               style={{
                 display: 'flex',
                 gap: 30,
                 marginTop: 40,
                 paddingTop: 30,
                 borderTop: '1px solid rgba(255,255,255,0.06)',
                 flexWrap: 'wrap',
               }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Clock size={20} color="#2BA8D8" />
              <div>
                <div style={{ fontWeight: 700, color: '#fff' }}>Est. 2014</div>
                <div style={{ fontSize: '0.7rem', color: '#4A7A9B' }}>10+ Years Excellence</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Award size={20} color="#2BA8D8" />
              <div>
                <div style={{ fontWeight: 700, color: '#fff' }}>100% Black-Owned</div>
                <div style={{ fontSize: '0.7rem', color: '#4A7A9B' }}>BEE Level 1</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Shield size={20} color="#2BA8D8" />
              <div>
                <div style={{ fontWeight: 700, color: '#fff' }}>PsIRA Registered</div>
                <div style={{ fontSize: '0.7rem', color: '#4A7A9B' }}>Fully Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(10px) translateX(-10px); }
          75% { transform: translateY(-10px) translateX(5px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        @keyframes underlineExpand {
          from { width: 0%; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }
        
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-up {
          animation: fadeSlideUp 0.8s ease both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.25s; }
        .delay-300 { animation-delay: 0.4s; }
        .delay-400 { animation-delay: 0.55s; }
      `}</style>
    </section>
  )
}