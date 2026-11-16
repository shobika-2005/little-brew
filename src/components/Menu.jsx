
import "./Menu.css";

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Classic Espresso",
      description: "Rich, bold and beautifully brewed.",
      price: "₹120",
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=85",
      category: "COFFEE",
    },
    {
      id: 2,
      name: "Iced Caramel Latte",
      description: "Smooth coffee with sweet caramel.",
      price: "₹180",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
      category: "COLD COFFEE",
    },
    {
      id: 3,
      name: "Chocolate Croissant",
      description: "Flaky pastry with rich chocolate.",
      price: "₹150",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
      category: "DESSERT",
    },
  ];

  return (
    <section className="menu" id="menu">

      <div className="menu-heading">
        <p>OUR SELECTION</p>

        <h2>
          Made With Love,
          <span> Served With Care.</span>
        </h2>

        <div className="menu-line"></div>

        <p className="menu-subtitle">
          A little something for every mood.
        </p>
      </div>

      <div className="menu-grid">

        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>

            <div className="menu-image">
              <img src={item.image} alt={item.name} />
              <span>{item.category}</span>
            </div>

            <div className="menu-info">

              <div className="menu-title">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>

              <p className="menu-description">
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Menu;
