import { Award, Users, Globe, TrendingUp } from 'lucide-react'

const PILLARS = [
  { Icon: Award,      title: 'BEE Level 1',      body: '100% black-owned and SANAS-accredited, committed to transformation and empowerment.'                      },
  { Icon: Users,      title: 'Our People',        body: 'Integrity assessments, criminal checks, and ID verification for every deployed officer.'                  },
  { Icon: Globe,      title: 'National Coverage', body: 'Offices in Gauteng, Kimberley, Prieska, Upington, and Khathu — we go where you are.'                     },
  { Icon: TrendingUp, title: 'Growth Partner',    body: 'We align our services with your growth strategy, adding measurable operational value.'                    },
]

export default function About() {
  return (
    <section id="about" style={{ background:'#07111C', padding:'100px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px' }}>
        <div className="two-col"
             style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>

          <div>
            <div className="section-label">About Us</div>
            <h2 style={{ fontFamily:'Oswald,sans-serif', fontWeight:700, textTransform:'uppercase',
                         fontSize:'clamp(2rem,4vw,3rem)', lineHeight:1.05, marginBottom:24 }}>
              A Dynamic BEE<br />
              <span style={{ color:'#2BA8D8' }}>Security Partner</span>
            </h2>
            <p style={{ color:'#6A8A9F', lineHeight:1.8, fontSize:'0.95rem', marginBottom:20 }}>
              Sterlin Security Services commenced operations in{' '}
              <strong style={{ color:'#9BAFC0' }}>2014</strong>, formerly operating as Masicebise
              (MBS) Protection Services. We are a dynamic Black Economic Empowerment company
              structured to deliver integrated security solutions across South Africa.
            </p>
            <p style={{ color:'#6A8A9F', lineHeight:1.8, fontSize:'0.95rem', marginBottom:32 }}>
              We employ PSIRA-registered security officers experienced in handling the needs of
              large corporate clients, and continuously benchmark ourselves against international
              security industry standards.
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              <a href="#services" className="btn-primary">Explore Services →</a>
              <a href="#contact"  className="btn-outline">Contact Us</a>
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
            {PILLARS.map(({ Icon, title, body }) => (
              <div key={title}
                   style={{ background:'rgba(255,255,255,0.02)',
                             border:'1px solid rgba(255,255,255,0.06)',
                             padding:'28px 22px', transition:'border-color 0.25s, background 0.25s' }}
                   onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(43,168,216,0.3)'; e.currentTarget.style.background='rgba(43,168,216,0.06)' }}
                   onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.background='rgba(255,255,255,0.02)' }}>
                <div style={{ width:40, height:40, background:'rgba(43,168,216,0.1)',
                              border:'1px solid rgba(43,168,216,0.2)',
                              display:'flex', alignItems:'center', justifyContent:'center',
                              marginBottom:14 }}>
                  <Icon size={18} color="#2BA8D8" strokeWidth={1.8} />
                </div>
                <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontWeight:700,
                              fontSize:'0.92rem', letterSpacing:'0.07em',
                              textTransform:'uppercase', color:'#E0EAF3', marginBottom:8 }}>
                  {title}
                </div>
                <div style={{ fontSize:'0.83rem', color:'#6A8A9F', lineHeight:1.65 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}