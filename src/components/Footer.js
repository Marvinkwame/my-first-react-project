import React from "react";
import Twitter from '../components/Twitter-Icon.png';
import Facebook from '../components/Facebook-Icon.png';
import Instagram from '../components/Instagram-Icon.png';
import GitHub from '../components/GitHub- Icon.png';

export default function Footer() {
    return (
        <div className="icons">
            <div className="icon-box">
            <img src={Twitter}  alt="twitter-logo" />
            <img src={Instagram}  alt="Ig-logo" />
            <img src={Facebook}  alt="Fb-logo" />
            <img src={GitHub}  alt="github-logo" />
            </div>
        </div>
    )
}
