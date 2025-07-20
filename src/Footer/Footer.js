import logo from "../image/logo.png";

const Footer = () => {
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
  return (
    <div className="bottom-nav">
      <div style={{ height: "50px" }}></div>
      <div className="nav">
        <img alt="logo" src={logo} height="60" />
        <h2>Sahil Verma</h2>
      </div>
      <div className="navigator" data-aos="fade-down">
        <ul type="none">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </div>
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
      {/* <div>
        <a href={data.facebook}>
          {" "}
          <i className="fa-brands fa-facebook"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href={data.github}>
          <i className="fa-brands fa-github"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href={data.linkedin}>
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div> */}
      <br />
      <p id="visits"></p> <div className="copyright">Crafted with ❤️ & ☕</div>
    </div>
  );
};

export default Footer;
