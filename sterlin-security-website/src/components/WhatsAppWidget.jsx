import { useState } from 'react'
import { X, Send } from 'lucide-react'
import { CONTACT } from '../constants/data'

const WaIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const QUICK_REPLIES = [
  'Request a Security Assessment',
  'Armed Response Enquiry',
  'CCTV & Monitoring Info',
  'Get a Quote',
]

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const [msg,  setMsg]  = useState('')
  const [sent, setSent] = useState(false)

  const waBase = `https://wa.me/${CONTACT.whatsapp}?text=`

  const handleSend = () => {
    const text = msg.trim() || CONTACT.whatsappMessage
    window.open(`${waBase}${encodeURIComponent(text)}`, '_blank')
    setSent(true)
    setTimeout(() => { setSent(false); setMsg(''); setOpen(false) }, 1800)
  }

  return (
    <>
      {/* Widget panel */}
      {open && (
        <div className="wa-widget">
          {/* Header */}
          <div className="wa-header">
            <div className="wa-avatar"><WaIcon size={24} /></div>
            <div style={{ flex:1 }}>
              <div style={{ color:'#fff', fontFamily:'Barlow Condensed,sans-serif',
                            fontWeight:700, fontSize:'1rem', letterSpacing:'0.05em' }}>
                Sterlin Security
              </div>
              <div style={{ color:'rgba(255,255,255,0.65)', fontSize:'0.74rem',
                            display:'flex', alignItems:'center', gap:5, marginTop:2 }}>
                <span style={{ width:8, height:8, borderRadius:'50%',
                               background:'#25D366', display:'inline-block' }} />
                Typically replies within minutes
              </div>
            </div>
            <button onClick={() => setOpen(false)}
                    style={{ background:'none', border:'none', cursor:'pointer',
                             color:'rgba(255,255,255,0.7)', padding:4 }}>
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="wa-body">
            <div className="wa-bubble">
              👋 Hi there! Welcome to <strong>Sterlin Security Services</strong>.<br /><br />
              How can we help you today? Send us a message and our team will respond shortly.
            </div>
            <div className="wa-time">Sterlin Security · now</div>

            {!sent && (
              <div style={{ marginTop:12, display:'flex', flexWrap:'wrap', gap:8 }}>
                {QUICK_REPLIES.map(q => (
                  <button key={q} onClick={() => setMsg(q)}
                          style={{ background: msg===q ? '#25D366' : '#fff',
                                   color:      msg===q ? '#fff'    : '#075E54',
                                   border:'1px solid #25D366', borderRadius:16,
                                   padding:'6px 12px', fontSize:'0.76rem',
                                   cursor:'pointer', fontFamily:'Barlow,sans-serif',
                                   fontWeight:500, transition:'background 0.2s, color 0.2s' }}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            {sent && (
              <div style={{ textAlign:'center', padding:'12px 0',
                            color:'#075E54', fontWeight:600, fontSize:'0.9rem' }}>
                ✓ Opening WhatsApp…
              </div>
            )}
          </div>

          {/* Input */}
          {!sent && (
            <div className="wa-footer">
              <input className="wa-input" type="text"
                     placeholder="Type a message…"
                     value={msg} onChange={e => setMsg(e.target.value)}
                     onKeyDown={e => e.key==='Enter' && handleSend()} />
              <button className="wa-send" onClick={handleSend}>
                <Send size={16} color="#fff" strokeWidth={2.5} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Floating button */}
      <a href="#" className="whatsapp-float"
         onClick={e => { e.preventDefault(); setOpen(v => !v) }}
         aria-label="Chat on WhatsApp">
        <div className="whatsapp-pulse" />
        {open ? <X size={26} color="#fff" /> : <WaIcon size={28} />}
      </a>
    </>
  )
}