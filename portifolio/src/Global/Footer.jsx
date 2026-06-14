import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© 2026 · Joyce Acácio Pedro</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/joyceacaciopedro" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/JoyceAcacioPedro" target="_blank" rel="noreferrer">GitHub</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;