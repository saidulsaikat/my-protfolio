import React from "react";
import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";

const About = () => {
  return (
    <section className=" bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className=" w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className=" text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
            odio eu magna tincidunt posuere. Etiam quis est rhoncus, efficitur
            elit luctus, hendrerit diam. Quisque et consequat est, eu consequat
            magna. Ut posuere orci nisl. Morbi vel semper nulla, vitae laoreet
            purus. Etiam rhoncus sapien sed lacus semper
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
