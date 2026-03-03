import profileImg from "../assets/PortfolioProfile.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="header-left">
        <p className="intro">Hi, I'm</p>
        <h1 className="name">Birajman Dura</h1>
        <h3 className="role">Front-end Web Developer & Graphic Designer</h3>

        <p className="hero-desc">
          I build clean, responsive, and user-focused web experiences.
        </p>

        <div className="hero-contact">
          <a href="mailto:durabiraj220@gmail.com">📧 durabiraj220@gmail.com</a>
          {/* <p>📧 durabiraj220@gmail.com</p> */}
          <p>📱 +977-9806640359</p>
        </div>

        <div className="social-icons">
          <a href="https://github.com/BirajDura">GitHub</a>
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="header-right">
        <img src={profileImg} alt="profile" className="profile-img" />
      </div>
    </section>
  );
}

export default Header;