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
            
            <p>The idea gained prominence in <strong>1950</strong> when Alan Turing proposed the “Turing Test,” questioning whether machines could think. The term “Artificial Intelligence” was officially used in <strong>1956</strong> by John McCarthy during the Dartmouth Conference.</p>

            <h3>Three Main Types of Artificial Intelligence</h3>
            <div className="content-section">
                <p><strong>1. Narrow AI (Limited AI):</strong> Specialized in performing a single specific task, such as automatic translation, movie recommendations, or facial recognition. Most AI systems today fall into this category.</p>
                <p><strong>2. Artificial General Intelligence (AGI):</strong> Would be capable of learning and applying knowledge across different areas, similar to a human being. This type does not yet exist in practice.</p>
                <p><strong>3. Superintelligent AI (Super AI):</strong> A theoretical AI that would surpass human intelligence in all aspects, potentially even possessing self-awareness.</p>
            </div>

            <h3>Areas of Artificial Intelligence</h3>
            <ul>
                <li><strong>Machine Learning (ML):</strong> A field of AI that enables machines to learn patterns from data without being explicitly programmed for each task.</li>
                <li><strong>Deep Learning (DL):</strong> An advanced Machine Learning technique that uses artificial neural networks inspired by the human brain to identify complex patterns.</li>
                <li><strong>Natural Language Processing (NLP):</strong> Enables machines to understand and generate human language, allowing for chatbots and automatic translators.</li>
                <li><strong>Computer Vision:</strong> Allows machines to interpret images and videos, acting as the “eyes” of AI.</li>
                <li><strong>Robotics:</strong> Integrates AI with robotic systems, enabling robots to learn from their environment.</li>
                <li><strong>Expert Systems:</strong> Systems designed to simulate human decision-making in specific domains like medical diagnosis.</li>
            </ul>

            <h3>Generative AI</h3>
            <p>A category of models capable of creating new content, such as <strong>Text, Images, Code, Audio, and Video</strong>. Today, most modern generative AI models use Deep Learning.</p>

            <h3>Applications of AI in the World</h3>
            <div className="apps-grid">
                <div className="app-item">
                    <strong>Healthcare:</strong> Can analyze large volumes of medical data and help identify potential diseases.
                </div>
                <div className="app-item">
                    <strong>Education:</strong> Can create personalized learning systems for each student.
                </div>
                <div className="app-item">
                    <strong>Finance:</strong> Can detect fraud or suspicious transactions quickly and efficiently.
                </div>
            </div>
        </div>
    )
},
       // {
       //     id: 2,
       //     title: "My Internship at Nampula Airport",
       //     category: "Career",
       //     date: "Jan 10, 2026",
       //     excerpt: "A reflection on technology and software systems in international logistics.",
       //     content: "During my time at Nampula International Airport, I observed how critical software reliability is for safety and efficiency. This experience shaped my view on building robust systems..."
      //  }
    ];

    // Se um artigo for clicado, mostra a "Página do Artigo"
    if (selectedArticle) {
        return (
            <div className="blog-container article-view">
                <button className="back-btn" onClick={() => setSelectedArticle(null)}>← Back to Blog</button>
                <article className="full-post">
                    <header>
                        <span className="category">{selectedArticle.category}</span>
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

    // Se não houver artigo selecionado, mostra a lista organizada
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
                    <h3>No articles available yet</h3>
                    <div className="loading-bar"><div className="progress"></div></div>
                </div>
            )}
        </div>
    );
}

export default Blog;