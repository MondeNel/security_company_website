import { Phone, Mail, Printer } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '../constants/data'

const CONTACT_ITEMS = [
  { Icon: Phone,   label:'Tel',    value: CONTACT.phone,  href: `tel:${CONTACT.phone}`    },
  { Icon: Phone,   label:'Office', value: CONTACT.office, href: `tel:${CONTACT.office}`   },
  { Icon: Printer, label:'Fax',    value: CONTACT.fax,    href: null                      },
  { Icon: Mail,    label:'Email',  value: CONTACT.email,  href: `mailto:${CONTACT.email}` },
]

export default function Footer() {
  return (
    <footer style={{ background:'#020810', borderTop:'1px solid rgba(43,168,216,0.15)', padding:'64px 0 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px' }}>
        <div className="footer-grid"
             style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:64, marginBottom:56 }}>

          {/* Brand with Logo Image */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
              <img 
                src="/sterlin-security.jpg" 
                alt="Sterlin Security Services Logo" 
                style={{
                  height: 48,
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.05)',
                  padding: 4
                }}
              />
              <div style={{ fontFamily:'Oswald,sans-serif', fontWeight:700, fontSize:'1.3rem',
                            color:'#fff', letterSpacing:'0.04em', textTransform:'uppercase' }}>
                Sterlin <span style={{ color:'#2BA8D8' }}>Security</span>
              </div>
            </div>
            <p style={{ color:'#4A7A9B', fontSize:'0.88rem', lineHeight:1.75,
                        maxWidth:320, marginBottom:22 }}>
              A dynamic BEE company providing integrated, innovative, and high-quality
              security services across South Africa since 2014.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {['PSIRA Registered','BEE Level 1 Contributor'].map(b => (
                <span key={b} className="cred-badge" style={{ alignSelf:'flex-start' }}>✓ {b}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontWeight:700,
                          letterSpacing:'0.18em', fontSize:'0.76rem',
                          textTransform:'uppercase', color:'#2BA8D8', marginBottom:20 }}>
              Quick Links
            </div>
            {NAV_LINKS.map(l => (
              <div key={l.label} style={{ marginBottom:10 }}>
                <a href={l.href}
                   style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:'0.88rem',
                             letterSpacing:'0.12em', textTransform:'uppercase',
                             color:'#6A8A9F', textDecoration:'none', transition:'color 0.2s' }}
                   onMouseEnter={e => e.target.style.color='#2BA8D8'}
                   onMouseLeave={e => e.target.style.color='#6A8A9F'}>
                  {l.label}
                </a>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontWeight:700,
                          letterSpacing:'0.18em', fontSize:'0.76rem',
                          textTransform:'uppercase', color:'#2BA8D8', marginBottom:20 }}>
              Contact
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {CONTACT_ITEMS.map(c => (
                <div key={c.label} style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <c.Icon size={13} color="#2BA8D8" strokeWidth={2} />
                  <div>
                    <span style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:'0.68rem',
                                   letterSpacing:'0.15em', textTransform:'uppercase', color:'#2BA8D8' }}>
                      {c.label}:{' '}
                    </span>
                    {c.href
                      ? <a href={c.href}
                           style={{ fontSize:'0.86rem', color:'#6A8A9F', textDecoration:'none' }}
                           onMouseEnter={e => e.target.style.color='#2BA8D8'}
                           onMouseLeave={e => e.target.style.color='#6A8A9F'}>
                          {c.value}
                        </a>
                      : <span style={{ fontSize:'0.86rem', color:'#6A8A9F' }}>{c.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:28,
                      display:'flex', justifyContent:'space-between',
                      alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <div style={{ fontSize:'0.78rem', color:'#2A4A5E' }}>
            © {new Date().getFullYear()} Sterlin Security Services (Pty) Ltd.
            Formerly Masicebise (MBS) Protection Services. All rights reserved.
          </div>
          <div style={{ fontSize:'0.73rem', color:'#2A4A5E', letterSpacing:'0.08em' }}>
            A proud subsidiary of M&amp;D Holdings (Pty) Ltd
          </div>
        </div>
      </div>
    </footer>
  )
}