
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85"
          alt="Warm and elegant coffee shop interior"
        />

        <div className="about-image-text">
          A PLACE TO SLOW DOWN
        </div>
      </div>

      <div className="about-content">

        <p className="about-tag">
          OUR STORY
        </p>

        <h2>
          More Than Coffee.
          <br />
          <span>A Feeling.</span>
        </h2>

        <p className="about-description">
          At The Little Brew, we believe that the
          best moments in life are often the simplest.
          A freshly brewed cup of coffee, a familiar
          smile and a place that feels like home.
        </p>

        <p className="about-description">
          Every cup we serve is made with care,
          passion and a love for bringing people
          together.
        </p>

        <a href="#menu" className="about-button">
          DISCOVER OUR MENU
        </a>

      </div>

    </section>
  );
}

export default About;
