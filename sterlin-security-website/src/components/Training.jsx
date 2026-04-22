import * as Icons from 'lucide-react'
import { TRAINING, VALUES } from '../constants/data'

function TrainingCard({ icon, label }) {
  const Icon = Icons[icon] ?? Icons.BookOpen
  return (
    <div style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)',
                  padding:'26px 22px', display:'flex', alignItems:'center', gap:16,
                  transition:'border-color 0.25s, background 0.25s', cursor:'default' }}
         onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(43,168,216,0.35)'; e.currentTarget.style.background='rgba(43,168,216,0.07)' }}
         onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.background='rgba(255,255,255,0.02)' }}>
      <div style={{ width:42, height:42, minWidth:42, background:'rgba(43,168,216,0.1)',
                    border:'1px solid rgba(43,168,216,0.2)',
                    display:'flex', alignItems:'center', justifyContent:'center' }}>
        <Icon size={20} color="#2BA8D8" strokeWidth={1.8} />
      </div>
      <span style={{ fontFamily:'Barlow Condensed,sans-serif', fontWeight:600,
                     fontSize:'0.92rem', letterSpacing:'0.07em',
                     textTransform:'uppercase', color:'#C0D8E8' }}>
        {label}
      </span>
    </div>
  )
}

export default function Training() {
  return (
    <section id="training" style={{ background:'#050C14', padding:'100px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px' }}>
        <div className="section-label">Expertise & Credentials</div>
        <h2 style={{ fontFamily:'Oswald,sans-serif', fontWeight:700, textTransform:'uppercase',
                     fontSize:'clamp(2rem,4vw,3rem)', lineHeight:1.05, marginBottom:52 }}>
          Training &<br /><span style={{ color:'#2BA8D8' }}>Accreditation</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:20 }}>
          {TRAINING.map(t => <TrainingCard key={t.label} {...t} />)}
        </div>
        <div style={{ marginTop:64, borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:48 }}>
          <div className="section-label">Our Core Values</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12, marginTop:20 }}>
            {VALUES.map(v => <span key={v} className="value-pill">{v}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}