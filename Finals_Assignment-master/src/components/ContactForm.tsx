import { useState } from 'react'
import Modal from './Modal'
import '../styles/ContactForm.css'

interface FormData {
  render_form: string
  message: string
}

interface FormErrors {
  render_form?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    render_form: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [showModal, setShowModal] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.render_form.trim()) {
      newErrors.render_form = 'Sender name is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [id]: undefined
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      setSubmittedData(formData)
      setShowModal(true)
      // Reset form after successful submission
      setFormData({
        render_form: '',
        message: ''
      })
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const successMessage = submittedData
    ? `Message from ${submittedData.render_form}:\n\n${submittedData.message}`
    : ''

  return (
    <>
      <section className="contact-form-section">
        <h2 className="contact-form-heading">Send a Message</h2>
        <p className="contact-info">This is my Gmail: gerrycv10@gmail.com</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="render_form" className="form-label">Sender Name</label>
            <input
              id="render_form"
              type="text"
              className={`form-input ${errors.render_form ? 'form-input--error' : ''}`}
              placeholder="Your name"
              value={formData.render_form}
              onChange={handleChange}
            />
            {errors.render_form && (
              <span className="form-error">{errors.render_form}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              className={`form-textarea ${errors.message ? 'form-textarea--error' : ''}`}
              placeholder="Your message..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className="form-error">{errors.message}</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>

      <Modal
        isOpen={showModal}
        title="Message Sent Successfully!"
        message={successMessage}
        onClose={handleCloseModal}
      />
    </>
  )
}
