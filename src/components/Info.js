import React from "react";
import ReactDOM from "react-dom";
import logo from '../components/Pain.jpg';
import email from '../components/Icon.png';
import linkedin from '../components/Vector.png';

export default function Info() {
    return (
        <div className="info-section">
            <div className="img-sec">
                <img src={logo} className="profile-img" alt="profile-img" />
            </div>
            <h1 className="info-name">Marvin Kwame</h1>
            <h2 className="info-title">Web Developer</h2>
            <a href="https://github.com/Marvinkwame">My Github</a>
            <div className="info-btns">
                <div>
                    <button className="email-btn" type="button">
                        <img src={email} className="email-logo" alt="email-logo" /><a href="mailto: marvinkudjo@gmail.com"></a>
                        Email</button>
                </div>

                <div>
                    <button className="linkedin-btn" type="button">
                        <img src={linkedin} className="linkedin-logo" alt="linkedin-logo" />
                    LinkedIn</button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render (
    <Info />,
    document.getElementById("root")
)
