import '../styles/Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">&copy; {year} Gerry Vilda. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="https://github.com/gerryvilda" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </footer>
  )
}
