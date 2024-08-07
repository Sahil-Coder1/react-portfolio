import logo from './image/logo.png';
import graphic from './image/graphic-design.png';
import profile from './image/profile.png';
import ui from'./image/ui-design.png';
import web from'./image/web-design.png';
import ux from'./image/ux-design.png';
import './App.css';
import './index.css';
import style from './style.css';
import script from './script';
import uxu from './image/uiux.png';
import webdemo from './image/web-page1.png';
import React , { useEffect } from 'react';
import cv from './resume/CV(Sahil Verma).pdf';
import backtoTop from './image/backtoTop.png';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

    useEffect(() => {
    showWeb();
    }, []);
    
    const linkedin = "https://www.linkedin.com/in/sahil-verma1";
    
      const setVisible =(view)=>{
       document.getElementById(view).style.cssText=`display:block;`;
      };
      const showWeb = () =>{
      removeAll(); 
      setVisible("box4");
      setVisible("box5");
      setVisible("box6");
       };
      const showApp = () =>{
      removeAll();
      setVisible("box7");
      setVisible("box8");
      setVisible("box9");
      };
      const showGraphic = () =>{
        removeAll();
        setVisible("box10");
      setVisible("box11");
      setVisible("box12");
      };

      const uiux = () =>{
        removeAll();
        setVisible("box1");
      setVisible("box2");
      setVisible("box3");
      };

      const removeOne =(view)=>{
        document.getElementById(view).style.cssText=`
        display:none;
        `;
       };
      const removeAll = () =>{
       removeOne("box1"); removeOne("box2");
       removeOne("box3"); removeOne("box4");
       removeOne("box5"); removeOne("box6");
       removeOne("box7"); removeOne("box8");
       removeOne("box9"); removeOne("box10");
       removeOne("box11"); removeOne("box12");
      };
      const showOne =(view)=>{
        const box = document.getElementById(view);
        box.style.display='block';
      };
      const showAll = () =>{
      showOne("box1");   showOne("box2");  
      showOne("box3");   showOne("box4");  
      showOne("box5");   showOne("box6");  
      showOne("box7");   showOne("box8");  
      showOne("box9");   showOne("box10");  
      showOne("box11");  showOne("box12");  
        
      };
      const contactMe = ()=>{
         window.open('mailto:26maysahil@gmail.com&subject=Lets Collabe&body='+document.getElementById("desText").value);
         document.getElementById("desText").value = "";
    };
    
    window.onscroll = () => {
        pageScroll();
    }
    const pageScroll = () => {
      if(document.documentElement.scrollTop > 500){
        document.getElementById("float").style.display="block";
      }else{
        document.getElementById("float").style.display="none";
      }
    }

  return (
    <div className='body'>
<head>
    <title>Sahil Verma - Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href={style}/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
        <div div="main">
        <SpeedInsights />
        <div className="header">
           <img  src={logo} height="60" alt='logo'/> 
            <h2><span>S</span>ahil Verma</h2>
            <div className="menu-container">
            <ul type="none">
            <a href='.'><li>Home</li></a>       
            <a href='#content-body'><li>About Me</li></a>    
             <a href='#services-div'><li>Services</li></a>
             <a href='#my-projects'><li>Projects</li></a>
             <a href='#test'><li>Testimonials</li></a>
             <a href='#together'><li>Contact</li></a>
            </ul>
                </div>
          <a href={cv} download='Sahil Verma.pdf'>  <button>Download CV</button></a>
        </div>
        <div className='line'/>
        <div className="content-body">
        <div className="div-name">
            <h3>Hi I am</h3>
            <h2>Sahil Verma</h2>
            <h1>UI & UX <p>Designer</p></h1>
            <p>A passionate Full Stack Web & Android Developer 🚀 having an<br/> experience of building Web and Mobile applications with JavaScript / Reactjs / Java  and some other cool libraries and frameworks.</p>
            <button className="hire-btn" onClick={contactMe}>Hire Me</button>
            </div>
          
            <div className="div-img"><div className='container-img'><div className='strip'></div></div>
            
            <img alt='logo' src={profile} /><br/>
               
               <a href='https://www.facebook.com/profile.php?id=100028138461886'> <i className="fa-brands fa-facebook"></i></a>&nbsp;&nbsp;&nbsp; <i className="fa-brands fa-twitter"></i>&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;<a href={linkedin}><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        
         <div className="content-body" id='content-body'>
            <div className="div-img" id="sec-img"><div style={{width: "200px" ,height: "40px" ,backgroundColor:"var(--primary)",opacity: "0.5", transform: "translateX(130px) translateY(210px)"}}></div>
            <img alt='logo' src={profile} height="500"/><br/>
            </div>
             <div className="div-name2">
        
            <h1>About Me</h1>
            <p>I fell in love with Programming and Designing because feels like haven<br/>I am fluent in classics like C , HTML , JavaScript , Java an React
            <br/>My field of Interest's are building new Web & Android Design and Products  

            </p><br/>
            <div className="experience-meter">
            UX<br/>
            <div className="prog-back"><div className="prog-parent"><div className="ux-div"></div><div className="prog-dot"></div></div></div>
            Website Design<br/>
              <div className="prog-back"><div className="prog-parent"><div className="web-div"></div><div className="prog-dot"></div>
</div></div>
            App Design<br/>
              <div className="prog-back"><div className="prog-parent"><div className="app-div"></div><div className="prog-dot"></div>
</div></div>
            Android Development<br/>
              <div className="prog-back"><div className="prog-parent"><div className="graphic-div"></div><div className="prog-dot"></div>
</div></div>
                 
                 </div>
            </div>
        </div>
        <div className="services-div" id="services-div">
        <div className='line'></div>
            <h1>Services</h1>
            <p className='desc'>Make your business shine online with multiple services designed just for you<br/>Some of the services are below</p>
            <ul type="none">
            <li>
                <div className="round-box">
                <img alt='logo' src={ux}/> <br/>
                <h2>UI/UX</h2>
                <p>I focus on creating a seamless and meaningful user experience by understanding user needs</p>
                </div>
                    </li>
                <li>
                <div className="round-box">
                <img alt='logo' src={web}/> <br/>
                <h2>Web Design</h2>
                <p>Includes visual,UX,and technical aspects,arranging elements,choosing best colors, and images.</p>
                </div>
                    </li>
                <li>
                <div className="round-box">
                <img alt='logo' src={ui}/> <br/>
                <h2>App Design</h2>
                <p>Creating the app's flow and structure,Making stylistic choices from colors to fonts, app security</p>
                </div>
                    </li>
                <li>
                <div className="round-box">
                <img alt='logo' src={graphic}/> <br/>
                <h2>App Development</h2>
                <p> The process of planning, designing, creating, testing, and deploying a software application</p>
                </div>
                 </li>
            </ul>
        </div>
        <div className="my-projects" id='my-projects'>
        <h1>My Projects</h1>
<p className='desc'>Here are several projects that I have worked on and would like to showcase.</p>        
        <div className="pro-type">
            <ul type="none">
            <li onClick={showAll}>All</li>
            <li onClick={uiux}>UI/UX</li>
            <li onClick={showWeb}>Web Design</li>
            <li onClick={showApp}>App Design</li>
            <li onClick={showGraphic}>Graphic Design</li>
            </ul>
            </div>
            
            <div className="work">
            <div className="box-div" id='box1'>
                <div>
            <img alt='logo' src={uxu} className="image-cls"/>
                <p>UI/UX</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box2'>
                <div>
            <img alt='logo' src={uxu} className="image-cls"/>
                <p>UI/UX</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box3'>
                <div>
            <img alt='logo' src={uxu} className="image-cls"/>
                <p>UI/UX</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box4'>
                <div>
            <img alt='logo' src={webdemo} className="image-cls"/>
                <p>Web Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box5'>
                <div>
            <img alt='logo' src={webdemo} className="image-cls"/>
                <p>Web Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box6'>
                <div>
            <img alt='logo' src={webdemo} className="image-cls"/>
                <p>Web Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box7'>
                <div>
            <img alt='logo' src={uxu} className="image-cls"/>
                <p>App Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box8'>
                <div>
            <img alt='logo' src={uxu} className="image-cls"/>
                <p>App Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box9'>
                <div>
            <img alt='logo' src={uxu} className="image-cls"/>
                <p>App Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box10'>
                <div>
            <img alt='logo' src={uxu} className="image-cls"/>
                <p>Graphic Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box11'>
                <div>
            <img alt='logo' src={uxu} className="image-cls"/>
                <p>Graphic Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>
            <div className="box-div" id='box12'>
                <div>
            <img alt='logo' src={uxu} className="image-cls"/>
                <p>Graphic Design</p>
                <h3>App Download Landing Page Design</h3>
                    </div>         
            </div>

            </div>
          
        </div>
        <div className="test" id='test'>
        <div className='line'></div>
        <h1>Testimonials</h1>
    <p className='desc'>Below are a selection of clients I've had the pleasure of working with, accompanied by testimonials from a few of them.</p>        
<div className="test-divs">
            <div className="message">
            <div className="content-body2">
     <img alt='logo' src={profile} height="200"/>
                 <div><p><span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<span>"</span><br/><span className="bl">Rakesh Patel</span><br/> CEO</p>
    </div>
            </div>  </div>
            <div className="message">
            <div className="content-body2">
     <img alt='logo' src={profile} height="200"/>
                 <div><p><span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<span>"</span><br/><span className="bl">Rakesh Patel</span><br/> CEO</p>
    </div>
            </div></div>
            <div className="message">
            <div className="content-body2">
     <img alt='logo' src={profile} height="200"/>
                 <div><p><span>"</span>I was impressed with Sahil's ability to understand my needs and translate them into a beautiful and functional website. He was always available to answer my questions and make changes, and I am very happy with the final product. I would highly recommend Sahil to anyone looking for a web developer<span>"</span><br/><span className="bl">Rakesh Patel</span><br/> CEO</p>
      </div>
            </div>
            </div>
    </div>
    </div>
    <div className="together" id='together'>
        <h1>Lets Design Together</h1>
            <p className='desc'>Do you have a vision for a stunning website or app, but aren't sure how to bring it to life? Let's collaborate! I thrive on working closely with clients to translate their ideas into beautiful, user-friendly designs. We'll brainstorm together, explore different concepts, and refine everything until we create something truly remarkable.</p> 
        <div>
            <input id='desText' type="text" placeholder='Your Idea'/><button onClick={contactMe}>Contact Me</button>
            </div>
        </div>
    </div>
    <div className="bottom-nav">
            <div style={{height:"50px"}}></div>
         <div className="nav"><img alt='logo' src={logo} height="60"/> 
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
           <p id="visits"></p> <div className="copyright">&copy; 2023 <span>Sahil Verma</span> All Right Reserved , Inc.</div>
        </div>
        <script src={script}></script>
        <div className='float' id='float'><a href='#top'><img src={backtoTop}/></a></div>
      
     </div>
     
  );
}
export default App;