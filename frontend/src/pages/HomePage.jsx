import React from "react";
import { resumeData } from "../data/resumeData.js";

export default function HomePage() {
  const { name, objective } = resumeData;

  return (
    <div className="container">
      <header className="header">
        <div className="name">{name}</div>
        <div className="contact">
          <span>
            <a href={resumeData.contact.linkedin}>
              {resumeData.contact.linkedin}
            </a>
          </span>
        </div>
      </header>

      <section>
        <h2>Welcome</h2>
        <p>Hello! I'm {name}, a cloud engineer passionate about building secure and scalable infrastructure.</p>
        <p>{objective}</p>
      </section>
    </div>
  );
}