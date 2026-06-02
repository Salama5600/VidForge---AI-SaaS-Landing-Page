import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import DemoDashboard from '../components/DemoDashboard'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <DemoDashboard />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
