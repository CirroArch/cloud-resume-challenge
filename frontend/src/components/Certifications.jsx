import React from "react";

export default function Certifications({ certifications }) {
  return (
    <section>
      <h2>Certifications</h2>
      <ul className="cert-list">
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}