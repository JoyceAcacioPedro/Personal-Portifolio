import React, { useState } from 'react';
import './Blog.css';

function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 3,
      title: "AI Explained Like a Coffee Chat",
      category: "AI Fundamentals",
      date: "Feb 17, 2026",
      excerpt: "A complete journey from Alan Turing's vision in 1950 to modern Generative AI models and their real-world impact.",
      content: (
        <div className="article-body-wrapper">
          <p>Artificial Intelligence (AI) is a branch of Computer Science that focuses on creating machines capable of imitating human intelligence to perform tasks that normally require reasoning, learning, or decision-making. These systems learn from data.</p>

          <p>The idea gained prominence in <strong>1950</strong> when Alan Turing proposed the "Turing Test," questioning whether machines could think. The term "Artificial Intelligence" was officially coined in <strong>1956</strong> by John McCarthy during the Dartmouth Conference.</p>

          <h3>Three Main Types of AI</h3>
          <div className="content-section">
            <p><strong>1. Narrow AI:</strong> Specialised in a single task — translation, recommendations, facial recognition. Most AI today falls here.</p>
            <p><strong>2. Artificial General Intelligence (AGI):</strong> Would learn and apply knowledge across domains like a human. Does not yet exist in practice.</p>
            <p><strong>3. Superintelligent AI:</strong> A theoretical AI surpassing human intelligence in all aspects. Still conceptual.</p>
          </div>

          <h3>Core Areas of AI</h3>
          <ul>
            <li><strong>Machine Learning:</strong> Machines learn patterns from data without explicit programming.</li>
            <li><strong>Deep Learning:</strong> Neural networks that identify complex patterns — powers most modern AI.</li>
            <li><strong>Natural Language Processing:</strong> Enables machines to understand and generate human language.</li>
            <li><strong>Computer Vision:</strong> Machines interpret images and video.</li>
            <li><strong>Robotics:</strong> AI integrated with physical systems that learn from their environment.</li>
            <li><strong>Expert Systems:</strong> Simulate human decision-making in specific domains like medical diagnosis.</li>
          </ul>

          <h3>Generative AI</h3>
          <p>Models capable of creating new content — <strong>text, images, code, audio, and video</strong>. Most modern generative AI uses Deep Learning at its core.</p>

          <h3>Real-World Applications</h3>
          <div className="apps-grid">
            <div className="app-item"><strong>Healthcare:</strong> Analyses medical data to help identify potential diseases early.</div>
            <div className="app-item"><strong>Education:</strong> Creates personalised learning paths for each student.</div>
            <div className="app-item"><strong>Finance:</strong> Detects fraud and suspicious transactions in real time.</div>
          </div>
        </div>
      )
    }
  ];

  if (selectedArticle) {
    return (
      <div className="blog-container article-view">
        <button className="back-btn" onClick={() => setSelectedArticle(null)}>← Back to Blog</button>
        <article className="full-post">
          <header>
            <span className="article-category">{selectedArticle.category}</span>
            <h1>{selectedArticle.title}</h1>
            <p className="meta">{selectedArticle.date}</p>
          </header>
          <div className="post-body">
            {selectedArticle.content}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <header className="blog-header">
        <p className="subtitle">LATEST INSIGHTS</p>
        <h1>My <span className="highlight">Blog</span></h1>
      </header>

      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article-item" onClick={() => setSelectedArticle(article)}>
            <div className="article-info">
              <span className="article-category">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </div>
            <div className="article-arrow">→</div>
          </div>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="empty-state">
          <h3>No articles yet — coming soon.</h3>
          <div className="loading-bar"><div className="progress"></div></div>
        </div>
      )}
    </div>
  );
}

export default Blog;