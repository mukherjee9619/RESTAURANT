import React, { useEffect } from "react";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about-page section fade-in">
      <div className="about-container">
        <h2 className="about-title shimmer">About Us </h2>
        <p className="about-text">
          Welcome to <span className="highlight">Golden Spoon Restaurant</span>, the ultimate
          destination for fine dining in{" "}
          <span className="highlight">Durgapur, Asansol, Barddhaman, Kolkata</span> and{" "}
          <span className="highlight">New Delhi</span>. We serve{" "}
          <span className="highlight">Indian, Chinese, Continental</span> and{" "}
          <span className="highlight">more</span> — crafted by our{" "}
          <span className="highlight">expert chefs</span> with years of experience.
          <br /><br />
          Our signature dishes — <span className="highlight">Butter Chicken</span>,{" "}
          <span className="highlight">Mutton Biryani</span>,{" "}
          <span className="highlight">Hakka Noodles</span> and{" "}
          <span className="highlight">Pasta Alfredo</span> — are prepared with
          authentic ingredients and passion.
          <br /><br />
          Enjoy a <span className="highlight">luxurious ambiance</span>,{" "}
          <span className="highlight">elegant décor</span> and{" "}
          <span className="highlight">warm hospitality</span> that make every visit unforgettable.
          Perfect for <span className="highlight">family dinners</span>,{" "}
          <span className="highlight">romantic evenings</span> or{" "}
          <span className="highlight">celebrations</span>, Golden Spoon offers{" "}
          <span className="highlight">flavor</span>,{" "}
          <span className="highlight">comfort</span> and{" "}
          <span className="highlight">excellence</span> in every bite.
          <br /><br />
          <strong className="final-line">
            Visit <span className="highlight">Golden Spoon</span> today — where{" "}
            <span className="highlight">taste meets tradition!</span>
          </strong>
        </p>
      </div>
    </section>
  );
};

export default About;
