import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Blog.css";

const blogs = [
  {
    id: 1,
    title: "A Journey Through Golden Spoon",
    image: "/blogs/blog1.jpg",
    description:
      "Discover how Golden Spoon became the pinnacle of gourmet dining — classic flavors with modern elegance.",
  },
  {
    id: 2,
    title: "Signature Dishes & Culinary Secrets",
    image: "/blogs/blog2.jpg",
    description:
      "Explore our chefs’ signature creations and the artistry behind every plate served in our restaurant.",
  },
  {
    id: 3,
    title: "The Story Behind Our Ingredients",
    image: "/blogs/blog3.jpg",
    description:
      "From farm to table, learn about the premium ingredients that make every dish delicious and unforgettable.",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h1 className="blog-title">Our Culinary Stories</h1>
        <p className="blog-subtitle">
          Dive into the world of Golden Spoon — luxury dining, gourmet
          experiences, and chef inspirations.
        </p>
      </div>

      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-name">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
              <button
                className="blog-btn"
                onClick={() => navigate(`/blogs/${blog.id}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
