import React from "react";
import "./Hero.css";
import rightArrow from "../../assets/right_arrow.png";

const Hero = () => {
    return (
        <div className="hero-container ">
            <div className="hero-text">
                <h1>We ensure better education for a better world</h1>
                <p>
                    Our cutting-edge curriculum is designed to empower students with the
                    knowledge, skills, and experience needed to excel in the dynamic field
                    of education.
                </p>
                <button className="btn">
                    Explore more
                    <img src={rightArrow} alt="Right arrow" className="right-arrow"></img>
                </button>
            </div>
        </div>
    );
};

export default Hero;