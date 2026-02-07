import React from 'react';
import './Blog.css';

function Blog() {
    return (
        <div className="blog-container">
            <header className="blog-header">
                <p className="subtitle">LATEST NEWS</p>
                <h1>My <span className="highlight">Blog</span></h1>
            </header>

            <div className="empty-state">
              
                <h3>No vlogs available yet</h3>
                <p>
                    I'm currently preparing some exciting content about 
                    <strong> Applied AI</strong> and <strong>Web Development</strong>. 
                    Stay tuned, they will be posted here soon!
                </p>
                <div className="loading-bar">
                    <div className="progress"></div>
                </div>
            </div>
        </div>
    );
}

export default Blog;