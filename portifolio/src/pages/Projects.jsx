import React from 'react';
import './Projects.css';

function Projects() {
  const aiProjects = [
    {
      title: "My Career — AI Job Advisor",
      category: "Local AI & RAG",
      description: "A 100% private career assistant using local LLMs (Llama 3.2) to analyse resumes and fetch real-time job openings via Adzuna API.",
      tags: ["LlamaIndex", "GPT4All", "Streamlit", "Python", "Local LLM"],
      githubLink: "https://github.com/JoyceAcacioPedro/My-Career.git"
    },
    {
      title: "Travel Guide",
      category: "AI Agent & Prompt Engineering",
      description: "A travel itinerary generator using LangChain (LCEL) and local Llama 3.2, with automated logic flows to create personalised plans.",
      tags: ["LangChain", "RAG", "Llama 3.2", "GPT4All", "Python"],
      githubLink: "https://github.com/JoyceAcacioPedro/Travel-Guide.git"
    },
  ];

  const webAiIntegration = [
    {
      title: "RevisAI",
      category: "Applied AI & Full Stack",
      description: "Full-stack learning platform that turns raw study notes into structured revision plans. AI reads the content, generates summaries, flashcards and quizzes, and schedules them using spaced repetition — so students never have to decide what to study next.",
      tags: ["Django", "React", "LLaMA 3.3 70B via Groq API"],
      githubLink: "https://github.com/JoyceAcacioPedro/RevisAI.git",
      featured: true
    },
  ];

  const fullStackProjects = [
    {
      title: "DoneWithIt — Marketplace",
      category: "Web Full Stack",
      description: "A C2C marketplace platform with a modular Django backend and React frontend, implementing secure RESTful endpoints.",
      tags: ["Django", "React", "REST API", "PostgreSQL", "In Progress"],
      githubLink: "https://github.com/JoyceAcacioPedro/DoneWithIt.git"
    },
  ];

  const renderProjectGrid = (projects) => (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
          <div className="card-top">
            <span className="project-category">{project.category}</span>
            {project.featured && <span className="featured-badge">Featured</span>}
          </div>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className={`tag ${tag === 'In Progress' ? 'tag-progress' : ''}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="project-actions">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="view-project">
              View on GitHub
              <span className="arrow">→</span>
            </a>
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
        <p className="header-desc">Systems I've built — from AI pipelines to full-stack applications.</p>
      </header>

      <section className="project-area">
        <div className="area-label">
          <span className="area-number">01</span>
          <div>
            <h2 className="area-title">Applied AI</h2>
            <p className="area-description">Integrating AI into web environments for real-world impact.</p>
          </div>
        </div>
        {renderProjectGrid(webAiIntegration)}
      </section>

      <section className="project-area">
        <div className="area-label">
          <span className="area-number">02</span>
          <div>
            <h2 className="area-title">AI Engineering</h2>
            <p className="area-description">RAG systems, autonomous agents, and prompt engineering.</p>
          </div>
        </div>
        {renderProjectGrid(aiProjects)}
      </section>

      <section className="project-area">
        <div className="area-label">
          <span className="area-number">03</span>
          <div>
            <h2 className="area-title">Web Full Stack</h2>
            <p className="area-description">Solid foundations, database management, and responsive design.</p>
          </div>
        </div>
        {renderProjectGrid(fullStackProjects)}
      </section>
    </div>
  );
}

export default Projects;