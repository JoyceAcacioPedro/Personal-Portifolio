import React from 'react';
import { Link } from 'react-router-dom'; // Importação necessária para o link funcionar
import './Home.css';
import profileImg from '../assets/joyce_foto.jpeg'; 
"import profileRES from '../assets/JOYCE ACÁCIO PEDRO_ En Curiculum.docx';"

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <p className="welcome-msg">WELCOME TO MY WORLD</p>
          <h1>
            Hi, I'm <span className="name-highlight">Joyce Pedro</span>
          </h1>
          <h2 className="role-text">
            a <span className="typewriter">Full-Stack & AI Engineer.</span>
          </h2>
          <p className="description">
            Computer and Telecommunications Engineering student. 
            Specialized in <strong>Full Stack Development</strong> and <strong>AI Engineering </strong>
            building smart systems that make processes easier and more efficient.
          </p>
          
          <div className="hero-buttons">
            {/* O botão agora redireciona para a página /resume que criamos */}
            <Link to="/resume" className="btn-primary">View Portfolio</Link>
            
            {/* Link para baixar o PDF real */}
            <a href="/JOYCE ACÁCIO PEDRO_ En Curiculum.docx" download className="btn-secondary">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-bg-card">
            <img src={profileImg} alt="Joyce Pedro - Engineering Student" className="profile-photo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;