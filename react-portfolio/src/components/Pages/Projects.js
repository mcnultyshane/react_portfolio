import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Individual Cards

function ProjectCards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img class="img-thumbnail" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p className="card-title">{props.name}</p>
        <p class="topics">{props.topics}</p>
        <p class="proj-icons-container">
          <a href={props.github}>
            <img
              class="project-icons"
              src="https://img.icons8.com/material-rounded/48/000000/github.png"
              alt="Github Icon"
            />{" "}
          </a>
          <a href={props.deploy}>
            <img
              class="project-icons"
              src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              alt="Link Icon"
            />{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
export default ProjectCards;
