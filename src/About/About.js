import profile from "../image/profile.png";

const About = () => {
  return (
    <div>
      <div className="content-body" id="content-body">
        <div className="div-img" id="sec-img">
          <div className="stripe2" />
          <img alt="logo" src={profile} height="500" data-aos="zoom-in-up" />
          <br />
        </div>
        <div className="div-name2">
          <h1 data-aos="fade-left">About Me</h1>
          <p data-aos="fade-up">
            I fell in love with programming and building real-world web apps 🚀
            <br />I am fluent in classics like C, Java, JavaScript, React, and
            Node.js
            <br />
            My field of interest is creating full-stack Web products
            <br />
            with clean UI and solid backend
          </p>
          <br />
          <div className="experience-meter" data-aos="zoom-in-up">
            Frontend (React & NextJs)
            <br />
            <div className="prog-back">
              <div className="prog-parent">
                <div className="ux-div"></div>
                <div className="prog-dot"></div>
              </div>
            </div>
            Backend (Express & MongoDB)
            <br />
            <div className="prog-back">
              <div className="prog-parent">
                <div className="web-div"></div>
                <div className="prog-dot"></div>
              </div>
            </div>
            Tools (Postman, VS Code, GitHub, Vercel)
            <br />
            <div className="prog-back">
              <div className="prog-parent">
                <div className="app-div"></div>
                <div className="prog-dot"></div>
              </div>
            </div>
            UI/UX (Tailwind CSS & Figma)
            <br />
            <div className="prog-back">
              <div className="prog-parent">
                <div className="graphic-div"></div>
                <div className="prog-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
