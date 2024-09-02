const Together = () => {

    const contactMe = () => {
        window.open('mailto:26maysahil@gmail.com&subject=Lets Collabe&body=' + document.getElementById("desText").value);
        document.getElementById("desText").value = "";
    };
    return(
        <div className="together" id='together'>
        <h1>Lets Design Together</h1>
        <p className='desc'>Do you have a vision for a stunning website or app, but aren't sure how to bring it to life? Let's collaborate! I thrive on working closely with clients to translate their ideas into beautiful, user-friendly designs. We'll brainstorm together, explore different concepts, and refine everything until we create something truly remarkable.</p>
        <div>
            <input id='desText' type="text" placeholder='Your Idea' /><button onClick={contactMe}>Contact Me</button>
        </div>
    </div>
    )
}

export default Together;