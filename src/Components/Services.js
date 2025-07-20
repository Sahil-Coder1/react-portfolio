import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiFigma,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiLinux,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const TechStack = () => {
  return (
    <section className="tech-section" id="techstack">
      <div className="tech-container">
        <h2 className="tech-title">Tech Stack</h2>

        {/* GROUPS */}
        <div className="tech-group">
          <h3>Languages</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <CgCPlusPlus />
              <span>C</span>
            </div>
            <div className="tech-card">
              <FaJava color="#007396" />
              <span>Java</span>
            </div>
            <div className="tech-card">
              <SiJavascript color="#f0db4f" />
              <span>JavaScript</span>
            </div>
            <div className="tech-card">
              <SiTypescript color="#007ACC" />
              <span>TypeScript</span>
            </div>
          </div>
        </div>

        <div className="tech-group">
          <h3>Frontend</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <FaHtml5 color="#e34c26" />
              <span>HTML</span>
            </div>
            <div className="tech-card">
              <FaCss3Alt color="#264de4" />
              <span>CSS</span>
            </div>
            <div className="tech-card">
              <FaReact color="#61DBFB" />
              <span>React</span>
            </div>
            <div className="tech-card">
              <SiRedux color="#764ABC" />
              <span>Redux</span>
            </div>
            <div className="tech-card">
              <SiTailwindcss color="#38bdf8" />
              <span>Tailwind</span>
            </div>
            <div className="tech-card">
              <SiFigma color="#f24e1e" />
              <span>Figma</span>
            </div>
          </div>
        </div>

        <div className="tech-group">
          <h3>Backend</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <FaNodeJs color="#68A063" />
              <span>Node.js</span>
            </div>
            <div className="tech-card">
              <SiExpress color="#000" />
              <span>Express</span>
            </div>
            <div className="tech-card">
              <SiFirebase color="#FFCA28" />
              <span>Firebase</span>
            </div>
          </div>
        </div>

        <div className="tech-group">
          <h3>Database</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <SiMongodb color="#47A248" />
              <span>MongoDB</span>
            </div>
            <div className="tech-card">
              <SiMysql color="#00758F" />
              <span>MySQL</span>
            </div>
          </div>
        </div>

        <div className="tech-group">
          <h3>Tools & OS</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <FaGitAlt color="#F1502F" />
              <span>Git</span>
            </div>
            <div className="tech-card">
              <SiPostman color="#FF6C37" />
              <span>Postman</span>
            </div>
            <div className="tech-card">
              <SiLinux color="#000000" />
              <span>Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
