import React from "react";
import Facebook from "../images/Facebook-Icon.png";
import Instagram from "../images/Instagram-Icon.png";
import Twitter from "../images/Twitter-Icon.png";
import Github from "../images/GitHub-Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="img-container">
        <img src={Facebook} alt="Facebook.png" />
        <img src={Instagram} alt="Instagram.png" />
        <img src={Twitter} alt="Twitter.png" />
        <img src={Github} alt="Github.png" />
      </div>
    </div>
  );
}
