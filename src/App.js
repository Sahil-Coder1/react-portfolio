import logo from './image/logo.png';
import graphic from './image/graphic-design.png';
import profile from './image/profile.png';
import ui from'./image/ui-design.png';
import web from'./image/web-design.png';
import ux from'./image/ux-design.png';

import './App.css';
import './index.css';
import style from './style.css';

function App() {
  return (
    <div className='body'>
<head>
    <title>Sahil Verma - Portfolio</title>
    <link rel="stylesheet" href={style}/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <div div="main">
        <div className="header">
           <img src={logo} height="60"/> 
            <h2><span>S</span>ahil Verma</h2>
            <div className="menu-container">
            <ul type="none">
            <li>Home</li>
            <li>About Me</li>       
             <li>Services</li>
                <li>Projects</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
                </div>
            <button>Download CV</button>
        </div>
        <div className="content-body">
        <div className="div-name">
            <h3>Hi I am</h3>
            <h2>Sahil Verma</h2>
            <h1>UI & UX <p>Designer</p></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            <button className="hire-btn">Hire Me</button>
            </div>
            <div className="div-img"><div style={{width: "200px" ,height: "40px" ,backgroundColor:"var(--primary)",opacity: "0.5", transform: "translateX(145px) translateY(210px)"}}></div>
            <img src={profile} height="500"/><br/>
                <i className="fa-brands fa-facebook"></i>&nbsp;&nbsp;&nbsp; <i className="fa-brands fa-twitter"></i>&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-linkedin"></i>
            </div>
        </div>
         <div className="content-body">
            <div className="div-img"><div style={{width: "200px" ,height: "40px" ,backgroundColor:"var(--primary)",opacity: "0.5", transform: "translateX(145px) translateY(210px)"}}></div>
            <img src={profile} height="500"/><br/>
            </div>
             <div className="div-name2">
        
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p><br/>
            <div className="experience-meter">
            UX<br/>
            <div className="prog-back"><div className="prog-parent"><div className="ux-div"></div><div className="prog-dot"></div></div></div>
            Website Design<br/>
              <div className="prog-back"><div className="prog-parent"><div className="web-div"></div><div className="prog-dot"></div>
</div></div>
            App Design<br/>
              <div className="prog-back"><div className="prog-parent"><div className="app-div"></div><div className="prog-dot"></div>
</div></div>
            Graphic Design<br/>
              <div className="prog-back"><div className="prog-parent"><div className="graphic-div"></div><div className="prog-dot"></div>
</div></div>
                 
                 </div>
            </div>
        </div>
        <div className="services-div">
            <h1>Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <ul type="none">
            <li>
                <div className="round-box">
                <img src={ux}/> <br/>
                <h2>UI/UX</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                    </li>
                <li>
                <div className="round-box">
                <img src={web}/> <br/>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                    </li>
                <li>
                <div className="round-box">
                <img src={ui}/> <br/>
                <h2>App Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                    </li>
                <li>
                <div className="round-box">
                <img src={graphic}/> <br/>
                <h2>Graphic Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                    </li>
            </ul>
        </div>
        <div className="my-projects">
        <h1>My Projects</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>        
        <div className="pro-type">
            <ul type="none">
            <li>All</li>
            <li>UI/UX</li>
            <li>Web Design</li>
            <li>App Design</li>
            <li>Graphic Design</li>
            </ul>
            </div>
            <div className="work">
            <div className="box-div">
                <div>
            <div className="image-cls"></div>
                <p>Web Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div">
                <div>
            <div className="image-cls"></div>
                <p>Web Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div">
                <div>
            <div className="image-cls"></div>
                <p>Web Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            
            </div>

        </div>
        <div className="test">
        <h1>Testimonials</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>        
<div className="test-divs">
            <div className="message">
            <div className="content-body2">
     <img src={profile} height="200"/>
                 <div><p><span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<span>"</span><br/><span className="bl">Rakesh Patel</span><br/> CEO</p>
    </div>
            </div>  </div>
            <div className="message">
            <div className="content-body2">
     <img src={profile} height="200"/>
                 <div><p><span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<span>"</span><br/><span className="bl">Rakesh Patel</span><br/> CEO</p>
    </div>
            </div></div>
            <div className="message">
            <div className="content-body2">
     <img src={profile} height="200"/>
                 <div><p><span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<span>"</span><br/><span className="bl">Rakesh Patel</span><br/> CEO</p>
      </div>
            </div>
            </div>
    </div>
    <div className="together">
        <h1>Lets Design Together</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p> 
        <div>
            <input type="text"/><button>Contact Me</button>
            </div>
        </div>
    </div>
    <div className="bottom-nav">
            <div style={{height:"50px"}}></div>
         <div className="nav"><img src={logo} height="60"/> 
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
            </div><br/>
            <div className="copyright">&copy; 2023 <span>Sahil Verma</span> All Right Reserved , Inc.</div>
        </div>
  </div>
  </div>
  );
}

export default App;
