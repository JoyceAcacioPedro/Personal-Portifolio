import React from 'react';
import './Skills.css';

function Skills() {
  const skillGroups = [
    {
      number: '01',
      category: 'AI Engineering',
      label: 'Primary Expertise',
      description: 'Building intelligent systems with modern AI frameworks — from RAG pipelines to production-ready LLM applications.',
      featured: true,
      tags: ['RAG', 'LlamaIndex', 'LangChain', 'Embeddings', 'Generative AI', 'PyTorch', 'Hugging Face', 'LLMs', 'NLP', 'Prompt Engineering']
    },
    {
      number: '02',
      category: 'Full Stack Development',
      label: 'Core Stack',
      description: 'End-to-end development from database design to responsive frontends, with clean APIs connecting both sides.',
      tags: ['Python', 'Django', 'REST API', 'React', 'JavaScript', 'HTML', 'CSS', 'SQL', 'PostgreSQL', 'Git', 'Authentication', 'Deployment']
    },
    {
      number: '03',
      category: 'IT Infrastructure',
      label: 'Technical Foundation',
      description: 'Hands-on experience with network systems and hardware from real airport IT operations.',
      tags: ['TCP/IP', 'Networking', 'Technical Support', 'Hardware Maintenance', 'High-Availability Systems']
    },
    {
      number: '04',
      category: 'Telecommunications',
      label: 'Academic Specialisation',
      description: 'Core telecom engineering concepts studied at ISEUNA, bridging digital systems and signal infrastructure.',
      tags: ['Network Protocols', 'Signal Processing', 'Digital Communications', 'Telecom Engineering']
    },
    {
      number: '05',
      category: 'Soft Skills',
      label: 'How I Work',
      description: 'The habits and mindset I bring to every project and team.',
      tags: ['Problem Solving', 'Self-Directed Learning', 'Clear Communication', 'Adaptability', 'Attention to Detail', 'Time Management']
    }
  ];

  return (
    <div className="skills-container">
      <header className="skills-header">
        <p className="subtitle">MY EXPERTISE</p>
        <h2>Professional <span className="highlight">Skills</span></h2>
        <p className="skills-intro">A structured view of what I know and how I apply it.</p>
      </header>

      <div className="skills-list">
        {skillGroups.map((group) => (
          <div key={group.number} className={`skill-row ${group.featured ? 'featured' : ''}`}>
            <div className="skill-row-left">
              <span className="skill-number">{group.number}</span>
              <div className="skill-meta">
                <span className="skill-label">{group.label}</span>
                <h3>{group.category}</h3>
                <p className="skill-desc">{group.description}</p>
              </div>
            </div>
            <div className="skill-tags">
              {group.tags.map((tag, i) => (
                <span key={i} className="skill-pill">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;