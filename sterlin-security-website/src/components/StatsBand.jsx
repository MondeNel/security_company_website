import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { STATS } from '../constants/data'

function Stat({ value, suffix='', prefix='', label }) {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.4 })
  return (
    <div ref={ref} style={{ textAlign:'center' }}>
      <div style={{ fontFamily:'Oswald,sans-serif', fontSize:'2.8rem',
                    fontWeight:700, color:'#2BA8D8', lineHeight:1 }}>
        {prefix}
        {inView ? <CountUp end={value} duration={1.6} separator="," /> : 0}
        {suffix}
      </div>
      <div style={{ fontSize:'0.75rem', letterSpacing:'0.18em', color:'#9BAFC0',
                    marginTop:6, textTransform:'uppercase',
                    fontFamily:'Barlow Condensed,sans-serif' }}>
        {label}
      </div>
    </div>
  )
}

export default function StatsBand() {
  return (
    <div style={{ background:'linear-gradient(90deg,#0A1828,#0D2035,#0A1828)',
                  borderTop:'1px solid rgba(43,168,216,0.2)',
                  borderBottom:'1px solid rgba(43,168,216,0.2)',
                  padding:'56px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px',
                    display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:48 }}>
        {STATS.map(s => <Stat key={s.label} {...s} />)}
      </div>
    </div>
  )
}