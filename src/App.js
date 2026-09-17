import { useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products";
import Gallery from "./Components/Gallery";
import HowToOrder from "./Components/HowToOrder";
import Cart from "./Components/Cart";
import Payment from "./Components/Payment";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // INCREASE KG
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // DECREASE KG
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Navbar
        cartCount={cart.reduce(
          (total, item) => total + item.quantity,
          0
        )}
      />

      <Hero />

      <About />

      <Products addToCart={addToCart} />

      <Gallery />

      <HowToOrder />

      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      <Payment />

      <Contact />

      <Footer />
    </>
  );
}

export default App;