const Together = () => {
  const contactMe = () => {
    window.open(
        "mailto:26maysahil@gmail.com?subject=Let's%20Collabe&body=" +
        encodeURIComponent(document.getElementById("desText").value)
      );
    document.getElementById("desText").value = "";
  };
  return (
    <div className="together" id="together">
      <h1 data-aos="fade-right">Lets Design Together</h1>
      <p className="desc" data-aos="fade-up">
        Got a killer website or app idea? Let's turn your vision into reality.
        Together, we'll craft stunning, user-friendly designs that captivate
        your audience.
      </p>
      <div>
        <input id="desText" type="text" placeholder="Your Idea" data-aos="fade-right"/>
        <button onClick={contactMe} data-aos="fade-left">Contact Me</button>
      </div>
    </div>
  );
};

export default Together;
