import graphic from '../image/graphic-design.png';
import ui from '../image/ui-design.png';
import web from '../image/web-design.png';
import ux from '../image/ux-design.png';

const Services = () =>{
    return(
        
        <div className="services-div" id="services-div">
        <div className='line'></div>
        <h1>Services</h1>
        <p className='desc'>Make your business shine online with multiple services designed just for you<br />Some of the services are below</p>
        <ul type="none">
            <li>
                <div className="round-box">
                    <img alt='logo' src={ux} /> <br />
                    <h2>UI/UX</h2>
                    <p>I focus on creating a seamless and meaningful user experience by understanding user needs</p>
                </div>
            </li>
            <li>
                <div className="round-box">
                    <img alt='logo' src={web} /> <br />
                    <h2>Web Design</h2>
                    <p>Includes visual,UX,and technical aspects,arranging elements,choosing best colors, and images.</p>
                </div>
            </li>
            <li>
                <div className="round-box">
                    <img alt='logo' src={ui} /> <br />
                    <h2>App Design</h2>
                    <p>Creating the app's flow and structure,Making stylistic choices from colors to fonts, app security</p>
                </div>
            </li>
            <li>
                <div className="round-box">
                    <img alt='logo' src={graphic} /> <br />
                    <h2>App Development</h2>
                    <p> The process of planning, designing, creating, testing, and deploying a software application</p>
                </div>
            </li>
        </ul>
    </div>
    )
}

export default Services;