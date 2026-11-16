
function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        THE LITTLE BREW<span>.</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
      </div>

      <a href="#contact" className="nav-button">
        Visit Us
      </a>

    </nav>
  );
}

export default Navbar;
