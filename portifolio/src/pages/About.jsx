import React from 'react';
import './About.css';
import aboutImg from '../assets/joyce_foto.jpeg'; 

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* Lado Esquerdo: Imagem */}
        <div className="about-image">
          <div className="image-wrapper">
            <img src={aboutImg} alt="Joyce Pedro - Software & Systems Engineer" />
          </div>
        </div>

        {/* Lado Direito: Texto */}
        <div className="about-text">
          <p className="subtitle">BIOGRAPHY</p>
          <h1>Bridging the gap between <span className="highlight">Systems & Intelligence</span></h1>
          
          <div className="description">
            <p>
              I am a <strong>Computer Science and Telecommunications Engineering</strong> student, 
              combining a deep understanding of infrastructure with a passion for <strong>Software Engineering and AI</strong>.
            </p>
           <p>
My background allows me to build <strong>intelligent applications</strong>, like <strong>RAG-based chatbots</strong>, optimized for the underlying network and hardware environment. I focus on delivering <strong>automated solutions</strong> that provide real efficiency and value.  
Whether designing <strong>Full Stack systems</strong> or creating <strong>AI-driven solutions</strong>, I bring a logical, problem-solving mindset to every challenge. My <strong>Full Stack expertise</strong> includes <strong>databases, API development, system integration, and cloud deployment</strong>, while my <strong>Applied AI skills</strong> cover <strong>RAG, LlamaIndex, LangChain, Embeddings, Generative AI, PyTorch, Hugging Face, LLMs, Natural Language Processing, and Prompt Engineering</strong>. This combination allows me to create <strong>scalable, intelligent, and user-friendly systems</strong> that anyone can use.
</p>

          </div>

          <div className="personal-info">
            <div className="info-box">
              <span>Academic Focus</span>
              <p>Engineering Student</p>
            </div>
            <div className="info-box">
              <span>Core Foundation</span>
              <p>IT & Telecoms</p>
            </div>
            <div className="info-box">
              <span>Future Focus</span>
              <p>AI & Software</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;