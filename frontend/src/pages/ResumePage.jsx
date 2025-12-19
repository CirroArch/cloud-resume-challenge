import React from "react";
import { resumeData } from "../data/resumeData.js";
import Education from "../components/Education.jsx";
import Certifications from "../components/Certifications.jsx";
import Experience from "../components/Experience.jsx";
import Skills from "../components/Skills.jsx";

export default function Resume() {
  const { name, contact, objective, education, certifications, experience, skills } = resumeData;

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="name">{name}</div>
          <div className="contact">
            <span>
              <a href={contact.linkedin}>
                {contact.linkedin}
              </a>
            </span>
          </div>
        </header>

        <section>
          <h2>Objective</h2>
          <p>{objective}</p>
        </section>

        <Education education={education} />
        <Certifications certifications={certifications} />
        <Experience experience={experience} />
        <Skills skills={skills} />
      </div>
    </>
  );
}
