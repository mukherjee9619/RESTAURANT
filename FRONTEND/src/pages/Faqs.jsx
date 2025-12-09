import React, { useState, useEffect } from "react";
import "../styles/FAQs.css";

const faqsData = [
  {
    question: "What are your restaurant’s opening hours?",
    answer:
      "GOLDEN SPOON is open every day from 10:00 AM to 11:00 PM. We also serve a special weekend brunch from 9:00 AM to 12:00 AM.",
  },
  {
    question: "Do you offer home delivery or takeaway?",
    answer:
      "Yes! We provide home delivery through our website and major partners like Swiggy and Zomato. Takeaway orders are also welcome.",
  },
  {
    question: "Can I reserve a table in advance?",
    answer:
      "Of course! You can book your table online via our reservation page or by calling us directly at +91-7003907430.",
  },
  {
    question: "Where is GOLDEN SPOON located?",
    answer:
      "We’re located at 23 Park Street, Kolkata, West Bengal. You can find us easily on Google Maps for directions.",
  },
  {
    question: "Do you have parking facilities?",
    answer:
      "Yes, we offer complimentary valet parking for all our dine-in guests.",
  },
  {
    question: "Do you host private events or birthday parties?",
    answer:
      "Absolutely! We specialize in organizing private events, birthdays, anniversaries, and corporate dinners with custom menu options.",
  },
  {
    question: "Do you have vegan, vegetarian, or gluten-free dishes?",
    answer:
      "Yes! Our menu includes a wide selection of vegetarian, vegan, and gluten-free meals marked with 🌱 and 🥦 icons.",
  },
  {
    question: "Can I bring my own cake or decorations for celebrations?",
    answer:
      "Yes, we allow outside cakes and simple decorations with prior notice. Please inform us while making your reservation.",
  },
  {
    question: "Is GOLDEN SPOON family and kid-friendly?",
    answer:
      "Yes, we are a family-friendly restaurant with a special kids’ menu, high chairs, and a fun dining atmosphere.",
  },
  {
    question: "Do you serve alcohol or cocktails?",
    answer:
      "Yes, we have a premium bar serving cocktails, mocktails, fine wines, and exclusive spirits crafted by our mixologists.",
  },
  {
    question: "Do you have live music or entertainment?",
    answer:
      "Yes! We host live music every Friday and Saturday evening featuring local artists and themed nights.",
  },
  {
    question: "Do you cater for outdoor events or corporate functions?",
    answer:
      "Yes, GOLDEN SPOON offers catering services for weddings, outdoor events, and office parties. Customized menus are available.",
  },
  {
    question: "Do you offer discounts or loyalty programs?",
    answer:
      "Yes, join our GOLDEN REWARDS loyalty program to earn points, enjoy exclusive offers, and get birthday discounts.",
  },
  {
    question: "Can I order online from your website?",
    answer:
      "Yes, you can directly place orders from our official website under the ‘Order Online’ section for delivery or pickup.",
  },
  {
    question: "How can I contact GOLDEN SPOON for inquiries?",
    answer:
      "You can reach us via our Contact page, email at goldenspoon@gmail.com, or call +91-7003907430. We’re happy to help!",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [theme, setTheme] = useState("dark");

  const toggleFAQ = (index) => {
    // ✅ Toggle only the clicked item
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // ✅ Smooth fade-in animation on scroll
  useEffect(() => {
    const faqs = document.querySelectorAll(".faq-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    faqs.forEach((faq) => observer.observe(faq));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`faqs-container ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1 className="faqs-title">Frequently Asked Questions</h1>
      <p className="faqs-subtitle">
        Welcome to <span>Golden Spoon</span> — here are some answers to our most
        common guest questions.
      </p>

      <div className="faq-list">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="contact-button">
        <a href="/contact">📞 Contact Us</a>
        </button>
    </div>
  );
};

export default FAQs;

