import { MapPin } from 'lucide-react'
import { OFFICES } from '../constants/data'

export default function Offices() {
  return (
    <section style={{ background:'#07111C', padding:'80px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px' }}>
        <div className="section-label">National Presence</div>
        <h2 style={{ fontFamily:'Oswald,sans-serif', fontWeight:700, textTransform:'uppercase',
                     fontSize:'clamp(2rem,4vw,3rem)', lineHeight:1.05, marginBottom:48 }}>
          Our <span style={{ color:'#2BA8D8' }}>Offices</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:20 }}>
          {OFFICES.map(o => (
            <div key={o.city} className="office-card">
              <div style={{ display:'flex', alignItems:'center', gap:8,
                            fontFamily:'Barlow Condensed,sans-serif', fontWeight:700,
                            fontSize:'1rem', letterSpacing:'0.1em', textTransform:'uppercase',
                            color:'#2BA8D8', marginBottom:8 }}>
                <MapPin size={15} strokeWidth={2} /> {o.city}
              </div>
              <div style={{ fontSize:'0.87rem', color:'#6A8A9F', lineHeight:1.65 }}>
                {o.address}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}