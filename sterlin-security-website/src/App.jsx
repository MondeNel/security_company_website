import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Ticker         from './components/Ticker'
import StatsBand      from './components/StatsBand'
import Services       from './components/Services'
import About          from './components/About'
import WhyUs          from './components/WhyUs'
import Training       from './components/Training'
import Founder        from './components/Founder'  
import CTA            from './components/CTA'
import Offices        from './components/Offices'
import Footer         from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <StatsBand />
      <Services />
      <About />
      <WhyUs />
      <Training />
      <Founder />       
      <CTA />
      <Offices />
      <Footer />
      <WhatsAppWidget />
    </>
  )
}