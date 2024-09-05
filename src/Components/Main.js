import profile from '../image/profile.png';

const Main = () => {
    const data = {
        facebook: 'https://www.facebook.com/profile.php?id=100028138461886',
        linkedin: 'https://www.linkedin.com/in/sahil-verma1',
        github: 'https://github.com/Sahil-Coder1'
    }

    const contactMe = () => {
        window.open('mailto:26maysahil@gmail.com&subject=Lets Collabe&body=' + document.getElementById("desText").value);
        document.getElementById("desText").value = "";
    };

    return (
        <div div="main">
            <div className='line' />
            <div className="content-body">
                <div className="div-name">
                    <h3>Hi I am</h3>
                    <h2>Sahil Verma</h2>
                    <h1>UI & UX <p>Designer</p></h1>
                    <p>A passionate Full Stack Web & Android Developer 🚀 having an<br /> experience of building Web and Mobile applications with JavaScript / Reactjs / Java  and some other cool libraries and frameworks.</p>
                    <button className="hire-btn" onClick={contactMe}>Hire Me</button>
                </div>

                <div className="div-img"><div className='container-img'><div className='strip'></div></div>

                    <img alt='logo' src={profile} /><br />

                    <a href={data.facebook}> <i className="fa-brands fa-facebook"></i></a>&nbsp;&nbsp;&nbsp; <i className="fa-brands fa-twitter"></i>&nbsp;&nbsp;&nbsp;<a href={data.github}><i className="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;<a href={data.linkedin}><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>



        </div>

    )
}

export default Main;