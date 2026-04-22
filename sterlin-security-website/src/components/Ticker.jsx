import { Diamond } from 'lucide-react'
import { TICKER_ITEMS } from '../constants/data'

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {items.map((t, i) => (
          <span key={i} className="ticker-item">
            <Diamond size={7} style={{ display:'inline', verticalAlign:'middle', marginRight:7 }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}