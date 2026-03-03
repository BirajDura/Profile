import htmlImg from "../assets/Html.png";
import cssImg from "../assets/Css.png";
import jsImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import nodeImg from "../assets/Nodejs.png";
import gitImg from "../assets/Git.png";
import tailwindImg from "../assets/Tailwind.png";
import vscodeImg from "../assets/VsCode.png";

function Skills() {
  const skills = [
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "JavaScript", img: jsImg },
    { name: "React", img: reactImg },
    { name: "Node.js", img: nodeImg },
    { name: "Git", img: gitImg },
    { name: "Tailwind", img: tailwindImg },
    { name: "VS Code", img: vscodeImg },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;