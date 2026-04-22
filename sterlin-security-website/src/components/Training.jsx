import { useState } from 'react'
import * as Icons from 'lucide-react'
import { TRAINING, VALUES } from '../constants/data'

// Map icons for training programs
const getIconComponent = (iconName) => {
  const iconMap = {
    'GraduationCap': Icons.GraduationCap,
    'Plane': Icons.Plane,
    'Landmark': Icons.Landmark,
    'FlaskConical': Icons.FlaskConical,
    'Stethoscope': Icons.Stethoscope,
    'Microscope': Icons.Microscope,
  }
  return iconMap[iconName] || Icons.BookOpen
}

function TrainingCard({ icon, label }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = getIconComponent(icon)

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(43,168,216,0.12), rgba(43,168,216,0.06))'
          : 'rgba(255,255,255,0.02)',
        border: `1px solid ${isHovered ? 'rgba(43,168,216,0.35)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '20px',
        padding: '24px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
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
        background: 'linear-gradient(90deg, #2BA8D8, #3DC4F8)',
        transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 0.4s ease',
        transformOrigin: 'left',
      }} />
      
      {/* Icon container with animated ring */}
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          inset: -3,
          borderRadius: '50%',
          border: `2px solid #2BA8D8`,
          opacity: isHovered ? 0.3 : 0,
          transform: isHovered ? 'scale(1.2)' : 'scale(0.8)',
          transition: 'all 0.4s ease',
        }} />
        <div style={{
          width: 48,
          height: 48,
          minWidth: 48,
          background: isHovered 
            ? 'radial-gradient(circle, rgba(43,168,216,0.2), rgba(43,168,216,0.08))'
            : 'rgba(43,168,216,0.08)',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'scale(1.05) rotate(3deg)' : 'scale(1) rotate(0)',
        }}>
          <Icon size={22} color={isHovered ? '#3DC4F8' : '#2BA8D8'} strokeWidth={1.6} />
        </div>
      </div>
      
      <span style={{
        fontFamily: 'Barlow Condensed,sans-serif',
        fontWeight: 600,
        fontSize: '0.9rem',
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        color: isHovered ? '#fff' : '#C0D8E8',
        transition: 'color 0.3s ease',
      }}>
        {label}
      </span>
    </div>
  )
}

function ValuePill({ value, index }) {
  const [isHovered, setIsHovered] = useState(false)
  
  const colors = [
    '#2BA8D8', '#3DC4F8', '#2BA8D8', '#3DC4F8', '#2BA8D8', '#3DC4F8', '#2BA8D8'
  ]
  const color = colors[index % colors.length]

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-block',
        background: isHovered 
          ? `linear-gradient(135deg, ${color}20, ${color}08)`
          : 'rgba(43,168,216,0.06)',
        border: `1px solid ${isHovered ? `${color}40` : 'rgba(43,168,216,0.2)'}`,
        borderRadius: '50px',
        padding: '10px 24px',
        fontFamily: 'Barlow Condensed,sans-serif',
        fontSize: '0.85rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: isHovered ? color : '#7AC4DC',
        transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
        transform: isHovered ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
        cursor: 'pointer',
      }}
    >
      {value}
    </div>
  )
}

export default function Training() {
  const [hoveredSection, setHoveredSection] = useState(null)

  return (
    <section id="training" style={{ 
      background: '#050C14', 
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(43,168,216,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '-8%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(61,196,248,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ 
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            marginBottom: 16
          }}>
            EXPERTISE & CREDENTIALS
          </div>
          
          <h2 style={{ 
            fontFamily: 'Oswald,sans-serif', 
            fontWeight: 700, 
            textTransform: 'uppercase',
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            lineHeight: 1.05,
            marginBottom: 16
          }}>
            TRAINING &<br />
            <span style={{ 
              color: '#2BA8D8',
              position: 'relative',
              display: 'inline-block',
            }}>
              ACCREDITATION
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
          
          <p style={{
            fontSize: '0.95rem',
            color: '#6A8A9F',
            maxWidth: 500,
            marginTop: 20,
          }}>
            Industry-leading training programs that exceed regulatory requirements
          </p>
        </div>

        {/* Training Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
          gap: 20,
          marginBottom: 80,
        }}>
          {TRAINING.map((t, idx) => (
            <div
              key={t.label}
              onMouseEnter={() => setHoveredSection(idx)}
              onMouseLeave={() => setHoveredSection(null)}
              style={{
                animation: 'fadeSlideUp 0.6s ease forwards',
                animationDelay: `${idx * 0.05}s`,
                opacity: 0,
              }}
            >
              <TrainingCard {...t} />
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.06)', 
          paddingTop: 64,
          position: 'relative',
        }}>
          <div className="section-label" style={{ 
            marginBottom: 32,
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
          }}>
            OUR CORE VALUES
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 14,
            justifyContent: 'center',
          }}>
            {VALUES.map((value, idx) => (
              <ValuePill key={value} value={value} index={idx} />
            ))}
          </div>
        </div>

        {/* Additional Stats/Info Bar */}
        <div style={{
          marginTop: 64,
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          flexWrap: 'wrap',
          padding: '24px 32px',
          background: 'rgba(43,168,216,0.04)',
          borderRadius: '20px',
          border: '1px solid rgba(43,168,216,0.1)',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#2BA8D8' }}>100%</div>
            <div style={{ fontSize: '0.7rem', color: '#6A8A9F', letterSpacing: '0.05em' }}>Trained Workforce</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#2BA8D8' }}>500+</div>
            <div style={{ fontSize: '0.7rem', color: '#6A8A9F', letterSpacing: '0.05em' }}>Officers Deployed</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#2BA8D8' }}>SASSETA</div>
            <div style={{ fontSize: '0.7rem', color: '#6A8A9F', letterSpacing: '0.05em' }}>Accredited Provider</div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
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
      `}</style>
    </section>
  )
}