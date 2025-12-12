import React from "react"

export default function Header() {
    return (
        <header className="navigation">
            <h1>SJ Porter's Cloud Engineer Résumé</h1>
            <nav>
                <a href="/">Home</a>
                <a className="active" href="/resume">Résumé</a>
                <a href="/projects">Projects</a>
            </nav>
        </header>
    )
}