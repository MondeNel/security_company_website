import { useState } from 'react'
import { Phone, Mail, MessageCircle, ArrowRight, Shield, Sparkles, Send } from 'lucide-react'
import { CONTACT } from '../constants/data'

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function CTA() {
  const [hoveredBtn, setHoveredBtn] = useState(null)
  const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`

  return (
    <section className="cta-section" id="contact" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #2BA8D8 0%, #1A7FA8 100%)',
      padding: '100px 0',
      overflow: 'hidden',
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(5,12,20,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.04) 20px, rgba(255,255,255,0.04) 21px)',
        pointerEvents: 'none',
      }} />

      <div style={{ 
        maxWidth: 900, 
        margin: '0 auto', 
        padding: '0 32px',
        position: 'relative', 
        zIndex: 1, 
        textAlign: 'center' 
      }}>
        <Shield size={48} color="rgba(5,12,20,0.15)" style={{ marginBottom: 16 }} />
        
        <div style={{ 
          fontFamily: 'Barlow Condensed,sans-serif', 
          fontSize: '0.8rem',
          letterSpacing: '0.25em', 
          textTransform: 'uppercase',
          color: 'rgba(5,12,20,0.55)', 
          marginBottom: 16 
        }}>
          ◆ READY TO SECURE YOUR BUSINESS
        </div>
        
        <h2 style={{ 
          fontFamily: 'Oswald,sans-serif', 
          fontWeight: 700, 
          color: '#050C14',
          textTransform: 'uppercase', 
          lineHeight: 1.05, 
          marginBottom: 20,
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
        }}>
          GET A FREE SECURITY<br />RISK ASSESSMENT
        </h2>
        
        <p style={{ 
          color: 'rgba(5,12,20,0.65)', 
          fontSize: '1.05rem', 
          maxWidth: 520,
          margin: '0 auto 44px', 
          lineHeight: 1.75 
        }}>
          Speak to our specialists today. We'll evaluate your current exposure
          and propose a tailored, cost-effective solution.
        </p>

        {/* Contact Buttons */}
        <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Call Button */}
          <a 
            href={`tel:${CONTACT.phone}`} 
            onMouseEnter={() => setHoveredBtn('call')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '16px 34px',
              background: hoveredBtn === 'call' ? '#050C14' : '#0A1828',
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
              transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
              transform: hoveredBtn === 'call' ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: hoveredBtn === 'call' ? '0 8px 25px rgba(0,0,0,0.2)' : '0 4px 15px rgba(0,0,0,0.1)',
            }}
          >
            <Phone size={18} />
            <span>CALL {CONTACT.phone}</span>
          </a>

          {/* WhatsApp Button */}
          <a 
            href={waUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredBtn('whatsapp')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '16px 34px',
              background: hoveredBtn === 'whatsapp' ? '#1ebe59' : '#25D366',
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
              transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
              transform: hoveredBtn === 'whatsapp' ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: hoveredBtn === 'whatsapp' ? '0 8px 25px rgba(37,211,102,0.3)' : '0 4px 15px rgba(37,211,102,0.2)',
            }}
          >
            <WaIcon />
            <span>WHATSAPP US</span>
          </a>

          {/* Email Button */}
          <a 
            href={`mailto:${CONTACT.email}`}
            onMouseEnter={() => setHoveredBtn('email')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '15px 32px',
              background: 'transparent',
              border: '2px solid rgba(5,12,20,0.4)',
              borderRadius: '50px',
              color: '#050C14',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
              transform: hoveredBtn === 'email' ? 'translateY(-3px)' : 'translateY(0)',
              background: hoveredBtn === 'email' ? 'rgba(5,12,20,0.05)' : 'transparent',
              borderColor: hoveredBtn === 'email' ? '#050C14' : 'rgba(5,12,20,0.4)',
            }}
          >
            <Mail size={18} />
            <span>EMAIL US</span>
          </a>
        </div>

        {/* Trust indicator */}
        <div style={{
          marginTop: 48,
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Sparkles size={14} color="#050C14" opacity={0.5} />
            <span style={{ fontSize: '0.7rem', color: '#050C14', opacity: 0.6 }}>Free Consultation</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Sparkles size={14} color="#050C14" opacity={0.5} />
            <span style={{ fontSize: '0.7rem', color: '#050C14', opacity: 0.6 }}>No Obligation</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Sparkles size={14} color="#050C14" opacity={0.5} />
            <span style={{ fontSize: '0.7rem', color: '#050C14', opacity: 0.6 }}>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}