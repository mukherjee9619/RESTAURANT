import React, { useEffect } from "react";
import "../styles/Privacy.css";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // ✨ Fade-in animation when entering
    const sections = document.querySelectorAll(".privacy-section, .privacy-header, .privacy-footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in");
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handlePrint = () => window.print();

  const handleDownload = () => {
    const text = document.getElementById("privacy-content")?.innerText || "";
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "GOLDEN_SPOON_Privacy_Policy.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="privacy-container">
      <div className="privacy-card" id="privacy-content">
        <header className="privacy-header">
          <h1>GOLDEN SPOON — Privacy Policy</h1>
          <p className="updated">Last updated: November 1, 2025</p>
        </header>

        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            GOLDEN SPOON (“we”, “us”, or “our”) respects your privacy and is
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>

          <h3>2.1 Personal Information</h3>
          <p>
            You may provide us with personal data when you make reservations,
            place orders, sign up for newsletters, join our loyalty program, or
            contact us. This may include your name, email address, phone number,
            billing/shipping address, and payment details.
          </p>

          <h3>2.2 Automatically Collected Information</h3>
          <p>
            We automatically collect certain information when you visit our
            website, such as IP address, device and browser info, pages visited,
            and referring URLs. Cookies and similar technologies help us do
            this.
          </p>

          <h3>2.3 Third-Party Data</h3>
          <p>
            We may receive data from trusted partners (e.g., delivery platforms,
            analytics providers) and combine it with data we collect directly.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To process orders, reservations, and payments.</li>
            <li>To communicate updates, promotions, or confirmations.</li>
            <li>To personalize your dining experience.</li>
            <li>To analyze traffic and improve our services.</li>
            <li>To ensure security and prevent fraud.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Sharing & Disclosure</h2>
          <ul className="nested">
            <li>Trusted service providers (payments, delivery, hosting).</li>
            <li>Partners in promotions or loyalty programs (with your consent).</li>
            <li>Authorities when legally required.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Cookies & Tracking Technologies</h2>
          <p>
            We use cookies to enhance your browsing experience and improve site
            performance. You may disable cookies in your browser, but some site
            features may not function properly.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Data Retention</h2>
          <p>
            Your data is retained only as long as needed for the purposes stated
            or as required by law. Once no longer necessary, we securely delete
            or anonymize your data.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Security</h2>
          <p>
            We implement robust technical measures to protect your data, but no
            method of storage or transmission is 100% secure.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. International Transfers</h2>
          <p>
            By using our site, you consent to the transfer of your data to
            servers in India or other jurisdictions where we operate.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Children's Privacy</h2>
          <p>
            We do not knowingly collect data from children under 13. If you
            believe a child has provided us with data, contact us to remove it.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Your Rights</h2>
          <p>
            You may request access, correction, deletion, or restriction of your
            data by contacting us using the details below.
          </p>
        </section>

        <section className="privacy-section">
          <h2>11. Third-Party Links</h2>
          <p>
            Our site may contain external links. We are not responsible for the
            privacy practices or content of those websites.
          </p>
        </section>

        <section className="privacy-section">
          <h2>12. Changes to This Policy</h2>
          <p>
            We may revise this Privacy Policy from time to time. The updated
            version will include a new “Last Updated” date.
          </p>
        </section>

        <section className="privacy-section">
          <h2>13. Contact Us</h2>
          <p>
            <strong>GOLDEN SPOON</strong>
            <br />
            23 Park Street, Kolkata, West Bengal
            <br />
            Email:{" "}
            <a href="mailto:goldenspoon@gmail.com">goldenspoon@gmail.com</a>
            <br />
            Phone: +91-7003907430
          </p>
        </section>

        <footer className="privacy-footer">
          <p>
            <small>
              Disclaimer: This policy is for informational purposes only and
              does not constitute legal advice. Consult a professional for your
              jurisdiction-specific requirements.
            </small>
          </p>
        </footer>
      </div>

      {/* <div className="privacy-actions">
        <button className="btn" onClick={handlePrint}>
          Print / Save as PDF
        </button>
        <button className="btn outline" onClick={handleDownload}>
          Download (TXT)
        </button>
      </div> */}
    </div>
  );
};

export default Privacy;
