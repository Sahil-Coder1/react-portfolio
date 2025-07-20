import profile from "../image/profile.png";

const Main = () => {
  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/sahil-verma1",
      icon: "fa-brands fa-linkedin",
    },
    { link: "https://github.com/Sahil-Coder1", icon: "fa-brands fa-github" },
    {
      link: "https://www.hackerrank.com/profile/sahil_coder1",
      icon: "fa-brands fa-hackerrank",
    },
  ];

  const contactMe = () => {
    window.open(
      "mailto:26maysahil@gmail.com?subject=Let's%20Collabe&body=" +
        encodeURIComponent(document.getElementById("desText").value)
    );
    document.getElementById("desText").value = "";
  };

  return (
    <div className="main">
      <div className="line" />
      <div className="content-body" data-aos="fade-up">
        <div className="div-name">
          <h3>Hi I am</h3>
          <h2>Sahil Verma</h2>
          <h1>
            UI & UX <p>Designer</p>
          </h1>
          <p>
            A passionate Full Stack Web Developer 🚀 experienced in building web
            apps with React.js, Node.js, MongoDB, and Tailwind CSS, focused on
            clean UI and scalable backend solutions.
          </p>
          <button className="hire-btn" onClick={contactMe}>
            Hire Me
          </button>
        </div>

        <div className="div-img">
          <div className="container-img">
            <div className="strip"></div>
          </div>
          <img alt="logo" src={profile} />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {socialLinks.map((data) => (
              <a href={data.link}>
                <i className={data.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
