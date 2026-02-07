import React from 'react';
import './Skills.css';

function Skills() {
  const softSkills = [
    "Problem-solving mindset",
    "Self-taught learner",
    "Clear communication",
    "Adaptability",
    "Attention to detail",
    "Time management"
  ];

  return (
    <div className="skills-container">
      <header className="skills-header">
        <p className="subtitle">MY EXPERTISE</p>
        <h2>Professional <span className="highlight">Skills</span></h2>
      </header>

      <div className="skills-grid">
        {/* Card 1: AI Engineering - O SEU MAIOR DESTAQUE */}
        <div className="skill-card featured">
          <div className="icon-box">🤖</div>
          <h3>AI Engineering</h3>
            <h3>AI Engineering</h3>
           <p>
    RAG (Retrieval-Augmented Generation), LlamaIndex, LangChain, Embeddings, Generative AI, 
    PyTorch, Hugging Face, LLMs, Large Language Modeling, Natural Language Processing (NLP), 
    Prompt Engineering.
  </p>
        </div>

        {/* Card 2: Full Stack Development */}
        <div className="skill-card">
          <div className="icon-box">💻</div>
          <h3>Full Stack Development</h3>
          <p>  HTML, CSS, JavaScript, Python, React, Django, REST APIs, Database Design, 
    SQL Databases, Authentication & Authorization, Backend Logic, 
    Frontend State Management, System Integration, Version Control (Git), 
    Testing & Debugging, Deployment, Cloud-Based Applications</p>
        </div>

        {/* Card 3: IT Infrastructure & Electronics - A SUA BASE TÉCNICA */}
        <div className="skill-card">
          <div className="icon-box">🔧</div>
          <h3>IT Infrastructure</h3>
          <p>Networking (TCP/IP), Electronics, Technical Support, and Hardware Maintenance.</p>
        </div>

        {/* Card 3: Telecommunications - TUA ENGENHARIA NO ISEUNA */}
        <div className="skill-card">
          <div className="icon-box">📡</div>
          <h3>Telecommunications</h3>
          <p>Fundamentals of Telecom Engineering and Network protocols. [cite: 12, 16]</p>
        </div>

        {/* Card 4: Soft Skills */}
        <div className="skill-card">
          <div className="icon-box">🧠</div>
          <h3>Soft Skills</h3>
          <ul className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;