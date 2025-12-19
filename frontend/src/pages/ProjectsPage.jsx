import React from "react";
import { resumeData } from "../data/resumeData.js";

export default function ProjectsPage() {
  const { projects } = resumeData;

  return (
    <div className="container">
      <section>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            {project.link && <p><a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>}
          </div>
        ))}
      </section>
    </div>
  );
}