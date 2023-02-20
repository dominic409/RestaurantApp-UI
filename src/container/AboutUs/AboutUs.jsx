import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <AnimationOnScroll animateIn="animate__compress" duration='3'>
        <p className="p__opensans">
        We serve a wide variety of authentic Hyderabadi, Indian and Indo Chinese cuisine. Cooking is an art and our chefs have mastered the art by combining traditional recipes and adding their own personal touch to it. Every delicious dish that leaves our kitchen is created by one of our highly acclaimed chefs.
        </p>
        </AnimationOnScroll>

        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      {/* Knife image */}
      <AnimationOnScroll animateIn="animate__fadeInUp" duration='3'>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      </AnimationOnScroll>
      {/* Our History */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        India represents one of the oldest continuous civilization in human history, dating back 3300 BCE. It is ever-evolving and continues to do so today.  It is the largest democracy with over a billion people, numerous religions, languages and subcultures. Indian cuisine is anything but homogenous!.


        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
