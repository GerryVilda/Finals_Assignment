import Header from '../components/Header'
import BioContent from '../components/BioContent'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
import '../styles/About.css'

export default function About() {
  return (
    <div className="page about-page">
      <Header
        title="About Gerry Vilda"
        subtitle="Passionate about creating efficient, user-centric web applications"
      />
      <BioContent />
      <SkillsSection />
      <Footer />
    </div>
  )
}
