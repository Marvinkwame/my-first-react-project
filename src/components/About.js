import React from "react";
import ReactDOM from "react-dom";

export default function About() {
    return (
        <div className="about-section">
            <h3>About</h3>
            <p>I am a web developer with a particular interest in making things simple and
                automating daily tasks.I try to keep up with security and best practices, and am 
                looking for new things to learn.
            </p>
        </div>
    )
}

ReactDOM.render (
    <About />,
    document.getElementById("root")
)