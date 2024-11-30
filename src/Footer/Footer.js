import logo from '../image/logo.png';


const Footer = () => {
    const data = {
        facebook: 'https://www.facebook.com/profile.php?id=100028138461886',
        linkedin: 'https://www.linkedin.com/in/sahil-verma1',
        github: 'https://github.com/Sahil-Coder1'
    }
    return (
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
            <a href={data.facebook}> <i className="fa-brands fa-facebook"></i></a>&nbsp;&nbsp;&nbsp;<a href={data.github}><i className="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;<a href={data.linkedin}><i className="fa-brands fa-linkedin"></i></a>
            </div><br />
            <p id="visits"></p> <div className="copyright">&copy; 2023 <span>Sahil Verma</span> All Right Reserved , Inc.</div>
        </div>
    )
}

export default Footer;