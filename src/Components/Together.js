import React, { useState } from "react";

const Together = () => {
  const [idea, setIdea] = useState("");

  const contactMe = () => {
    if (!idea.trim()) return;
    window.open(
      `mailto:26maysahil@gmail.com?subject=Let's%20Collab&body=${encodeURIComponent(
        idea
      )}`
    );
    setIdea("");
  };

  return (
    <div className="together" id="together">
      <h1 data-aos="fade-right">Let's Design Together</h1>
      <p className="desc" data-aos="fade-up">
        Got a killer website or app idea? Let's turn your vision into reality.
        Together, we'll craft stunning, user-friendly designs that captivate
        your audience.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          contactMe();
        }}
        className="together-form"
      >
        <input
          id="desText"
          type="text"
          placeholder="Share your idea..."
          aria-label="Project Idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          data-aos="fade-right"
        />
        <button type="submit" disabled={!idea.trim()} data-aos="fade-left">
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Together;
