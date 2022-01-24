import React from "react";
import ReactDOM from "react-dom";

export default function Interest() {
    return (
        <div className="interest-section">
            <h3>Interest</h3>
            <p>Football. Basketball. Formula One.
                Knowing more space expolration.
                Watching movies. Playing Games. Music.
            </p>
        </div>
    )
}

ReactDOM.render (
    <Interest />,
    document.getElementById("root")
);