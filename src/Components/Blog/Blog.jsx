import React from 'react';
import './Blog.css';

import analysisImg from '../../assets/analysis.png';
import fortknoxImg from '../../assets/fortknox.png';
import zenocideImg from '../../assets/zenocide.png';

const blogs = [
  {
    date: 'Jan 10, 2024',
    title: 'Building a Modern Portfolio with React',
    tags: ['React', 'Portfolio'],
    image: analysisImg,
  },
  {
    date: 'Oct 5, 2023',
    title: '5 Essential UX Principles for Beginners',
    tags: ['UX', 'Design'],
    image: fortknoxImg,
  },
  {
    date: 'Jul 22, 2023',
    title: 'Mastering Flexbox and Grid in CSS',
    tags: ['CSS', 'WebDev'],
    image: zenocideImg,
  }
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2 className="blog-title">✴ Blog</h2>
        <a href="#" className="blog-view-all">view all</a>
      </div>

      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <div className="blog-meta">
                <small className="blog-date">{blog.date}</small>
                <h5 className="blog-heading">{blog.title}</h5>
                <div className="blog-tags">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="blog-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <button className="read-button">Read</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
