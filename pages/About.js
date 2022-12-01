import React from "react";
import HeroAbout from "../components/client/about/HeroAbout";
import Special from "../components/client/about/Special";
import Status from "../components/client/about/Status";
import Timeline from "../components/client/about/Timeline";

const About = () => {
  return (
    <div className="pt-10">
      <HeroAbout />
      <Status />
      <Special />
      <Timeline />
    </div>
  );
};

export default About;
