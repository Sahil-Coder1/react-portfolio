import React, { useEffect, useState } from "react";
import ai from "../image/ai-content.png";
import uxu from "../image/uiux.png";
import shortner from "../image/url-shortner.png";
import weather from "../image/weather.png";
import pass from "../image/passgen.png";
import studentsenior from "../image/studentsenior.png";
import carrental from "../image/carrental.png";
import portfolio from "../image/portfolio.png";

const projects = [
  {
    id: "p8",
    title: "Student Senior Platform",
    category: "Web Design",
    image: studentsenior,
    link: "https://www.studentsenior.com",
  },
  {
    id: "p1",
    title: "App Download Landing Page Design",
    category: "UI/UX",
    image: uxu,
    link: null,
  },
  {
    id: "p11",
    title: "Portfolio Website",
    category: "Web Design",
    image: portfolio,
    link: "https://sahil-coder.vercel.app",
  },
  {
    id: "p9",
    title: "Car Rental App",
    category: "Web Design",
    image: carrental,
    link: "https://gorent1.vercel.app",
  },
  {
    id: "p4",
    title: "URL Shortener",
    category: "Web Design",
    image: shortner,
    link: "https://trial-f3b86.web.app",
  },
  {
    id: "p5",
    title: "Password Generator",
    category: "Web Design",
    image: pass,
    link: "https://generatepasw.vercel.app",
  },
  {
    id: "p3",
    title: "Weather App (Climatetown)",
    category: "Web Design",
    image: weather,
    link: "https://climatetown.vercel.app",
  },
  {
    id: "p2",
    title: "AI Content Detector",
    category: "Web Design",
    image: ai,
    link: "https://ai-detector.netlify.app",
  },
  {
    id: "p6",
    title: "App Landing UI",
    category: "App Design",
    image: uxu,
    link: null,
  },
  {
    id: "p7",
    title: "Graphic Poster Example",
    category: "Graphic Design",
    image: uxu,
    link: null,
  },
  {
    id: "p10",
    title: "Online Exam System (Java)",
    category: "App Design",
    image: uxu, // Replace with related image
    link: null, // Optional if not hosted
  },
];

const Myprojects = () => {
  const [filter, setFilter] = useState("Web Design");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-projects" id="my-projects">
      <h1>My Projects</h1>
      <p className="desc">
        Here are several projects that I have worked on and would like to
        showcase.
      </p>

      {/* FILTER BUTTONS */}
      <div className="pro-type" data-aos="zoom-in-up">
        <ul type="none">
          {["All", "UI/UX", "Web Design", "App Design", "Graphic Design"].map(
            (cat) => (
              <li key={cat} onClick={() => setFilter(cat)}>
                {cat}
              </li>
            )
          )}
        </ul>
      </div>

      {/* PROJECT GRID */}
      <div className="work">
        {filteredProjects.map((proj) => (
          <div
            className="box-div"
            id={proj.id}
            key={proj.id}
            data-aos="zoom-in-up"
          >
            <div>
              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <img alt="project" src={proj.image} className="image-cls" />
                  <p>{proj.category}</p>
                  <h3>{proj.title}</h3>
                </a>
              ) : (
                <>
                  <img alt="project" src={proj.image} className="image-cls" />
                  <p>{proj.category}</p>
                  <h3>{proj.title}</h3>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myprojects;
