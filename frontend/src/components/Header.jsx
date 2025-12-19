import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    return (
        <header className="navigation">
            <h1>SJ Porter's Cloud Engineer Résumé</h1>
            <nav>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>Résumé</Link>
                <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
            </nav>
        </header>
    );
}