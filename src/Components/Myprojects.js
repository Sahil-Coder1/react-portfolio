import React from "react";
import  {useEffect} from "react";
import webdemo from '../image/web-page1.png';
import uxu from '../image/uiux.png';


const Myprojects = () => {

    useEffect(() => {
        showWeb();
    }, []);
    
    const showWeb = () => {
        removeAll();
        setVisible("box4");
        setVisible("box5");
        setVisible("box6");
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
                        <div className="box-div" id='box4'>
                            <div>
                                <img alt='logo' src={webdemo} className="image-cls" />
                                <p>Web Design</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>
                        <div className="box-div" id='box5'>
                            <div>
                                <img alt='logo' src={webdemo} className="image-cls" />
                                <p>Web Design</p>
                                <h3>App Download Landing Page Design</h3>
                            </div>
                        </div>
                        <div className="box-div" id='box6'>
                            <div>
                                <img alt='logo' src={webdemo} className="image-cls" />
                                <p>Web Design</p>
                                <h3>App Download Landing Page Design</h3>
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
