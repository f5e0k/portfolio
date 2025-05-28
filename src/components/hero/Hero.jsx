import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Sambhav Surana ,</span>frontend developer in India.
      </h1>
      <p>
        I am a frontend developer from IIT Roorkee,with handon experience on
        several exciting projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          className="hero-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
