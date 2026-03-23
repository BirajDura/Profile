import housewareImg from "../assets/HouseWare.png";
import GymImage from "../assets/Gym Image.png";
import resturant from "../assets/Resturant.png";

import poster1 from "../assets/POSTER1.jpg";
import poster2 from "../assets/MoviePoster.png";
import poster3 from "../assets/MessiPoster.png";
import CaneImage from "../assets/PrintedCane.jpg";



function Projects() {
  const webProjects = [
    {
      title: "HouseWare Hub",
      description: "A modern ecommerce app built with React and Tailwind CSS.",
      img: housewareImg,
      link: "#",
    },
    {
      title: "IRON SANCTUM",
      description: "IronSanctum Gym is a sleek, high-impact fitness web application crafted with React, featuring a premium design that embodies strength, discipline, and elite training culture.",
      img: GymImage,
      link: "https://iron-sanctum-gym.vercel.app/",
    },
     {
      title: "Resturant",
      description: "Craving satisfied instantly with delicious fast food made fresh every day.🍟",
      img: resturant,
      link: "https://restrurant.vercel.app/",
    },
  ];

  const designProjects = [
    {
      title: "Poster Design",
      img: poster1,
    },
    {
      title: "Movie Poster",
      img: poster2,
    },
    {
      title: "Messi Poster Design",
      img: poster3,
    },
    {
      title: "Logo Design",
      img: CaneImage,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      {/* Web Projects */}
      <h3 className="section-subtitle">01 - Web Development</h3>
      <div className="projects-grid">
        {webProjects.map((project, index) => (
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

      {/* Graphic Designs */}
      <h3 className="section-subtitle">02 - Graphic Designs</h3>
      <div className="projects-grid">
        {designProjects.map((design, index) => (
          <div className="project-card" key={index}>
            <img src={design.img} alt={design.title} />
            <h3>{design.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;