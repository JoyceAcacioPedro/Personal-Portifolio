import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-paper">

        <header className="cv-header">
          <h1>Joyce Acácio Pedro</h1>
          <p className="cv-subtitle">Computer Engineering & Telecommunications Student · Full-Stack & AI Engineer</p>
          <div className="cv-contacts">
            <span>Nampula, Mozambique</span>
            <span className="dot">·</span>
            <a href="mailto:joyceacaciopedro2005@gmail.com">joyceacaciopedro2005@gmail.com</a>
            <span className="dot">·</span>
            <a href="https://github.com/JoyceAcacioPedro" target="_blank" rel="noreferrer">GitHub</a>
            <span className="dot">·</span>
            <a href="https://www.linkedin.com/in/joyceacaciopedro" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </header>

        <section className="cv-section">
          <h2 className="cv-section-title">Professional Summary</h2>
          <p>
            Computer Engineering and Telecommunications student with a strong foundation in
            <strong> Software Engineering</strong> and <strong>Applied AI</strong>.
            Focused on building scalable solutions using Python, JavaScript, and modern AI frameworks —
            from RAG pipelines to full-stack web applications.
          </p>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Work Experience</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <strong>IT & Telecommunications Intern</strong>
              <span className="cv-date">Dec 2025 – Mar 2026</span>
            </div>
            <p className="cv-detail">Nampula Airport · ADM — Aeroportos de Moçambique</p>
            <ul className="cv-item-list">
              <li>Assisted in maintenance and monitoring of network infrastructure and telecommunications systems.</li>
              <li>Provided technical support for airport-specific software and hardware.</li>
              <li>Gained hands-on experience with high-availability systems and mission-critical IT operations.</li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Education & Certifications</h2>

          <div className="cv-item">
            <div className="cv-item-header">
              <strong>Bachelor's in Computer and Telecommunications Engineering</strong>
              <span className="cv-date">2023 – Present</span>
            </div>
            <p className="cv-detail">Universidade Politécnica (ISEUNA) · Focus: Software Engineering</p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <strong>CS50P — Introduction to Programming with Python</strong>
              <span className="cv-date">Harvard University (edX)</span>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <strong>Introduction to Software Engineering</strong>
              <span className="cv-date">IBM (Coursera)</span>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <strong>Introduction to Artificial Intelligence</strong>
              <span className="cv-date">IBM (Coursera)</span>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <strong>Fundamentals of AI Agents Using RAG and LangChain</strong>
              <span className="cv-date">IBM (Coursera)</span>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <strong>Gen AI — RAG Application Development using LlamaIndex</strong>
              <span className="cv-date">Packt (Coursera)</span>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <strong>Machine Learning Introduction for Everyone</strong>
              <span className="cv-date">IBM (Coursera)</span>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Technical Skills</h2>
          <div className="cv-skills-container">
            <div className="cv-skills-column">
              <strong>Hard Skills</strong>
              <ul>
                <li>Full Stack Development — React, Django, REST API, SQL</li>
                <li>Applied AI — RAG, LlamaIndex, LangChain, Embeddings, Generative AI, PyTorch, Hugging Face, LLMs, NLP, Prompt Engineering</li>
                <li>Version Control — Git, GitHub</li>
              </ul>
            </div>
            <div className="cv-skills-column">
              <strong>Soft Skills</strong>
              <ul>
                <li>Continuous Learning</li>
                <li>Problem Solving & Logic</li>
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Creativity</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Languages</h2>
          <ul className="cv-languages">
            <li><strong>Portuguese:</strong> Native</li>
            <li><strong>English:</strong> Intermediate (B1)</li>
            <li><strong>Spanish:</strong> Basic (A1)</li>
          </ul>
        </section>

      </div>

      <div className="cv-footer-action">
        <a href="/JOYCE ACÁCIO PEDRO_ En Curiculum.docx" download className="btn-download-cv">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Resume;