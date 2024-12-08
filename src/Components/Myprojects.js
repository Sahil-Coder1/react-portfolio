import React from "react";
import  {useEffect} from "react";
import ai from '../image/ai-content.png';
import uxu from '../image/uiux.png';
import shortner from '../image/url-shortner.png';
import weather from '../image/weather.png';
import pass from '../image/passgen.png';

const Myprojects = () => {

    useEffect(() => {
        showWeb();
    }, []);
    
    const showWeb = () => {
        removeAll();
        setVisible("box4");
        setVisible("box5");
        setVisible("box6");
        setVisible("box13");
    };
    const showApp = () => {
        removeAll();
        setVisible("box7");
        setVisible("box8");
        setVisible("box9");
    };
    const showGraphic = () => {
        removeAll();
        setVisible("box10");
        setVisible("box11");
        setVisible("box12");
    };

    const uiux = () => {
        removeAll();
        setVisible("box1");
        setVisible("box2");
        setVisible("box3");
    };
    const setVisible = (view) => {
        document.getElementById(view).style.cssText = `display:block;`;
    };
  
    const removeOne = (view) => {
        document.getElementById(view).style.cssText = `
        display:none;
        `;
    };
    const removeAll = () => {
        removeOne("box1"); removeOne("box2");
        removeOne("box3"); removeOne("box4");
        removeOne("box5"); removeOne("box6");
        removeOne("box7"); removeOne("box8");
        removeOne("box9"); removeOne("box10");
        removeOne("box11"); removeOne("box12");
        removeOne("box13");
    };
    const showOne = (view) => {
        const box = document.getElementById(view);
        box.style.display = 'block';
    };
    const showAll = () => {
        showOne("box1"); showOne("box2");
        showOne("box3"); showOne("box4");
        showOne("box5"); showOne("box6");
        showOne("box7"); showOne("box8");
        showOne("box9"); showOne("box10");
        showOne("box11"); showOne("box12");
        showOne("box13");
    }

    return(
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
                                <img alt='logo' src={uxu} className="image-cls" />
                                <p>UI/UX</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>
                        <div className="box-div" id='box2'>
                            <div>
                                <img alt='logo' src={uxu} className="image-cls" />
                                <p>UI/UX</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>
                        <div className="box-div" id='box3'>
                            <div>
                                <img alt='logo' src={uxu} className="image-cls" />
                                <p>UI/UX</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>
                        <div className="box-div" id='box5'>
                            <div>
                            <a href="https://climatetown.vercel.app" target="_blank" style={{"text-decoration":"none"}}>
                            <img alt='logo' src={weather} className="image-cls" />
                                <p>Web Design</p>
                                <h3>Weather-react-app</h3></a>
                            </div>
                        </div>
                        <div className="box-div" id='box6'>
                            <div>
                            <a href="https://trial-f3b86.web.app" target="_blank" style={{"text-decoration":"none"}}>
                                <img alt='logo' src={shortner} className="image-cls" />
                                <p>Web Design</p>
                                <h3>Url Shortner</h3></a>
                            </div>
                        </div>
                        <div className="box-div" id='box4'>
                            <div>
                            <a href="https://ai-detector.netlify.app" target="_blank" style={{"text-decoration":"none"}}>
                                <img alt='logo' src={ai} className="image-cls" />
                                <p>Web Design</p>
                                <h3>AI-Content-Detector</h3></a>
                            </div>
                        </div>
                        <div className="box-div" id='box13'>
                            <div>
                            <a href="https://generatepasw.vercel.app" target="_blank" style={{"text-decoration":"none"}}>
                                <img alt='logo' src={pass} className="image-cls" />
                                <p>Web Design</p>
                                <h3>Password Generator</h3></a>
                            </div>
                        </div>
                        <div className="box-div" id='box7'>
                            <div>
                                <img alt='logo' src={uxu} className="image-cls" />
                                <p>App Design</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>
                        <div className="box-div" id='box8'>
                            <div>
                                <img alt='logo' src={uxu} className="image-cls" />
                                <p>App Design</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>
                        <div className="box-div" id='box9'>
                            <div>
                                <img alt='logo' src={uxu} className="image-cls" />
                                <p>App Design</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>
                        <div className="box-div" id='box10'>
                            <div>
                                <img alt='logo' src={uxu} className="image-cls" />
                                <p>Graphic Design</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>
                        <div className="box-div" id='box11'>
                            <div>
                                <img alt='logo' src={uxu} className="image-cls" />
                                <p>Graphic Design</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>
                        <div className="box-div" id='box12'>
                            <div>
                                <img alt='logo' src={uxu} className="image-cls" />
                                <p>Graphic Design</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>

                    </div>

        </div>
    )
}

export default Myprojects;
