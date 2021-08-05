import React from "react";
import ProjectCards from "./Projects";
import projects from "../../projects.json";
import "bootstrap/dist/css/bootstrap.min.css";


function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">Coding Projects</h2>
        <hr></hr>
      </div>
      <Wrapper id="card-data">
        {projects.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            deploy={project.deploy}
            github={project.github}
            topics={project.topics}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Portfolio