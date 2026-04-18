import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <div className="page contact-page">
      <Header
        title="Get In Touch"
        subtitle="I'd love to hear from you! Reach out with your questions or project ideas."
      />
      <ContactForm />
      <Footer />
    </div>
  )
}
