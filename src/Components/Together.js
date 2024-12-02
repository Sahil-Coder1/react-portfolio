const Together = () => {
  const contactMe = () => {
    window.open(
      "mailto:26maysahil@gmail.com&subject=Lets Collabe&body=" +
        document.getElementById("desText").value
    );
    document.getElementById("desText").value = "";
  };
  return (
    <div className="together" id="together">
      <h1>Lets Design Together</h1>
      <p className="desc">
        Got a killer website or app idea? Let's turn your vision into reality.
        Together, we'll craft stunning, user-friendly designs that captivate
        your audience.
      </p>
      <div>
        <input id="desText" type="text" placeholder="Your Idea" />
        <button onClick={contactMe}>Contact Me</button>
      </div>
    </div>
  );
};

export default Together;
