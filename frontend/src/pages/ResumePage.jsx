import React from "react";

export default function Resume() {
  return (
    <>
      <section className="navigation">
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/resume.html">Résumé</a>
            <a href="/projects.html">Projects</a>
          </nav>
        </header>
      </section>

      <div className="container">
        <header className="header">
          <div className="name">SJ Porter</div>
          <div className="contact">
            <span>
              <a href="https://www.linkedin.com/in/shawnajporter/">
                www.linkedin.com/in/shawnajporter/
              </a>
            </span>
          </div>
        </header>

        <section>
          <h2>Objective</h2>
          <p>
            Versatile IT professional with a Master’s in Cybersecurity and
            Information Assurance, advanced certifications, and experience
            supporting enterprise systems. Seeking an engineering-focused role
            in cloud, platform, DevOps, or DevSecOps where I can apply
            automation skills, troubleshoot complex environments, and deliver
            secure, scalable, and reliable infrastructure.
          </p>
        </section>

        <section>
          <h2>Education</h2>

          <div className="edu-entry">
            <div className="edu-left">
              <strong>Western Governors University</strong>
              <br />
              Master of Science in Cybersecurity and Information Assurance
            </div>
            <div className="edu-right">March 2025</div>
          </div>

          <div className="edu-entry">
            <div className="edu-left">
              <strong>
                University of Pittsburgh School of Social Work
              </strong>
              <br />
              Master of Social Work in Community Organizing/Social
              Administration
            </div>
            <div className="edu-right">April 2015</div>
          </div>

          <div className="edu-entry">
            <div className="edu-left">
              <strong>University of Pittsburgh</strong>
              <br />
              Bachelor of Science in Psychology
            </div>
            <div className="edu-right">April 2013</div>
          </div>
        </section>

        <section>
          <h2>Certifications</h2>
          <ul>
            <li>GIAC Security Essentials (GSEC)</li>
            <li>GIAC Certified Incident Handler (GCIH)</li>
            <li>GIAC Certified Enterprise Defender (GCED)</li>
            <li>CompTIA PenTest+</li>
            <li>CompTIA SecurityX (formerly CASP+)</li>
            <li>ISC2 Certified in Cybersecurity (CC)</li>
          </ul>
        </section>

        <section>
          <h2>Experience</h2>

          <div className="job">
            <div className="job-header">
              <span className="job-title">
                Software Engineering Institute (SEI) at Carnegie Mellon
                University
              </span>
              <span className="job-location">Pittsburgh, PA</span>
            </div>
            <div className="job-role">
              Temporary User Services Associate — January 2024 – Present
            </div>
            <ul>
              <li>
                Support user account creation, termination, and maintenance via
                Active Directory and Linux systems
              </li>
              <li>
                Deploy device policies and configuration profiles to endpoint
                devices
              </li>
              <li>
                Collaborate with other internal IT teams to resolve hardware,
                software, and network issues
              </li>
              <li>
                Ensure proper enrollment of company devices via Microsoft Intune
                and provide ongoing support
              </li>
              <li>
                Configure Windows and MacOS systems for use in a high-security
                federally funded environment
              </li>
              <li>
                Participate in security scans and assist with compliance checks
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <span className="job-title">
                Allegheny County Department of Human Services
              </span>
              <span className="job-location">Pittsburgh, PA</span>
            </div>
            <div className="job-role">
              Grants Analyst — February 2021 – April 2022
            </div>
            <ul>
              <li>
                Administered the competitive award process in accordance with
                relevant federal, state, and county regulations and policies.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <span className="job-title">
                Carnegie Mellon University, Office of Sponsored Programs
              </span>
              <span className="job-location">Pittsburgh, PA</span>
            </div>
            <div className="job-role">
              Research Administrator — February 2020 – February 2021
              <br />
              Contracts Administrator — December 2018 – February 2020
            </div>
            <ul>
              <li>
                Analyzed grant proposal components and budgets for compliance
                with relevant regulations, policies, and guidelines prior to
                submission to various federal and non-federal sponsors.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <span className="job-title">
                University of Pittsburgh Conflict of Interest Office
              </span>
              <span className="job-location">Pittsburgh, PA</span>
            </div>
            <div className="job-role">
              Senior Compliance Coordinator — August 2017 – December 2018
              <br />
              Compliance Coordinator — November 2015 – August 2017
            </div>
            <ul>
              <li>
                Supervised Compliance Coordinator team. Implemented federally
                directed conflict of interest mitigation requirements to ensure
                integrity of University’s research portfolio.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Competencies and Skills</h2>
          <p>
            MacOS, Windows OS, Microsoft Azure, Microsoft Intune, Zscaler,
            Software and Hardware troubleshooting, GCC High Experience, Endpoint
            security, Computer Networking, Wireshark, Governance, Risk &
            Compliance, incident response, threat analysis
          </p>
        </section>
      </div>
    </>
  );
}
