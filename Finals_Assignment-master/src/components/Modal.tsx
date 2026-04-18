import { ReactNode } from 'react'
import '../styles/Modal.css'

interface ModalProps {
  isOpen: boolean
  title: string
  message: string
  children?: ReactNode
  onClose: () => void
}

export default function Modal({ isOpen, title, message, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          <p className="modal-message">{message}</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  )
}
