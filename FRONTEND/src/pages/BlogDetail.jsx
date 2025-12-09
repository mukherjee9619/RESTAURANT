import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./../styles/BlogDetail.css";

const blogs = [
  {
    id: 1,
    title: "A Journey Through Golden Spoon",
    image: "/blogs/blog1.jpg",
    fullDescription: `
      Golden Spoon was founded to bring an unforgettable culinary experience to our guests. 
      Our chefs blend classic recipes with innovative techniques, delivering elegance and flavor in every dish.
      Guests are welcomed with an atmosphere of sophistication, perfect for celebrations or intimate dinners.
    `,
  },
  {
    id: 2,
    title: "Signature Dishes & Culinary Secrets",
    image: "/blogs/blog2.jpg",
    fullDescription: `
      Our chefs craft signature dishes with precision and passion. Each plate tells a story, 
      combining fresh ingredients with artistic presentation. 
      Experience dishes that surprise the palate and delight the senses.
    `,
  },
  {
    id: 3,
    title: "The Story Behind Our Ingredients",
    image: "/blogs/blog3.jpg",
    fullDescription: `
      At Golden Spoon, we source only the finest ingredients — organic, seasonal, and ethically produced. 
      Every herb, spice, and cut of meat is carefully chosen to enhance flavor and quality.
      Our attention to ingredients ensures a premium dining experience every time.
    `,
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found!</h2>;

  return (
    <section className="blog-detail-section">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
      <div className="blog-detail-container">
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        <div className="blog-detail-info">
          <h1 className="blog-detail-name">{blog.title}</h1>
          <p className="blog-detail-description">{blog.fullDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
