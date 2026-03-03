import housewareImg from "../assets/HouseWare.png";
import calculatorImg from "../assets/Calcu.png";

function Projects() {
  const projects = [
    {
      title: "HouseWare Hub",
      description: "A modern ecommerce app built with React and Tailwind CSS.",
      img: housewareImg,
      link: "#",
    },
    {
      title: "Calculator",
      description: "A simple calculator made with HTML & CSS.",
      img: calculatorImg,
      link: "https://birajdura.github.io/Calculator/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;