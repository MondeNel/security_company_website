import { useState, useEffect } from 'react'
import { Phone, MapPin, BadgeCheck, ArrowRight, Shield, Clock, Award, Globe, Sparkles, TrendingUp } from 'lucide-react'
import { CONTACT } from '../constants/data'

const STATS_BLOCKS = [
  { 
    Icon: Phone, 
    value: "073 096 8188", 
    label: "24/7 HOTLINE",
    highlight: true,
    color: "#25D366"
  },
  { 
    Icon: Globe, 
    value: "4 Provinces", 
    label: "NATIONAL REACH",
    detail: "Gauteng • Northern Cape • Limpopo • Free State",
    color: "#2BA8D8"
  },
  { 
    Icon: BadgeCheck, 
    value: "PSIRA", 
    label: "CERTIFIED & COMPLIANT",
    detail: "Registered & Accredited",
    color: "#2BA8D8"
  },
]

const MODERN_STATS = [
  { 
    Icon: Clock, 
    value: "2014", 
    prefix: "Est.",
    label: "Years Excellence",
    suffix: "+",
    displayValue: "10",
    description: "Years of Trusted Service",
    color: "#2BA8D8"
  },
  { 
    Icon: Award, 
    value: "100", 
    suffix: "%",
    label: "Black-Owned",
    description: "BEE Level 1 Contributor",
    color: "#2BA8D8",
    highlight: true
  },
  { 
    Icon: BadgeCheck, 
    value: "PsIRA", 
    label: "Registered",
    description: "Fully Compliant • Act 56 of 2001",
    color: "#2BA8D8"
  },
]

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredBtn, setHoveredBtn] = useState(null)
  const [hoveredStat, setHoveredStat] = useState(null)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  const fullText = "GUARDING WHAT MATTERS MOST"
  
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
      }
    }, 80) // Speed of typing (milliseconds per character)

    return () => clearInterval(typingInterval)
  }, [])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Split the typed text into two lines for display
  const firstLine = displayText.length > 16 ? displayText.slice(0, 16) : displayText
  const secondLine = displayText.length > 16 ? displayText.slice(16) : ''

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
        <div style={{ maxWidth: 720 }}>

          {/* Typing Animation Heading - SMALLER TEXT */}
          <div style={{ marginBottom: 32 }}>
            <div style={{
              fontFamily: 'Oswald,sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              color: '#fff',
              minHeight: '120px',
            }}>
              {displayText ? (
                <>
                  {displayText.includes('GUARDING WHAT') ? (
                    <>
                      <div>GUARDING WHAT</div>
                      <div style={{ color: '#2BA8D8', position: 'relative', display: 'inline-block' }}>
                        {displayText.replace('GUARDING WHAT', '').trim() || 'MATTERS MOST'}
                        {isTyping && showCursor && (
                          <span style={{
                            position: 'absolute',
                            right: -8,
                            top: 0,
                            width: 3,
                            height: '100%',
                            backgroundColor: '#2BA8D8',
                            animation: 'blink 0.8s infinite',
                          }} />
                        )}
                      </div>
                    </>
                  ) : (
                    displayText
                  )}
                </>
              ) : (
                <>
                  <div>GUARDING WHAT</div>
                  <div style={{ color: '#2BA8D8' }}>
                    MATTERS MOST
                    <span style={{
                      display: 'inline-block',
                      width: 3,
                      height: '1em',
                      backgroundColor: '#2BA8D8',
                      marginLeft: 4,
                      animation: 'blink 0.8s infinite',
                    }} />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="fade-up delay-300" style={{
            fontSize: '1rem',
            color: '#7A9BB5',
            maxWidth: 560,
            lineHeight: 1.7,
            fontWeight: 300,
            margin: '20px 0 32px',
            background: 'rgba(0,0,0,0.2)',
            padding: '16px 22px',
            borderRadius: '14px',
            backdropFilter: 'blur(5px)',
            borderLeft: '3px solid #2BA8D8',
          }}>
            South Africa's trusted intelligence-led security partner.
            PSIRA-registered. BEE Level 1. Serving corporate, industrial,
            and commercial clients since 2014.
          </p>

          {/* Modern CTA Buttons */}
          <div className="fade-up delay-400" style={{ 
            display: 'flex', 
            gap: 18, 
            flexWrap: 'wrap', 
            marginBottom: 48,
            alignItems: 'center',
          }}>
            {/* Primary CTA - Get Free Assessment */}
            <a 
              href="#contact" 
              className="cta-primary"
              onMouseEnter={() => setHoveredBtn('primary')}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 32px',
                background: hoveredBtn === 'primary' 
                  ? 'linear-gradient(135deg, #3DC4F8, #2BA8D8)' 
                  : 'linear-gradient(135deg, #2BA8D8, #1A7FA8)',
                border: 'none',
                borderRadius: '50px',
                color: '#fff',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                transform: hoveredBtn === 'primary' ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredBtn === 'primary' 
                  ? '0 10px 25px rgba(43,168,216,0.35)' 
                  : '0 4px 15px rgba(43,168,216,0.2)',
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
                ...(hoveredBtn === 'primary' && { left: '100%' }),
              }} />
              
              <Sparkles size={16} style={{
                transition: 'transform 0.3s ease',
                transform: hoveredBtn === 'primary' ? 'rotate(15deg) scale(1.1)' : 'rotate(0)',
              }} />
              <span>GET A FREE ASSESSMENT</span>
              <ArrowRight size={16} style={{
                transition: 'transform 0.3s ease',
                transform: hoveredBtn === 'primary' ? 'translateX(6px)' : 'translateX(0)',
              }} />
            </a>

            {/* Secondary CTA - Our Services */}
            <a 
              href="#services" 
              className="cta-secondary"
              onMouseEnter={() => setHoveredBtn('secondary')}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '13px 30px',
                background: hoveredBtn === 'secondary' 
                  ? 'rgba(255,255,255,0.1)' 
                  : 'transparent',
                border: '2px solid rgba(43,168,216,0.5)',
                borderRadius: '50px',
                color: hoveredBtn === 'secondary' ? '#fff' : '#9BAFC0',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                transform: hoveredBtn === 'secondary' ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: hoveredBtn === 'secondary' 
                  ? '0 8px 20px rgba(43,168,216,0.15)' 
                  : 'none',
              }}
            >
              <TrendingUp size={16} style={{
                transition: 'all 0.3s ease',
                color: hoveredBtn === 'secondary' ? '#3DC4F8' : '#6A8A9F',
              }} />
              <span>OUR SERVICES</span>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '10%',
                width: '80%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #2BA8D8, #3DC4F8, #2BA8D8, transparent)',
                transform: hoveredBtn === 'secondary' ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.3s ease',
              }} />
            </a>
          </div>

          {/* Stats Blocks */}
          <div className="fade-up delay-400"
               style={{ 
                 display: 'grid',
                 gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                 gap: 20,
                 marginBottom: 40,
               }}>
            {STATS_BLOCKS.map(({ Icon, value, label, detail, color, highlight }) => (
              <div 
                key={label} 
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  background: highlight ? 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.05))' : 'rgba(255,255,255,0.03)',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${highlight ? 'rgba(37,211,102,0.2)' : 'rgba(255,255,255,0.05)'}`,
                  transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.background = highlight ? 'linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.08))' : 'rgba(43,168,216,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = highlight ? 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.05))' : 'rgba(255,255,255,0.03)'
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  background: `radial-gradient(circle at 30% 30%, ${color}20, transparent)`,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={24} color={color} strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ 
                    fontFamily: 'Oswald,sans-serif',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: highlight ? '#25D366' : '#fff',
                    letterSpacing: '0.02em',
                    lineHeight: 1.2,
                  }}>
                    {value}
                  </div>
                  <div style={{ 
                    fontSize: '0.65rem', 
                    color: '#4A7A9B',
                    letterSpacing: '0.12em', 
                    textTransform: 'uppercase',
                    marginTop: 2,
                  }}>
                    {label}
                  </div>
                  {detail && (
                    <div style={{ 
                      fontSize: '0.6rem', 
                      color: '#6A8A9F',
                      marginTop: 4,
                    }}>
                      {detail}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="fade-up delay-400"
               style={{
                 display: 'flex',
                 gap: 28,
                 paddingTop: 20,
                 borderTop: '1px solid rgba(255,255,255,0.06)',
                 flexWrap: 'wrap',
                 justifyContent: 'space-between',
               }}>
            {MODERN_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                onMouseEnter={() => setHoveredStat(idx)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  transition: 'transform 0.3s ease',
                  transform: hoveredStat === idx ? 'translateY(-2px)' : 'translateY(0)',
                  cursor: 'pointer',
                }}
              >
                <stat.Icon size={18} color="#2BA8D8" />
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.85rem' }}>
                    {stat.prefix && <span style={{ fontSize: '0.7rem', marginRight: 2 }}>{stat.prefix}</span>}
                    {stat.displayValue || stat.value}
                    {stat.suffix}
                  </div>
                  <div style={{ fontSize: '0.6rem', color: '#4A7A9B', letterSpacing: '0.05em' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
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
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
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