import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Optimizing API Performance: What 5 Years of Java & Spring Boot Taught Me',
    date: 'Apr 14, 2026',
    source: 'LinkedIn',
    type: 'Post',
    summary:
      'A practical reflection on how sustained API performance comes from eliminating inefficiencies across payloads, caching, databases, threading, async design, and observability—not last‑minute optimization.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7449667767835742208/',
    tags: ['Spring Boot', 'Microservices', 'API Optimization'],
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Blog & Logs</h2>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-header">
                <span className="blog-badge">{post.type}</span>
                <span className="blog-date">{post.date}</span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-source">Source: {post.source}</p>
              <p className="blog-summary">{post.summary}</p>

              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {post.link ? (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                >
                  View Link
                </a>
              ) : (
                <span className="blog-link blog-link-disabled">No external link</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
