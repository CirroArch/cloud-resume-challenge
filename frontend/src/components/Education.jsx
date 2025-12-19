import React from "react";

export default function Education({ education }) {
  return (
    <section>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="edu-entry">
          <div className="edu-left">
            <strong>{edu.institution}</strong><br />
            {edu.degree}
          </div>
          <div className="edu-right">{edu.date}</div>
        </div>
      ))}
    </section>
  );
}