import profile from '../image/profile.png';

const Testimonial = () => {
    return(
        <div className="test" id='test'>
        <div className='line'></div>
        <h1>Testimonials</h1>
        <p className='desc'>Below are a selection of clients I've had the pleasure of working with, accompanied by testimonials from a few of them.</p>
        <div className="test-divs">
            <div className="message">
                <div className="content-body2">
                    <img alt='logo' src={profile} height="200" />
                    <div><p><span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<span>"</span><br /><span className="bl">Rakesh Patel</span><br /> CEO</p>
                    </div>
                </div>  </div>
            <div className="message">
                <div className="content-body2">
                    <img alt='logo' src={profile} height="200" />
                    <div><p><span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<span>"</span><br /><span className="bl">Rakesh Patel</span><br /> CEO</p>
                    </div>
                </div></div>
            <div className="message">
                <div className="content-body2">
                    <img alt='logo' src={profile} height="200" />
                    <div><p><span>"</span>I was impressed with Sahil's ability to understand my needs and translate them into a beautiful and functional website. He was always available to answer my questions and make changes, and I am very happy with the final product. I would highly recommend Sahil to anyone looking for a web developer<span>"</span><br /><span className="bl">Rakesh Patel</span><br /> CEO</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Testimonial;