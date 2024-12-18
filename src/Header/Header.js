import cv from "../resume/CV(Sahil Verma).pdf";
import logo from "../image/logo.png";

const Header = () => {
  return (
    <div className="header" >
      <img src={logo} height="60" alt="logo" />
      <h2>
        <span>S</span>ahil Verma
      </h2>
      <div className="menu-container" data-aos="fade-left">
        <ul type="none">
          <a href=".">
            <li>Home</li>
          </a>
          <a href="#content-body">
            <li>About Me</li>
          </a>
          <a href="#services-div">
            <li>Services</li>
          </a>
          <a href="#my-projects">
            <li>Projects</li>
          </a>
          <a href="#test">
            <li>Testimonials</li>
          </a>
          <a href="#together">
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <a href={cv} download="Sahil Verma.pdf"data-aos="fade-left">
        <button type="button" aria-label="Download CV">
          Download CV
        </button>
      </a>
    </div>
  );
};

export default Header;
