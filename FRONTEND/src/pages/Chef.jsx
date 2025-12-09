import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Chef.css";

const chefs = [
  {
    id: 1,
    name: "Vikas Khanna",
    image: "/chefs/chef1.jpg",
    title: "Michelin-Starred Chef | Author | Philanthropist",
    description:
      "A Michelin-starred chef based in New York, renowned for promoting Indian cuisine globally through innovation and passion.",
    fullDescription:
      "Vikas Khanna is not only a Michelin-starred chef but also an author and filmmaker. His journey in culinary arts spans decades. He promotes Indian cuisine worldwide, blending traditional flavors with modern techniques. In addition to cooking, he engages in philanthropy and humanitarian efforts. Vikas continues to inspire chefs around the globe with his creativity, media appearances, and cookbooks. Passion, precision, and dedication define his culinary journey.",
  },
  {
    id: 2,
    name: "Garima Arora",
    image: "/chefs/chef2.jpg",
    title: "Founder of Gaa | First Indian Woman Michelin-Star Chef",
    description:
      "Known for blending Thai ingredients with Indian techniques, Garima brings artistry and elegance to every plate she creates also mentors young chefs.",
    fullDescription:
      "Garima Arora is an Indian Master Chef, Judge Hotelier, Restaurateur and a Business woman. She earned her first Michelin star in 2018 for her restaurant Gaa, in Bangkok, becoming the first Indian woman to do so. She initially pursued a career in journalism before becoming a chef.",
  }, 
  {
    id: 3,
    name: "Manish Mehrotra",
    image: "/chefs/chef3.jpg",
    title: "Head Chef | Indian Accent| Culinary Director of Indian Accent Restaurants",
    description:
      "Celebrated for his innovative approach, blending traditional flavors with modern presentation for a global dining experience.",
    fullDescription:
      "Manish Mehrotra is a celebrated chef renowned for his creative approach to Indian cuisine. As the head chef at Indian Accent, he combines contemporary cooking techniques with traditional flavors. Manish has received multiple awards for his innovative menus and global culinary presentations. He believes in reinventing Indian classics while maintaining authenticity. His philosophy focuses on flavor, presentation, and creating memorable dining experiences.",
  },
];

const Chef = () => {
  const navigate = useNavigate();

  const handleProfileClick = (id) => {
    navigate(`/chef/${id}`);
  };

  return (
    <section className="chef-section">
      <div className="chef-background"></div>
      <h1 className="chef-title">Our Master Chefs</h1>
      <p className="chef-subtitle">
        Meet the culinary artists behind the Golden Spoon — where passion meets perfection.
      </p>

      <div className="chef-container">
        {chefs.map((chef) => (
          <div className="chef-card" key={chef.id}>
            <div className="chef-image-container">
              <img src={chef.image} alt={chef.name} className="chef-image" />
              <div className="glossy-overlay"></div>
            </div>
            <div className="chef-info">
              <h2 className="chef-name">{chef.name}</h2>
              <h4 className="chef-title-text">{chef.title}</h4>
              <p className="chef-description">{chef.description}</p>
              <button
                className="chef-btn"
                onClick={() => handleProfileClick(chef.id)}
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chef;
