import "../styles/Skills.css";
import React from "react";
import ProgressBar from "./ProgressBar";
import node from "../assets/Logo-tech-dev/nodejs.webp";
import express from "../assets/Logo-tech-dev/express.webp";
import mongo from "../assets/Logo-tech-dev/MongoDB.webp";
import html from "../assets/Logo-tech-dev/html5.webp";
import css from "../assets/Logo-tech-dev/css-3.webp";
import scss from "../assets/Logo-tech-dev/deposer.webp";
import js from "../assets/Logo-tech-dev/js.webp";
import react from "../assets/Logo-tech-dev/react.webp";
import vercel from "../assets/Logo-tech-dev/vercel.webp";
import seo from "../assets/Logo-tech-dev/SEO.webp";
import figma from "../assets/Logo-tech-dev/figma.webp";
import photoshop from "../assets/Logo-tech-dev/adobe-photoshop.webp";
import illustrator from "../assets/Logo-tech-dev/adobe-illustrator.webp";
import blender from "../assets/Logo-tech-dev/blender.webp";
import three from "../assets/Logo-tech-dev/ThreeJS.webp";

function Skills() {
  return (
    <div id="skillsSection">
      <div className="main-ctn2">
        <div className="skills-column">
          <div className="ctn-skill">
            <h2>Back End</h2>
            <div className="skill">
              <div className="logo-tech">
                <p>Node JS</p>
                <img src={node} alt="logo Node JS"></img>
              </div>
              <ProgressBar percentage={50} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>Express JS</p>
                <img src={express} alt="logo Express JS"></img>
              </div>
              <ProgressBar percentage={30} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>MongoDB</p>
                <img src={mongo} alt="logo Mongo DB"></img>
              </div>
              <ProgressBar percentage={30} />
            </div>
          </div>
          <div className="ctn-skill">
            <h2>Front End</h2>
            <div className="skill">
              <div className="logo-tech">
                <p>HTML</p>
                <img src={html} alt="logo HTML 5"></img>
              </div>
              <ProgressBar percentage={90} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>CSS</p>
                <img src={css} alt="logo CSS 3"></img>
              </div>
              <ProgressBar percentage={90} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>SCSS</p>
                <img src={scss} alt="logo SCSS"></img>
              </div>
              <ProgressBar percentage={60} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>JavaScript Vanilla</p>
                <img src={js} alt="logo JavaScript"></img>
              </div>
              <ProgressBar percentage={80} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>React</p>
                <img src={react} alt="logo React"></img>
              </div>
              <ProgressBar percentage={70} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>Vercel</p>
                <img src={vercel} alt="logo Vercel"></img>
              </div>
              <ProgressBar percentage={80} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>Optimisation SEO</p>
                <img src={seo} alt="logo SEO"></img>
              </div>
              <ProgressBar percentage={90} />
            </div>
          </div>
          <div className="ctn-skill">
            <h2>Design</h2>
            <div className="skill">
              <div className="logo-tech">
                <p>Figma</p>
                <img src={figma} alt="logo Figma"></img>
              </div>
              <ProgressBar percentage={60} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>Photoshop</p>
                <img src={photoshop} alt="logo Photoshop"></img>
              </div>
              <ProgressBar percentage={60} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>Illustrator</p>
                <img src={illustrator} alt="logo Illustrator"></img>
              </div>
              <ProgressBar percentage={50} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>Blender</p>
                <img src={blender} alt="logo Blender"></img>
              </div>
              <ProgressBar percentage={40} />
            </div>
            <div className="skill">
              <div className="logo-tech">
                <p>ThreeJS</p>
                <img src={three} alt="logo Three JS"></img>
              </div>
              <ProgressBar percentage={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
