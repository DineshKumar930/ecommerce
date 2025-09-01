import "./BlogNews.css";
import React from "react";

export default function BlogNews() {
  const blogPosts = [
    { id: 1, title: "Summer Sale is Here!", date: "Aug 15, 2025" },
    { id: 2, title: "Top 10 Gadgets of 2025", date: "Aug 10, 2025" },
    { id: 3, title: "Fashion Trends You Must Try", date: "Aug 5, 2025" },
  ];

  return (
    <section className="blog-news">
      <div className="container">
        <h2>Blog & News</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.date}</p>
              <button onClick={() => alert(`Read: ${post.title}`)}>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
