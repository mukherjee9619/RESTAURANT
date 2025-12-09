import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./../styles/ChefDetail.css";

const chefs = [
  {
    id: 1,
    name: "Vikas Khanna",
    image: "/chefs/chef1.jpg",
    title: "Michelin-Starred Chef | Author | Philanthropist",
    fullDescription:
      "Vikas Khanna is not only a Michelin-starred chef but also an author and filmmaker. His journey in culinary arts spans decades. He promotes Indian cuisine worldwide, blending traditional flavors with modern techniques. In addition to cooking, he engages in philanthropy and humanitarian efforts. Vikas continues to inspire chefs around the globe with his creativity, media appearances, and cookbooks. Passion, precision, and dedication define his culinary journey.",
  },
  {
    id: 2,
    name: "Garima Arora",
    image: "/chefs/chef2.jpg",
    title: "Founder of Gaa | First Indian Woman Michelin-Star Chef",
    fullDescription:
      "Garima Arora is the first Indian woman to earn a Michelin star. She is famous for her restaurant 'Gaa' in Bangkok. Her approach combines Thai ingredients with Indian culinary techniques. Garima focuses on sustainable and locally sourced ingredients while creating imaginative dishes. She mentors young chefs and participates in culinary workshops globally. Her creativity and flair for fusion cuisine make her one of the most respected chefs internationally.",
  },
  {
    id: 3,
    name: "Manish Mehrotra",
    image: "/chefs/chef3.jpg",
    title: "Head Chef | Indian Accent | Culinary Director of Indian Accent Restaurants",
    fullDescription:
      "Manish Mehrotra is a celebrated chef renowned for his creative approach to Indian cuisine. As the head chef at Indian Accent, he combines contemporary cooking techniques with traditional flavors. Manish has received multiple awards for his innovative menus and global culinary presentations. He believes in reinventing Indian classics while maintaining authenticity. His philosophy focuses on flavor, presentation, and creating memorable dining experiences.",
  },
];

const ChefDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chef = chefs.find((c) => c.id === parseInt(id));

  if (!chef) return <h2>Chef not found!</h2>;

  return (
    <section className="chef-detail-section">
      <div className="chef-detail-background"></div>
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
      <div className="chef-detail-container">
        <img src={chef.image} alt={chef.name} className="chef-detail-image" />
        <div className="chef-detail-info">
          <h1 className="chef-detail-name">{chef.name}</h1>
          <h3 className="chef-detail-title">{chef.title}</h3>
          <p className="chef-detail-description">{chef.fullDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default ChefDetail;
