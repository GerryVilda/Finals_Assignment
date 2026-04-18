import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="page home-page">
      <Header
        title="Welcome to Gerry Vilda's Portfolio"
        subtitle="Full-Stack Developer | Building modern, scalable web solutions"
      />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  )
}
