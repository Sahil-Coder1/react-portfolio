import logo from '../image/logo.png';


const Footer = () => {
return(
    <div className="bottom-nav">
    <div style={{ height: "50px" }}></div>
    <div className="nav"><img alt='logo' src={logo} height="60" />
        <h2>Sahil Verma</h2>
    </div>
    <div className="navigator">
        <ul type="none">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
        </ul></div>
    <div>
        <i className="fa-brands fa-facebook"></i>&nbsp;&nbsp;&nbsp; <i className="fa-brands fa-twitter"></i>&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-linkedin"></i>
    </div><br />
    <p id="visits"></p> <div className="copyright">&copy; 2023 <span>Sahil Verma</span> All Right Reserved , Inc.</div>
</div>
)
}

export default Footer;