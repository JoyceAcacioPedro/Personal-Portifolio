import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">

        <div className="contact-info">
          <p className="subtitle">GET IN TOUCH</p>
          <h2>Let's <span className="highlight">Talk</span></h2>
          <p className="contact-intro">Feel free to reach out for job opportunities, collaborations, or just to say hi.</p>

          <div className="info-items">
            <div className="info-item">
              <span className="info-label">Direct Email</span>
              <a href="mailto:joyceacaciopedro2005@gmail.com" className="info-value">
                joyceacaciopedro2005@gmail.com
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">Social Media</span>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/joyceacaciopedro" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/JoyceAcacioPedro" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form action="https://formsubmit.co/joyceacaciopedro2005@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New message from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>

            <div className="input-group">
              <label>Your Email Address</label>
              <input type="email" name="email" placeholder="example@mail.com" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="How can I help you?" required></textarea>
            </div>

            <button type="submit" className="btn-send">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;