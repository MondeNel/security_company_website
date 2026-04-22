import { useState, useRef, useEffect } from 'react'
import * as Icons from 'lucide-react'
import { SERVICES } from '../constants/data'

function ServiceCard({ icon, title, desc, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const Icon = Icons[icon] ?? Icons.Shield

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setMousePosition({ x, y })
    }
  }

  return (
    <div
      ref={cardRef}
      className="service-card-modern"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        background: isHovered 
          ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(43,168,216,0.15), rgba(43,168,216,0.05))`
          : 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '32px 28px',
        transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 20px 40px -12px rgba(0,0,0,0.3), 0 0 0 1px rgba(43,168,216,0.2)' 
          : '0 4px 6px -2px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Animated gradient overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #2BA8D8, #3DC4F8, #2BA8D8, transparent)',
          transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.6s ease',
        }}
      />

      {/* Icon with soft gradient and animation */}
      <div
        style={{
          width: 56,
          height: 56,
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(43,168,216,0.2), rgba(61,196,248,0.1))'
            : 'rgba(43,168,216,0.1)',
          border: '1px solid rgba(43,168,216,0.25)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 22,
          transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
          transform: isHovered ? 'scale(1.05) rotate(3deg)' : 'scale(1) rotate(0)',
        }}
      >
        <Icon 
          size={26} 
          color="#2BA8D8" 
          strokeWidth={1.6}
          style={{
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
      </div>

      {/* Title with modern typography */}
      <div
        style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: isHovered ? '#fff' : '#E0EAF3',
          marginBottom: 12,
          transition: 'color 0.3s ease',
        }}
      >
        {title}
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: '0.88rem',
          color: '#6A8A9F',
          lineHeight: 1.7,
          transition: 'color 0.3s ease',
        }}
      >
        {desc}
      </div>

      {/* Animated arrow indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          right: 24,
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
          transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2BA8D8" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default function Services() {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const cards = document.querySelectorAll('.service-card-observe')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" style={{ background: '#050C14', padding: '100px 0', position: 'relative' }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(43,168,216,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '0%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(43,168,216,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        {/* Section header with animation */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            What We Offer
          </div>
          <h2 style={{
            fontFamily: 'Oswald, sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.05,
            marginBottom: 16,
          }}>
            Comprehensive<br />
            <span style={{ color: '#2BA8D8', position: 'relative', display: 'inline-block' }}>
              Security Solutions
              <span style={{
                position: 'absolute',
                bottom: -8,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #2BA8D8, #3DC4F8, #2BA8D8, transparent)',
                borderRadius: '2px',
              }} />
            </span>
          </h2>
          <p style={{
            maxWidth: 500,
            margin: '20px auto 0',
            color: '#6A8A9F',
            lineHeight: 1.7,
            fontSize: '0.95rem',
          }}>
            From ground-level guarding to sophisticated control room intelligence —
            we deliver layered protection tailored to your environment.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {SERVICES.map((service, idx) => (
            <div
              key={service.title}
              data-index={idx}
              className="service-card-observe"
              style={{
                animation: visibleCards.includes(idx) 
                  ? 'fadeSlideUp 0.6s ease forwards' 
                  : 'none',
                opacity: 0,
                animationDelay: `${idx * 0.05}s`,
              }}
            >
              <ServiceCard {...service} index={idx} />
            </div>
          ))}
        </div>
      </div>

      {/* Add animation keyframes to component */}
      <style>{`
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
        
        .service-card-modern {
          position: relative;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
        }
        
        .service-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(43,168,216,0.3), rgba(43,168,216,0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .service-card-modern:hover::before {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}