import React from "react";

export default function Experience({ experience }) {
  return (
    <section>
      <h2>Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="job">
          <div className="job-header">
            <span className="job-title">{job.company}</span>
            <span className="job-location">{job.location}</span>
          </div>
          <div className="job-role">
            {job.role} {job.dates && `— ${job.dates}`}
          </div>
          <ul>
            {job.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}