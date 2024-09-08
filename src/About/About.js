import profile from '../image/profile.png';

const About = () => {
    return (<div >
        <div className="content-body" id='content-body' >
            <div className="div-img" id="sec-img"><div className='stripe2' />
                <img alt='logo' src={profile} height="500" /><br />
            </div>
            <div className="div-name2" >

                <h1>About Me</h1>
                <p>I fell in love with Programming and Designing because feels like haven<br />I am fluent in classics like C , HTML , JavaScript , Java an React
                    <br />My field of Interest's are building new Web & Android Design and Products

                </p><br />
                <div className="experience-meter">
                    UX<br />
                    <div className="prog-back"><div className="prog-parent"><div className="ux-div"></div><div className="prog-dot"></div></div></div>
                    Website Design<br />
                    <div className="prog-back"><div className="prog-parent"><div className="web-div"></div><div className="prog-dot"></div>
                    </div></div>
                    App Design<br />
                    <div className="prog-back"><div className="prog-parent"><div className="app-div"></div><div className="prog-dot"></div>
                    </div></div>
                    Android Development<br />
                    <div className="prog-back"><div className="prog-parent"><div className="graphic-div"></div><div className="prog-dot"></div>
                    </div></div>

                </div>
            </div>
        </div>
    </div>)
}

export default About;