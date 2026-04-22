import { Phone, Mail } from 'lucide-react'
import { CONTACT } from '../constants/data'

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function CTA() {
  const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`

  return (
    <section className="cta-section" id="contact">
      <div style={{ position:'absolute', right:'-3%', top:'50%', transform:'translateY(-50%)',
                    fontSize:300, opacity:0.05, userSelect:'none', pointerEvents:'none',
                    color:'#050C14', lineHeight:1 }}>⬡</div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px',
                    position:'relative', zIndex:1, textAlign:'center' }}>
        <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:'0.76rem',
                      letterSpacing:'0.25em', textTransform:'uppercase',
                      color:'rgba(5,12,20,0.55)', marginBottom:16 }}>
          ◆ Ready to Secure Your Business
        </div>
        <h2 style={{ fontFamily:'Oswald,sans-serif', fontWeight:700, color:'#050C14',
                     textTransform:'uppercase', lineHeight:1.05, marginBottom:20,
                     fontSize:'clamp(2.2rem,5vw,4rem)' }}>
          Get a Free Security<br />Risk Assessment
        </h2>
        <p style={{ color:'rgba(5,12,20,0.62)', fontSize:'1rem', maxWidth:460,
                    margin:'0 auto 44px', lineHeight:1.75 }}>
          Speak to our specialists today. We'll evaluate your current exposure
          and propose a tailored, cost-effective solution.
        </p>

        <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`tel:${CONTACT.phone}`} className="btn-primary"
             style={{ background:'#050C14', color:'#2BA8D8' }}>
            <Phone size={16} strokeWidth={2} /> Call {CONTACT.phone}
          </a>

          <a href={waUrl} target="_blank" rel="noopener noreferrer"
             style={{ display:'inline-flex', alignItems:'center', gap:10,
                      background:'#25D366', color:'#fff',
                      fontFamily:'Barlow Condensed,sans-serif', fontWeight:700,
                      fontSize:'0.88rem', letterSpacing:'0.15em', textTransform:'uppercase',
                      padding:'15px 36px', textDecoration:'none',
                      clipPath:'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
                      transition:'background 0.25s, transform 0.25s' }}
             onMouseEnter={e => { e.currentTarget.style.background='#1ebe59'; e.currentTarget.style.transform='translateY(-2px)' }}
             onMouseLeave={e => { e.currentTarget.style.background='#25D366'; e.currentTarget.style.transform='translateY(0)' }}>
            <WaIcon /> WhatsApp Us
          </a>

          <a href={`mailto:${CONTACT.email}`}
             style={{ display:'inline-flex', alignItems:'center', gap:10,
                      background:'transparent', color:'#050C14',
                      fontFamily:'Barlow Condensed,sans-serif', fontWeight:600,
                      fontSize:'0.88rem', letterSpacing:'0.15em', textTransform:'uppercase',
                      padding:'14px 32px', border:'2px solid rgba(5,12,20,0.35)',
                      textDecoration:'none', transition:'border-color 0.25s' }}>
            <Mail size={16} strokeWidth={2} /> Email Us
          </a>
        </div>
      </div>
    </section>
  )
}