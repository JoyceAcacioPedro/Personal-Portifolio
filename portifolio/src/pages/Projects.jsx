import React from 'react';
import './Projects.css';

function Projects() {
  const aiProjects = [
    {
      title: "My Career - AI Job Advisor",
      category: "Local AI & RAG",
      description: "A 100% private career assistant that uses local LLMs (Llama 3.2) to analyze resumes and fetch real-time job openings via Adzuna API.",
      tags: ["LlamaIndex", "GPT4All", "Streamlit", "Python", "Local LLM"],
      githubLink: "https://github.com/JoyceAcacioPedro/My-Career.git"
    },
    {
      title: "Travel Guide",
      category: "AI Agent & Prompt Engineering",
      description: "A travel itinerary generator using LangChain (LCEL) and local Llama 3.2. It features automated logic flows to create personalized plans.",
      tags: ["LangChain", "RAG", "Llama 3.2", "GPT4All", "Python"],
      githubLink: "https://github.com/JoyceAcacioPedro/Travel-Guide.git"
    },
  ];

  const webAiIntegration = [
    {
      title: "RevisAI",
      category: "Applied AI & Web Full Stack",
      description: "Currently under development, this tool integrates AI to automate and optimize student study schedules and content review cycles.",
      tags: ["Python", "Django", "React", "SQL", "LangChain", "In Progress"],
      githubLink: "https://github.com/JoyceAcacioPedro/RevisAI.git"
    },
  ];

  const fullStackProjects = [
    {
      title: "DoneWithIt - Marketplace",
      category: "Web Full Stack",
      description: "A C2C marketplace platform built with a modular Django backend and React frontend, implementing secure RESTful endpoints.",
      tags: ["Django", "Python", "React", "REST API", "PostgreSQL", "In Progress"],
      githubLink: "https://github.com/JoyceAcacioPedro/DoneWithIt.git"
    },
    
  ];

  const renderProjectGrid = (projects) => (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-content">
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            {/* Action Buttons */}
            <div className="project-actions">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-project"
              >
                View Code on GitHub →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="projects-page">
      <header className="projects-header">
        <p className="subtitle">PORTFOLIO</p>
        <h1>My <span className="highlight">Projects</span></h1>
      </header>

      <section className="project-area">
        <h2 className="area-title">Applied AI</h2>
        <p className="area-description">Integrating AI into web environments for real-world impact.</p>
        {renderProjectGrid(webAiIntegration)}
      </section>

      <section className="project-area">
        <h2 className="area-title">AI Engineering</h2>
        <p className="area-description">Advanced RAG systems, autonomous agents, and prompt engineering.</p>
        {renderProjectGrid(aiProjects)}
      </section>

      <section className="project-area">
        <h2 className="area-title">Web Full Stack</h2>
        <p className="area-description">Solid software foundations, database management, and responsive design.</p>
        {renderProjectGrid(fullStackProjects)}
      </section>
    </div>
  );
}

export default Projects;