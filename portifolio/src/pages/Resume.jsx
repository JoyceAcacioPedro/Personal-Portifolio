import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-paper">
        {/* Cabeçalho permanece igual */}
        <header className="cv-header">
          <h1>Joyce Acácio Pedro</h1>
          <p className="cv-subtitle">Computer Engineering & Telecommunications Student | Full-Stack & AI Engineer </p>
          <div className="cv-contacts">
            <span>Nampula, Mozambique</span> |  
            <span> Joyceacaciopedro2005@gmail.com</span>
          </div>
        </header>

        {/* Professional Summary atualizado */}
        <section className="cv-section">
          <h2 className="cv-section-title">Professional Summary</h2>
          <p>
            Computer Engineering and Telecommunications student with a strong foundation in <strong>Software Engineering</strong> and <strong>AI</strong>.
            Focused on building scalable solutions using Python, JavaScript, and modern AI frameworks.
          </p>
        </section>

        {/* Secção: Education & Certifications */}
        <section className="cv-section">
          <h2 className="cv-section-title">Education & Certifications</h2>
          
          {/* Licenciatura */}
          <div className="cv-item">
            <div className="cv-item-header">
              <strong>Bachelor's of Computer and Telecommunications Engineering</strong>
              <span>2023 – Present</span>
            </div>
            <p>Universidade Politecnica (ISEUNA) | Focus: Software Engineering</p>
          </div>

          {/* Cursos Extra - Ouro do seu CV */}
          <div className="cv-item">
            <div className="cv-item-header">
              <strong>CS50P - Introduction to Programming with Python</strong>
              <span>Harvard University (edX)</span>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <strong> Introduction Software Engineering</strong>
              <span>IBM (Coursera)</span>
            </div>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <strong>Introduction to Artificial Intelligence</strong>
              <span>IBM (Coursera)</span>
            </div>
          </div>
           <div className="cv-item">
    <div className="cv-item-header">
      <strong>Fundamentals of AI Agents Using RAG and LangChain</strong>
      <span>IBM (Coursera)</span>
    </div>
  </div>

  <div className="cv-item">
    <div className="cv-item-header">
      <strong>Gen AI – RAG Application Development using LlamaIndex</strong>
      <span>Packt (Coursera)</span>
    </div>
  </div>

  <div className="cv-item">
    <div className="cv-item-header">
      <strong>Machine Learning Introduction for Everyone</strong>
      <span>IBM (Coursera)</span>
    </div>
  </div>
        </section>

        {/* Secção: Technical Skills (Mantendo a estrutura de lista) */}
        <section className="cv-section">
          <h2 className="cv-section-title">Technical Skills</h2>
          <div className="cv-skills-container">
            <div className="cv-skills-column">
              <strong>Hard Skills:</strong>
              <ul>
                <li>Full Stack Development (React, Django, Rest API, SQL)</li>
                <li> Aplied AI (AI, RAG, LlamaIndex, LangChain, Embeddings, Generative AI, 
          PyTorch, Hugging Face, LLMs, Nlp, Prompt Engineering)</li>
                <li>Version Control(GIT, GitHub)</li>
              </ul>
            </div>
            <div className="cv-skills-column">
              <strong>Soft Skills:</strong>
              <ul>
                <li>Continuous Learning </li>
                <li>Problem Solving & Logic</li>
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Creativityy</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Adiciona esta seção entre o Professional Summary e a Education */}

<section className="cv-section">
  <h2 className="cv-section-title">Work Experience</h2>
  
  <div className="cv-item">
    <div className="cv-item-header">
      <strong>IT & Telecommunications Intern</strong>
      <span> Dec 2025 –  Mar 2026</span>
    </div>
    <p>Nampula Airport (ADM - Aeroportos de Moçambique)</p>
    <ul className="cv-item-list">
<li> Assisted in maintenance and monitoring of network infrastructure and telecommunications systems.</li>
<li> Provided technical support for airport-specific software and hardware. </li>
<li>Gained hands-on experience with high-availability systems and mission-critical IT operations.</li>

    </ul>
  </div>
</section>

        {/* Secção: Languages permanece igual */}
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
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default Resume;