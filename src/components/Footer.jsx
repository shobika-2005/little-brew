
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>THE LITTLE BREW<span>.</span></h2>

          <p>
            A little coffee, a lot of love.
            Your cozy corner for beautiful
            moments and freshly brewed happiness.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>EXPLORE</h3>

          <a href="#home">Home</a>
          <a href="#about">Our Story</a>
          <a href="#menu">Our Menu</a>
          <a href="#gallery">Gallery</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>FIND US</h3>

          <p>Chennai, Tamil Nadu, India</p>
          <p>hello@thelittlebrew.com</p>
          <p>+91 98765 43210</p>
        </div>

        {/* OPENING HOURS */}
        <div className="footer-hours">
          <h3>OPENING HOURS</h3>

          <p>Monday – Friday</p>
          <span>9:00 AM – 10:00 PM</span>

          <p>Saturday – Sunday</p>
          <span>10:00 AM – 11:00 PM</span>
        </div>

      </div>

      <div className="footer-bottom">

        <p>© 2026 The Little Brew. All rights reserved.</p>

        <p>MADE WITH LOVE & COFFEE ☕</p>

      </div>

    </footer>
  );
}

export default Footer;
