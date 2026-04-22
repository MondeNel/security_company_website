import { useState } from 'react'
import { CheckSquare, Brain, Target, Users, Map, Quote, Award, Plane, Landmark, Crown, TrendingUp, Sparkles } from 'lucide-react'

const WHY_US = [
  { 
    num: '01', 
    title: 'INTELLIGENCE-LED APPROACH', 
    body: "We don't just guard — we analyse, assess, and eliminate risks before they escalate.",
    icon: Brain,
    color: '#2BA8D8'
  },
  { 
    num: '02', 
    title: 'TAILORED LOSS CONTROL', 
    body: 'Custom solutions that add measurable value to your operational efficiency.',
    icon: Target,
    color: '#3DC4F8'
  },
  { 
    num: '03', 
    title: 'FULLY COMPLIANT WORKFORCE', 
    body: 'Every officer is PSIRA-registered, background-verified, and trained beyond legal minimums.',
    icon: Users,
    color: '#2BA8D8'
  },
  { 
    num: '04', 
    title: 'NATIONAL FOOTPRINT', 
    body: 'Offices in Gauteng, Kimberley, Prieska, Upington, and Limpopo — responsive coverage nationwide.',
    icon: Map,
    color: '#3DC4F8'
  },
]

const CREDENTIALS = [
  { icon: Award, label: 'SASSETA ACCREDITED', color: '#2BA8D8' },
  { icon: Plane, label: 'AVIATION SECURITY', color: '#3DC4F8' },
  { icon: Landmark, label: 'NATIONAL KEY POINTS', color: '#2BA8D8' },
  { icon: Crown, label: 'VIP PROTECTION', color: '#3DC4F8' },
]

export default function WhyUs() {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [hoveredCred, setHoveredCred] = useState(null)

  return (
    <section id="whyus" style={{ 
      position: 'relative',
      background: 'linear-gradient(135deg, #0D2035 0%, #0A1828 100%)',
      padding: '100px 0',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '-5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(43,168,216,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '-8%',
        width: '280px',
        height: '280px',
        background: 'radial-gradient(circle, rgba(61,196,248,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ 
        position: 'absolute', 
        top: -40, 
        left: 0, 
        right: 0, 
        height: 80,
        background: '#07111C',
        clipPath: 'polygon(0 0,100% 0,100% 40px,0 80px)' 
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

          {/* Left Column - Why Us Content */}
          <div>
            {/* Section Label */}
            <div className="section-label" style={{ 
              marginBottom: 20,
              fontSize: '0.85rem',
              letterSpacing: '0.3em',
            }}>
              OUR EDGE
            </div>
            
            {/* Main Heading - ENLARGED */}
            <h2 style={{ 
              fontFamily: 'Oswald,sans-serif', 
              fontWeight: 700, 
              textTransform: 'uppercase',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', 
              lineHeight: 1.05, 
              marginBottom: 48 
            }}>
              WHY CLIENTS CHOOSE<br />
              <span style={{ 
                color: '#2BA8D8',
                position: 'relative',
                display: 'inline-block',
              }}>
                STERLIN SECURITY
                <span style={{
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '60%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #2BA8D8, #3DC4F8)',
                  borderRadius: '2px',
                }} />
              </span>
            </h2>
            
            {/* Reasons List with Modern Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {WHY_US.map((item, idx) => {
                const Icon = item.icon
                const isHovered = hoveredItem === idx
                return (
                  <div 
                    key={item.num}
                    onMouseEnter={() => setHoveredItem(idx)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      display: 'flex',
                      gap: 20,
                      background: isHovered 
                        ? `linear-gradient(135deg, ${item.color}12, ${item.color}06)`
                        : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${isHovered ? `${item.color}30` : 'rgba(255,255,255,0.05)'}`,
                      borderRadius: '20px',
                      padding: '24px',
                      transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                      transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                      cursor: 'pointer',
                    }}
                  >
                    {/* Number Badge */}
                    <div style={{
                      width: 48,
                      height: 48,
                      minWidth: 48,
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}08)`,
                      border: `1px solid ${isHovered ? `${item.color}50` : `${item.color}30`}`,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Oswald,sans-serif',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: isHovered ? item.color : '#9BAFC0',
                      transition: 'all 0.3s ease',
                    }}>
                      {item.num}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: 8,
                      }}>
                        <Icon size={18} color={isHovered ? item.color : '#6A8A9F'} />
                        <div style={{ 
                          fontFamily: 'Barlow Condensed,sans-serif', 
                          fontWeight: 700,
                          fontSize: '1rem', 
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase', 
                          color: isHovered ? item.color : '#E0EAF3',
                          transition: 'color 0.3s ease',
                        }}>
                          {item.title}
                        </div>
                      </div>
                      <div style={{ 
                        fontSize: '0.88rem', 
                        color: '#6A8A9F', 
                        lineHeight: 1.65,
                        transition: 'color 0.3s ease',
                      }}>
                        {item.body}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Quote & Credentials */}
          <div>
            {/* Quote Card */}
            <div 
              className="bracket-box"
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(43,168,216,0.15)',
                borderRadius: '24px',
                padding: '40px 32px',
                marginBottom: 24,
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ 
                position: 'absolute', 
                top: 16, 
                right: 24, 
                fontSize: '5rem', 
                color: '#2BA8D8',
                opacity: 0.12,
                fontFamily: 'Georgia, serif',
                lineHeight: 1,
                pointerEvents: 'none',
              }}>
                "
              </div>
              
              <Quote size={32} color="#2BA8D8" style={{ marginBottom: 20, opacity: 0.6 }} />
              
              <p style={{ 
                fontFamily: 'Barlow,sans-serif', 
                fontSize: '1.1rem', 
                fontStyle: 'italic',
                color: '#B0C8DA', 
                lineHeight: 1.8, 
                marginBottom: 28,
                position: 'relative',
                zIndex: 1,
              }}>
                "Our vision is to be a long-term strategic partner to our customers, offering
                integrated security solutions that empower businesses and protect communities."
              </p>
              
              <div style={{ 
                borderTop: '1px solid rgba(43,168,216,0.2)', 
                paddingTop: 20,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 12,
              }}>
                <div>
                  <div style={{ 
                    fontFamily: 'Barlow Condensed,sans-serif', 
                    fontWeight: 700,
                    letterSpacing: '0.1em', 
                    textTransform: 'uppercase', 
                    color: '#E0EAF3',
                    fontSize: '0.9rem',
                  }}>
                    STERLIN SECURITY LEADERSHIP
                  </div>
                  <div style={{ 
                    fontSize: '0.7rem', 
                    color: '#4A7A9B', 
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase', 
                    marginTop: 4,
                  }}>
                    Act 56 of 2001 Compliant
                  </div>
                </div>
                <Sparkles size={20} color="#2BA8D8" opacity={0.5} />
              </div>
            </div>

            {/* Credentials Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: 12,
            }}>
              {CREDENTIALS.map((cred, idx) => {
                const Icon = cred.icon
                const isHovered = hoveredCred === idx
                return (
                  <div 
                    key={cred.label}
                    onMouseEnter={() => setHoveredCred(idx)}
                    onMouseLeave={() => setHoveredCred(null)}
                    style={{
                      background: isHovered 
                        ? `linear-gradient(135deg, ${cred.color}15, ${cred.color}08)`
                        : 'rgba(43,168,216,0.06)',
                      border: `1px solid ${isHovered ? `${cred.color}40` : 'rgba(43,168,216,0.15)'}`,
                      borderRadius: '16px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                      transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{
                      width: 36,
                      height: 36,
                      background: `radial-gradient(circle, ${cred.color}20, transparent)`,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Icon size={18} color={isHovered ? cred.color : '#7AC4DC'} />
                    </div>
                    <span style={{
                      fontFamily: 'Barlow Condensed,sans-serif',
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: isHovered ? cred.color : '#7AC4DC',
                      fontWeight: 600,
                      transition: 'color 0.3s ease',
                    }}>
                      {cred.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}