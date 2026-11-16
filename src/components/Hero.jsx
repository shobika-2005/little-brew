import "./Hero.css";
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-tag">
          EST. 2024 — BREWED WITH LOVE
        </p>

        <h1>
          A Little Coffee,
          <br />
          A Lot of <span>Love.</span>
        </h1>

        <p className="hero-description">
          Discover the beauty of slow mornings,
          freshly brewed coffee and little moments
          that make life beautiful.
        </p>

        <a href="#menu" className="hero-button">
          Explore Our Menu
        </a>

      </div>

      <div className="hero-bottom">
        <span>GOOD COFFEE. GOOD MOOD.</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>

    </section>
  );
}

export default Hero;
