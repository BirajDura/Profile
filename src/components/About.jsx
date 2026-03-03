import profileImg from "../assets/Image.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-left">
        <img src={profileImg} alt="profile" className="about-img" />
      </div>

      <div className="about-right">
        <h2>About Me</h2>

        <p>
          I’m a passionate <strong>Frontend Developer</strong> and
          <strong> Graphic Designer</strong> dedicated to crafting seamless digital experiences.
        </p>

        <ul>
          <li>Build intuitive interfaces with HTML, CSS, JS, and React.</li>
          <li>Design clean and modern layouts.</li>
          <li>Create smooth user journeys.</li>
          <li>Deliver on time with client-focused approach.</li>
        </ul>

        <p>Let’s collaborate and build something extraordinary!</p>
      </div>
    </section>
  );
}

export default About;