import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import "./Navbar.css";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <div className="logo-mark">
            <img
              src="/images/pff.jpeg"
              alt="Platinum Farida Foods Logo"
            />
          </div>

          <div className="logo-text">
            <span>PLATINUM</span>
            <strong>FARIDA</strong>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#order">How to Order</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">

          {/* ORDER BUTTON */}
          <a
            href="#products"
            className="order-button"
            onClick={closeMenu}
          >
            Order Now
          </a>

          {/* CART */}
          <a
            href="#cart"
            className="cart-button"
            aria-label="Shopping cart"
            onClick={closeMenu}
          >
            <ShoppingCart size={19} />

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </a>

          {/* HAMBURGER */}
          <button
            type="button"
            className={`menu-button ${
              menuOpen ? "open" : ""
            }`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* MOBILE MENU */}
        <nav
          className={`mobile-nav ${
            menuOpen ? "mobile-nav-open" : ""
          }`}
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#products" onClick={closeMenu}>
            Products
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#order" onClick={closeMenu}>
            How to Order
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#products"
            className="mobile-order-button"
            onClick={closeMenu}
          >
            Order Now
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;