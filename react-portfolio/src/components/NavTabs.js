import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar nav-tabs">
      <h1 className="navbar-brand mt-1 mx-5">Shane McNulty: Junior Developer</h1>
      <ul className="navbar-nav d-flex flex-row px-2">
          <li className="nav-item px-2">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li className="nav-item px-2 ">
            <a
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </a>
          </li>
          <li className="nav-item px-2">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item px-2">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
       
      </ul>
    </nav>
  );
}

export default NavTabs;
