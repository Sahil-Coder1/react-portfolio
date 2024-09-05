import './App.css';
import './index.css';
import style from './style.css';
import script from './script';
import React, { useEffect } from 'react';
import backtoTop from './image/backtoTop.png';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Header from './Header/Header';
import About from './About/About';
import Services from './Components/Services';
import Myprojects from './Components/Myprojects';
import Testimonial from './Components/Testimonial';
import Footer from './Footer/Footer';
import Together from './Components/Together';
import Main from './Components/Main';

function App() {

    window.onscroll = () => {
        pageScroll();
    }
    const pageScroll = () => {
        if (document.documentElement.scrollTop > 500) {
            document.getElementById("float").style.display = "block";
        } else {
            document.getElementById("float").style.display = "none";
        }
    }
    const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});
   
    return (
        <div className='body'>
             <head>
                <title>Sahil Verma - Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href={style} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
             <Header/>
            <SpeedInsights />
            <Main/>
            <About/>
                <Services/>
               <Myprojects/>
               <Testimonial/>
               <Together/>
           <Footer/>
            <script src={script}></script>
            <div className='cursor'/>
            <div className='float' id='float'><a href='#top'><img src={backtoTop} /></a></div>

        </div>

    );
}
export default App;