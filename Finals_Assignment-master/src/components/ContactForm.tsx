import '../styles/ContactForm.css'

export default function ContactForm() {
  return (
    <section className="contact-form-section">
      <h2 className="contact-form-heading">Send a Message</h2>
      <p className="contact-info">This is my Gmail: gerrycv10@gmail.com</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="sender" className="form-label">Sender Name</label>
          <input
            id="sender"
            type="text"
            className="form-input"
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            className="form-textarea"
            placeholder="Your message..."
            rows={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </section>
  )
}
