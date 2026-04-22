import { useState } from 'react'
import { 
  User, Award, Calendar, Mail, Phone, MapPin, 
  Users, Building2, CheckCircle, Star, 
  GraduationCap, Shield, Sparkles
} from 'lucide-react'

export default function Founder() {
  const [hoveredStat, setHoveredStat] = useState(null)

  const stats = [
    { 
      icon: Users, 
      value: '250+', 
      label: 'Employees Hired', 
      color: '#2BA8D8',
      percentage: 85,
      description: 'Growing team of professionals'
    },
    { 
      icon: Building2, 
      value: '10+', 
      label: 'Major Clients', 
      color: '#3DC4F8',
      percentage: 75,
      description: 'Government & Private Sector'
    },
    { 
      icon: Calendar, 
      value: '10+', 
      label: 'Years Experience', 
      color: '#2BA8D8',
      percentage: 90,
      description: 'Industry Leadership'
    },
    { 
      icon: Award, 
      value: 'Level 4', 
      label: 'Security Diploma', 
      color: '#3DC4F8',
      percentage: 95,
      description: 'Security Management'
    },
  ]

  const keyAccomplishments = [
    'Grew various businesses from start-up to millions in annual sales',
    'Expert knowledge in security, cleaning and waste sectors',
    'Recognized for passionate and highly driven entrepreneurship',
    'Excellent networking and business development skills',
    'Job creation activist and community development champion',
  ]

  const notableClients = [
    'Department of Public Works (Courts in Northern Cape)',
    'Gamagara Municipality',
    'Sunpower Solar Energy',
    'Elbon Construction',
    'Department of Social Development',
    'Department of Arts, Sport and Culture',
    'Eskom TVET Colleges',
  ]

  const skills = [
    'Business Development', 'Strategic Planning', 'Marketing & Sales',
    'Client Relations', 'Team Leadership', 'Risk Management',
    'Community Development', 'Security Operations', 'Waste Management',
    'Cleaning Services', 'Entrepreneurship', 'Networking'
  ]

  // Circular Progress Component
  const CircularProgress = ({ percentage, color, size = 80, strokeWidth = 6 }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (percentage / 100) * circumference

    return (
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 1s ease-in-out',
          }}
        />
      </svg>
    )
  }

  return (
    <section id="founder" style={{ 
      background: '#050C14', 
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(43,168,216,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '-8%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(61,196,248,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center', fontSize: '0.85rem', letterSpacing: '0.3em' }}>
            MEET THE FOUNDER
          </div>
          <h2 style={{ 
            fontFamily: 'Oswald,sans-serif', 
            fontWeight: 700, 
            textTransform: 'uppercase',
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            lineHeight: 1.05,
            marginTop: 16,
          }}>
            CHRIS <span style={{ color: '#2BA8D8' }}>NAKASE</span>
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: '#6A8A9F',
            maxWidth: 500,
            margin: '20px auto 0',
          }}>
            Visionary Entrepreneur & Security Industry Expert
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="founder-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 48,
        }}>
          
          {/* Left Column - Profile Card */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(43,168,216,0.08), rgba(43,168,216,0.02))',
              border: '1px solid rgba(43,168,216,0.15)',
              borderRadius: '28px',
              padding: '40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #2BA8D8, #3DC4F8, #2BA8D8)',
              }} />

              {/* Profile Avatar */}
              <div style={{
                width: 140,
                height: 140,
                margin: '0 auto 20px',
                background: 'linear-gradient(135deg, #2BA8D8, #1A7FA8)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(43,168,216,0.2)',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent)',
                }} />
                <User size={60} color="#fff" opacity={0.8} />
              </div>

              {/* Name & Title */}
              <h3 style={{
                fontFamily: 'Oswald,sans-serif',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: 6,
              }}>
                Chris Nakase
              </h3>
              <p style={{
                color: '#2BA8D8',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}>
                Founder & Chairman
              </p>

              {/* Contact Info */}
              <div style={{ textAlign: 'left', marginBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <Phone size={16} color="#2BA8D8" />
                  <span style={{ fontSize: '0.85rem', color: '#9BAFC0' }}>073 096 8188</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <Mail size={16} color="#2BA8D8" />
                  <span style={{ fontSize: '0.85rem', color: '#9BAFC0' }}>mcnakase@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <MapPin size={16} color="#2BA8D8" />
                  <span style={{ fontSize: '0.85rem', color: '#9BAFC0' }}>No34 Main Road, Prieska</span>
                </div>
              </div>

              {/* Stats Row with Circular Rings */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 20,
                paddingTop: 24,
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                {stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    onMouseEnter={() => setHoveredStat(idx)}
                    onMouseLeave={() => setHoveredStat(null)}
                    style={{
                      textAlign: 'center',
                      padding: '16px 12px',
                      background: hoveredStat === idx ? 'rgba(43,168,216,0.1)' : 'transparent',
                      borderRadius: '20px',
                      transition: 'all 0.3s ease',
                      transform: hoveredStat === idx ? 'translateY(-4px)' : 'translateY(0)',
                      cursor: 'pointer',
                    }}
                  >
                    {/* Circular Ring */}
                    <div style={{
                      position: 'relative',
                      width: '80px',
                      height: '80px',
                      margin: '0 auto 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <CircularProgress 
                        percentage={stat.percentage} 
                        color={stat.color} 
                        size={80} 
                        strokeWidth={5}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                      }}>
                        <stat.icon size={24} color={stat.color} />
                      </div>
                    </div>
                    
                    {/* Value */}
                    <div style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 700, 
                      color: '#fff',
                      marginBottom: 4,
                    }}>
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div style={{ 
                      fontSize: '0.6rem', 
                      color: '#6A8A9F', 
                      letterSpacing: '0.05em',
                      marginBottom: 4,
                    }}>
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <div style={{ 
                      fontSize: '0.55rem', 
                      color: stat.color,
                      opacity: 0.7,
                    }}>
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Info */}
          <div>
            {/* Professional Profile */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '20px',
              padding: '28px',
              marginBottom: 24,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <Shield size={24} color="#2BA8D8" />
                <h3 style={{ fontFamily: 'Oswald,sans-serif', fontSize: '1.2rem', color: '#fff' }}>Professional Profile</h3>
              </div>
              <p style={{ color: '#6A8A9F', lineHeight: 1.7, marginBottom: 20 }}>
                Over 10 years experience in security, cleaning and waste management services. 
                Expertise in business development from grassroots level to established, successful enterprise.
              </p>
              
              {/* Education */}
              <div style={{ marginTop: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <GraduationCap size={20} color="#2BA8D8" />
                  <h4 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.9rem', color: '#2BA8D8', letterSpacing: '0.1em' }}>EDUCATION</h4>
                </div>
                <div style={{ background: 'rgba(43,168,216,0.05)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ color: '#2BA8D8', fontWeight: 700, marginBottom: 8 }}>1988</div>
                  <div style={{ color: '#E0EAF3', fontWeight: 600 }}>Security Grading Council, Cape Town</div>
                  <div style={{ color: '#6A8A9F', fontSize: '0.85rem' }}>Conjoined up to Grade Level 4, Diploma in Security Management</div>
                </div>
              </div>
            </div>

            {/* Key Accomplishments */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '20px',
              padding: '28px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <Award size={24} color="#2BA8D8" />
                <h3 style={{ fontFamily: 'Oswald,sans-serif', fontSize: '1.2rem', color: '#fff' }}>Key Accomplishments</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {keyAccomplishments.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle size={16} color="#2BA8D8" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: '#9BAFC0', fontSize: '0.88rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Expertise Section */}
        <div className="founder-bottom-grid" style={{
          marginTop: 48,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 24,
        }}>
          
          {/* Notable Clients - ENLARGED TEXT */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '20px',
            padding: '32px',
            transition: 'all 0.3s ease',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <Building2 size={28} color="#2BA8D8" />
              <h3 style={{ fontFamily: 'Oswald,sans-serif', fontSize: '1.4rem', color: '#fff' }}>Notable Clients</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {notableClients.map((client, idx) => (
                <span key={idx} style={{
                  background: 'rgba(43,168,216,0.08)',
                  border: '1px solid rgba(43,168,216,0.15)',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#7AC4DC',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(43,168,216,0.15)'
                  e.currentTarget.style.borderColor = 'rgba(43,168,216,0.3)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(43,168,216,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(43,168,216,0.15)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  {client}
                </span>
              ))}
            </div>
          </div>

          {/* Skills & Expertise - ENLARGED TEXT */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '20px',
            padding: '32px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <Star size={28} color="#2BA8D8" />
              <h3 style={{ fontFamily: 'Oswald,sans-serif', fontSize: '1.4rem', color: '#fff' }}>Skills & Expertise</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {skills.map((skill, idx) => (
                <span key={idx} style={{
                  background: 'linear-gradient(135deg, rgba(43,168,216,0.1), rgba(43,168,216,0.05))',
                  borderRadius: '12px',
                  padding: '10px 20px',
                  fontSize: '0.9rem',
                  color: '#E0EAF3',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.background = 'rgba(43,168,216,0.15)'
                  e.currentTarget.style.fontSize = '0.92rem'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(43,168,216,0.1), rgba(43,168,216,0.05))'
                  e.currentTarget.style.fontSize = '0.9rem'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        
        {/* Business Philosophy */}
        <div style={{
          marginTop: 48,
          background: 'linear-gradient(135deg, rgba(43,168,216,0.08), rgba(43,168,216,0.02))',
          border: '1px solid rgba(43,168,216,0.15)',
          borderRadius: '20px',
          padding: '32px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(43,168,216,0.05), transparent)',
            pointerEvents: 'none',
          }} />
          <Sparkles size={32} color="#2BA8D8" style={{ marginBottom: 16, opacity: 0.6 }} />
          <p style={{
            fontSize: '1.1rem',
            color: '#B0C8DA',
            fontStyle: 'italic',
            lineHeight: 1.7,
            maxWidth: 700,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}>
            "Passionate and highly driven entrepreneur who believes in the empowerment of people. 
            Visionary for new business opportunities with excellent networking and business development skills."
          </p>
          <div style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
          }}>
            <span style={{ width: 40, height: 2, background: '#2BA8D8', opacity: 0.5 }} />
            <span style={{ width: 60, height: 2, background: '#2BA8D8', opacity: 0.8 }} />
            <span style={{ width: 40, height: 2, background: '#2BA8D8', opacity: 0.5 }} />
          </div>
        </div>
      </div>

      {/* Add responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .founder-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}