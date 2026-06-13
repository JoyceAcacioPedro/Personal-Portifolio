import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">

        <div className="hero-image-container">
          <div className="image-bg-card">
            <img
              src="/Joyce_foto.jpeg"
              alt="Joyce Pedro — Full-Stack & AI Engineer"
              className="profile-photo"
            />
          </div>
        </div>

        <div className="hero-text">
          <p className="welcome-msg">AI Engineer & Full-Stack Developer</p>
          <h1>
            Hi, I'm <span className="name-highlight">Joyce Pedro</span>
          </h1>
          <h2 className="role-text">
            I build <span className="role-accent">intelligent systems</span><br />
            that ship to production.
          </h2>
          <p className="description">
            Computer & Telecommunications Engineering student at Universidade Politécnica,
            Nampula. Specialised in Full-Stack development and AI Engineering —
            building smart systems that make processes faster and more efficient.
          </p>

          <div className="tech-pills">
            {['Django', 'React', 'LangChain', 'RAG', 'PostgreSQL'].map(tech => (
              <span key={tech} className="pill">{tech}</span>
            ))}
          </div>

          <div className="hero-buttons">
            <Link to="/resume" className="btn-primary">View Portfolio</Link>
            <a href="/JOYCE ACÁCIO PEDRO_ En Curiculum.docx" download className="btn-secondary">
              Download CV
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;