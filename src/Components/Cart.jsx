import { useState } from "react";
import { motion } from "framer-motion";
import "./Cart.css";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    orderType: "Pickup",
    address: "",
    date: "",
    time: "",
    note: "",
  });

  const [sending, setSending] = useState(false);

  // =========================
  // UPDATE CUSTOMER DETAILS
  // =========================

  const updateCustomer = (e) => {
    const { name, value } = e.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // =========================
  // CART TOTAL
  // =========================

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // =========================
  // PLACE ORDER
  // =========================

  const handleOrder = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Please add at least one product to your cart.");
      return;
    }

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.date ||
      !customer.time
    ) {
      alert("Please fill in all required customer details.");
      return;
    }

    if (
      customer.orderType === "Delivery" &&
      !customer.address.trim()
    ) {
      alert("Please enter your delivery address.");
      return;
    }

    // =========================
    // ORDER ITEMS
    // =========================

    const orderItems = cart
      .map((item) => {
        const itemTotal =
          item.price * item.quantity;

        return (
          `• ${item.name} — ${item.quantity} kg × ` +
          `₦${item.price.toLocaleString()}/kg = ` +
          `₦${itemTotal.toLocaleString()}`
        );
      })
      .join("\n");

    // =========================
    // ORDER MESSAGE
    // =========================

    const message = `
NEW PLATINUM FARIDA ORDER

CUSTOMER
Name: ${customer.name}
Phone: ${customer.phone}

ORDER
${orderItems}

TOTAL: ₦${total.toLocaleString()}

ORDER TYPE: ${customer.orderType}

${
  customer.orderType === "Delivery"
    ? `DELIVERY ADDRESS: ${customer.address}`
    : "PICKUP: Customer will pick up the order."
}

DATE: ${customer.date}
TIME: ${customer.time}

NOTE:
${customer.note.trim() || "No additional note."}

Sent from Platinum Farida Website
    `.trim();

    setSending(true);

    try {
      // =========================
      // FORMSPREE
      // =========================

      const response = await fetch(
        "https://formspree.io/f/xaenwarq",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            subject: "New Platinum Farida Order",

            customer_name: customer.name,

            customer_phone: customer.phone,

            order_items: orderItems,

            total: `₦${total.toLocaleString()}`,

            order_type: customer.orderType,

            delivery_address:
              customer.orderType === "Delivery"
                ? customer.address
                : "Pickup",

            order_date: customer.date,

            order_time: customer.time,

            customer_note:
              customer.note.trim() ||
              "No additional note.",

            order_message: message,
          }),
        }
      );

      if (!response.ok) {
        let errorMessage =
          "Unable to submit your order.";

        try {
          const data = await response.json();

          errorMessage =
            data?.errors?.[0]?.message ||
            errorMessage;
        } catch {
          // Keep default error message
        }

        throw new Error(errorMessage);
      }

      // =========================
      // WHATSAPP
      // =========================

      const managerWhatsApp =
        "2348036453718";

      const whatsappURL =
        `https://wa.me/${managerWhatsApp}?text=` +
        encodeURIComponent(message);

      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

      // =========================
      // SUCCESS
      // =========================

      alert(
        "Your order has been submitted successfully!"
      );

      // =========================
      // RESET FORM
      // =========================

      setCustomer({
        name: "",
        phone: "",
        orderType: "Pickup",
        address: "",
        date: "",
        time: "",
        note: "",
      });
    } catch (error) {
      console.error(
        "Order submission error:",
        error
      );

      alert(
        `Order failed: ${
          error.message ||
          "Please try again."
        }`
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="cart-section"
      id="cart"
    >
      <div className="cart-glow cart-glow-left"></div>

      <div className="cart-glow cart-glow-right"></div>

      <div className="cart-container">

        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          className="cart-header"
          initial={{
            opacity: 0,
            y: 30,
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
          <div className="cart-label">
            <span></span>
            YOUR ORDER
            <span></span>
          </div>

          <h2>
            Complete Your{" "}
            <strong>Order</strong>
          </h2>

          <p>
            Review your selected products, choose your
            quantity and provide your details to place
            your order.
          </p>
        </motion.div>

        <div className="cart-layout">

          {/* =========================
              CART SUMMARY
          ========================= */}

          <motion.div
            className="cart-box"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="cart-box-header">
              <h3>Your Order</h3>

              <span>
                {totalQuantity}{" "}
                {totalQuantity === 1
                  ? "KG"
                  : "KGS"}
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">

                <div className="empty-cart-icon">
                  🛒
                </div>

                <h4>
                  Your cart is empty
                </h4>

                <p>
                  Browse our products and add
                  your preferred meat to your order.
                </p>

                <a href="#products">
                  Browse Products
                </a>
              </div>
            ) : (
              <>
                <div className="cart-items">

                  {cart.map((item) => {
                    const itemTotal =
                      item.price *
                      item.quantity;

                    return (
                      <motion.div
                        className="cart-item"
                        key={item.id}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                        />

                        <div className="cart-item-info">

                          <h4>
                            {item.name}
                          </h4>

                          <p>
                            ₦
                            {item.price.toLocaleString()}
                            /kg
                          </p>

                          <div className="kg-control">

                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(
                                  item.id
                                )
                              }
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              −
                            </button>

                            <span>
                              {item.quantity} kg
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(
                                  item.id
                                )
                              }
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              +
                            </button>

                          </div>

                        </div>

                        <strong>
                          ₦
                          {itemTotal.toLocaleString()}
                        </strong>

                      </motion.div>
                    );
                  })}

                </div>

                <div className="cart-total">
                  <span>
                    Order Total
                  </span>

                  <strong>
                    ₦
                    {total.toLocaleString()}
                  </strong>
                </div>
              </>
            )}
          </motion.div>

          {/* =========================
              CUSTOMER FORM
          ========================= */}

          <motion.form
            className="cart-box customer-form"
            onSubmit={handleOrder}
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <div className="cart-box-header">
              <h3>
                Customer Details
              </h3>

              <span>
                REQUIRED
              </span>
            </div>

            {/* NAME */}

            <div className="form-group">
              <label>
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={customer.name}
                onChange={updateCustomer}
                required
              />
            </div>

            {/* PHONE */}

            <div className="form-group">
              <label>
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="08012345678"
                value={customer.phone}
                onChange={updateCustomer}
                required
              />
            </div>

            {/* ORDER TYPE */}

            <div className="form-group">
              <label>
                Order Type *
              </label>

              <select
                name="orderType"
                value={customer.orderType}
                onChange={updateCustomer}
              >
                <option value="Pickup">
                  Pickup
                </option>

                <option value="Delivery">
                  Delivery
                </option>
              </select>
            </div>

            {/* DELIVERY ADDRESS */}

            {customer.orderType ===
              "Delivery" && (
              <div className="form-group">
                <label>
                  Delivery Address *
                </label>

                <textarea
                  name="address"
                  placeholder="Enter your full delivery address"
                  value={customer.address}
                  onChange={updateCustomer}
                  rows="3"
                  required
                ></textarea>
              </div>
            )}

            {/* DATE + TIME */}

            <div className="form-row">

              <div className="form-group">
                <label>
                  Preferred Date *
                </label>

                <input
                  type="date"
                  name="date"
                  value={customer.date}
                  onChange={updateCustomer}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Preferred Time *
                </label>

                <input
                  type="time"
                  name="time"
                  value={customer.time}
                  onChange={updateCustomer}
                  required
                />
              </div>

            </div>

            {/* NOTE */}

            <div className="form-group">
              <label>
                Additional Note
              </label>

              <textarea
                name="note"
                placeholder="Any special request?"
                value={customer.note}
                onChange={updateCustomer}
                rows="4"
              ></textarea>
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              className="place-order-button"
              disabled={
                cart.length === 0 ||
                sending
              }
            >
              {sending
                ? "Sending Order..."
                : "Place Order"}

              <span>
                {sending
                  ? "..."
                  : "→"}
              </span>
            </button>

            <p className="order-note">
              Your order will be sent to
              Platinum Farida by email
              and WhatsApp.
            </p>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Cart;