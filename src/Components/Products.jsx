import { motion } from "framer-motion";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Beef",
    price: 7500,
    image: "/images/bonelessbeef.jpeg",
  },
  {
    id: 2,
    name: "Goat Meat",
    price: 8500,
    image: "/images/wholegoat.jpeg",
  },
  {
    id: 3,
    name: "Shaki",
    price: 7500,
    image: "/images/shaki1.jpeg",
  },
  {
    id: 4,
    name: "Liver",
    price: 7000,
    image: "/images/liver1.jpeg",
  },
  {
    id: 5,
    name: "Cow Skin (Kpomo)",
    price: 7000,
    image: "/images/cowskin.jpeg",
  },
  {
    id: 6,
    name: "Cow Head",
    price: 7500,
    image: "/images/cowhead.jpeg",
  },
  {
    id: 7,
    name: "Fillet Steak (Tenderlion)",
    price: 8500,
    image: "/images/filetsteak.jpeg",
  },
  {
    id: 8,
    name: "Ram",
    price: 8500,
    image: "/images/ram1.jpeg",
  },
  {
    id: 9,
    name: "Cow Leg",
    price: 7800,
    image: "/images/cowleg2.jpeg",
  },
  {
    id: 10,
    name: "Cow Tail (Skin)",
    price: 7800,
    image: "/images/cowleg1.jpeg",
  },
  {
    id: 10,
    name: "Cow Tail (Roasted)",
    price: 7800,
    image: "/images/cowtail.jpeg",
  },
  {
    id: 12,
    name: "Minced Meat",
    price: 7500,
    image: "/images/grindedmeat.jpeg",
  },
  {
    id: 13,
    name: "Kidney",
    price: 7500,
    image: "/images/kidney.jpeg",
  },
  {
    id: 14,
    name: "Chicken",
    price: 6000,
    image: "/images/chicken.jpeg",
  },
];

function Products({ addToCart }) {
  return (
    <section className="products-section" id="products">

      {/* Background Glows */}
      <div className="products-glow products-glow-left"></div>
      <div className="products-glow products-glow-right"></div>

      <div className="products-container">

        {/* =========================
            HEADER
        ========================= */}
        <motion.div
          className="products-header"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="products-label">
            <span></span>
            Fresh Selection
            <span></span>
          </div>

          <h2>
            Our <span>Products</span>
          </h2>

          <p>
            Quality meat products carefully selected and supplied
            by Platinum Farida Foods Services Nig. Ltd.
          </p>

        </motion.div>


        {/* =========================
            PRODUCTS GRID
        ========================= */}
        <motion.div
          className="products-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >

          {products.map((product) => (
            <motion.article
              className="product-card"
              key={product.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 45,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                  },
                },
              }}
              whileHover={{
                y: -7,
              }}
            >

              {/* =========================
                  IMAGE
              ========================= */}
              <div className="product-image-wrapper">

                <img
                  src={product.image}
                  alt={`${product.name} - Platinum Farida`}
                  className="product-image"
                />

                <div className="product-image-overlay"></div>

                <span className="product-badge">
                  Fresh
                </span>

              </div>


              {/* =========================
                  CONTENT
              ========================= */}
              <div className="product-content">

                <div className="product-info">

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    ₦{product.price.toLocaleString()}
                  </p>

                </div>


                {/* ADD TO CART */}
                <motion.button
                  type="button"
                  className="add-cart-button"
                  onClick={() => addToCart(product)}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <span>+</span>
                  Add to Cart
                </motion.button>

              </div>

            </motion.article>
          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default Products;