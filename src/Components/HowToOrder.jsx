import { motion } from "framer-motion";
import "./HowToOrder.css";

const steps = [
  {
    number: "01",
    title: "Choose Your Meat",
    description:
      "Browse our fresh meat selection and choose the cuts you need.",
  },
  {
    number: "02",
    title: "Add to Cart",
    description:
      "Select the quantity you want and add your meat to the cart.",
  },
  {
    number: "03",
    title: "Review Your Order",
    description:
      "Check your selected items, quantities and order details.",
  },
  {
    number: "04",
    title: "Confirm Your Order",
    description:
      "Submit your order and we'll get everything ready for you.",
  },
];

function HowToOrder() {
  return (
    <section className="how-order-section" id="order">
      <div className="how-order-glow how-order-glow-left"></div>
      <div className="how-order-glow how-order-glow-right"></div>

      <div className="how-order-container">

        {/* HEADER */}
        <motion.div
          className="how-order-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="how-order-label">
            <span></span>
            SIMPLE PROCESS
            <span></span>
          </div>

          <h2>
            How To <span>Order</span>
          </h2>

          <p>
            Getting fresh, quality meat from Platinum Farida is simple.
            Choose what you need, add it to your cart and place your order.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="how-order-grid">
          {steps.map((step, index) => (
            <motion.div
              className="how-order-card"
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -7 }}
            >
              <div className="step-number">
                {step.number}
              </div>

              <div className="step-line"></div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="how-order-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div>
            <span>READY TO ORDER?</span>
            <h3>Find your perfect cut today.</h3>
          </div>

          <a href="#products">
            Browse Products
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default HowToOrder;