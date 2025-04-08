import React, { useState } from "react";
import { motion } from "framer-motion";
import project_data from "../assets/projects-data";
import "./Projects.css"; // Import CSS file

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = window.innerWidth > 768 ? 6 : 3;
  const totalPages = Math.ceil(project_data.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const currentItems = project_data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container">
      <h1 className="project-heading">Projects</h1>
      <div className="projects-grid">
        {currentItems.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.w_image}
              alt={project.w_name}
              className="project-image"
            />
            <div className="card-info">
              <h3 className="project-name">{project.w_name}</h3>
              <p className="description">{project.description}</p>
              <div className="buttons">
                <a
                  href={project.live_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-demo"
                >
                  Live Demo
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-github"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} className="btn btn-prev" disabled={currentPage === 1}>
          Previous
        </button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} className="btn btn-next" disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
