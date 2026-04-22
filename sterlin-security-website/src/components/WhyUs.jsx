import { CheckSquare } from 'lucide-react'
import { WHY_US, CREDENTIALS } from '../constants/data'

export default function WhyUs() {
  return (
    <section id="whyus" style={{ position:'relative',
                                  background:'linear-gradient(135deg,#0D2035 0%,#0A1828 100%)',
                                  padding:'100px 0' }}>
      <div style={{ position:'absolute', top:-40, left:0, right:0, height:80,
                    background:'#07111C',
                    clipPath:'polygon(0 0,100% 0,100% 40px,0 80px)' }} />

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px' }}>
        <div className="two-col"
             style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>

          <div>
            <div className="section-label">Our Edge</div>
            <h2 style={{ fontFamily:'Oswald,sans-serif', fontWeight:700, textTransform:'uppercase',
                         fontSize:'clamp(2rem,4vw,3rem)', lineHeight:1.05, marginBottom:36 }}>
              Why Clients Choose<br />
              <span style={{ color:'#2BA8D8' }}>Sterlin Security</span>
            </h2>
            {WHY_US.map(item => (
              <div key={item.num} style={{ display:'flex', gap:20, marginBottom:28 }}>
                <div style={{ width:36, height:36, minWidth:36,
                              background:'rgba(43,168,216,0.12)',
                              border:'1px solid rgba(43,168,216,0.3)',
                              display:'flex', alignItems:'center', justifyContent:'center',
                              color:'#2BA8D8', fontFamily:'Oswald,sans-serif',
                              fontWeight:700, fontSize:'0.85rem' }}>
                  {item.num}
                </div>
                <div>
                  <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontWeight:700,
                                fontSize:'0.98rem', letterSpacing:'0.08em',
                                textTransform:'uppercase', color:'#E0EAF3', marginBottom:4 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize:'0.88rem', color:'#6A8A9F', lineHeight:1.65 }}>
                    {item.body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bracket-box">
              <div style={{ fontFamily:'Oswald,sans-serif', fontSize:'4rem', color:'#2BA8D8',
                            opacity:0.15, position:'absolute', top:16, right:24, lineHeight:1 }}>
                "
              </div>
              <p style={{ fontFamily:'Barlow,sans-serif', fontSize:'1.1rem', fontStyle:'italic',
                          color:'#B0C8DA', lineHeight:1.8, marginBottom:28 }}>
                "Our vision is to be a long-term strategic partner to our customers, offering
                integrated security solutions that empower businesses and protect communities."
              </p>
              <div style={{ borderTop:'1px solid rgba(43,168,216,0.2)', paddingTop:20 }}>
                <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontWeight:700,
                              letterSpacing:'0.1em', textTransform:'uppercase', color:'#E0EAF3' }}>
                  Sterlin Security Leadership
                </div>
                <div style={{ fontSize:'0.75rem', color:'#4A7A9B', letterSpacing:'0.12em',
                              textTransform:'uppercase', marginTop:3 }}>
                  Act 56 of 2001 Compliant
                </div>
              </div>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginTop:18 }}>
              {CREDENTIALS.map(c => (
                <div key={c} style={{ background:'rgba(43,168,216,0.08)',
                                      border:'1px solid rgba(43,168,216,0.2)',
                                      padding:'12px 16px', display:'flex',
                                      alignItems:'center', gap:8,
                                      fontFamily:'Barlow Condensed,sans-serif',
                                      fontSize:'0.78rem', letterSpacing:'0.1em',
                                      textTransform:'uppercase', color:'#7AC4DC' }}>
                  <CheckSquare size={14} color="#2BA8D8" strokeWidth={2} />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}