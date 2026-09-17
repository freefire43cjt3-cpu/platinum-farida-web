import "./Contact.css";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Send,
} from "lucide-react";

function Contact() {
  const contactDetails = [
    {
      icon: MapPin,
      label: "OUR LOCATION",
      value: (
        <>
          Ohia-Ekposikpo,
          <br />
          Off PH/Aba Expressway,
          <br />
          Elelenwo Town,
          <br />
          Obio/Akpor LGA,
          <br />
          Port-Harcourt, Rivers State
        </>
      ),
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+234 803 645 3718",
    },
    {
      icon: Mail,
      label: "EMAIL",
      value: "platinumfaridafoods@gmail.com",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow contact-glow-left"></div>
      <div className="contact-glow contact-glow-right"></div>

      <div className="contact-container">

        {/* HEADER */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-label">
            <span></span>
            <p>Get In Touch</p>
            <span></span>
          </div>

          <h2>
            Let's Talk<span>.</span>
          </h2>

          <p>
            Have a question, need more information, or want to place
            an order? Get in touch with Platinum Farida Foods today.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="contact-grid">

          {/* INFORMATION */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-info-line"></div>

            <div className="contact-info-header">
              <span>PLATINUM FARIDA</span>

              <h3>
                We'd love to
                <strong> hear from you.</strong>
              </h3>

              <p>
                Reach out to us for premium meat products,
                enquiries, orders, or any information about our
                services.
              </p>
            </div>

            <div className="contact-details">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="contact-detail"
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <div className="contact-detail-icon">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div className="contact-detail-content">
                      <span>{item.label}</span>

                      <div>{item.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* BUSINESS INFORMATION */}
            <div className="business-info">
              <div className="business-info-header">
                <Building2 size={17} />

                <span>Business Information</span>
              </div>

              <div className="business-row">
                <span>Business</span>

                <strong>
                  Platinum Farida Foods Services Nig. Ltd.
                </strong>
              </div>

              <div className="business-row">
                <span>Established</span>

                <strong>Jan. 2014</strong>
              </div>
            </div>

            {/* DIRECTIONS */}
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Ohia-Ekposikpo%2C%20Off%20PH%2FAba%20Expressway%2C%20Elelenwo%20Town%2C%20Obio%2FAkpor%20LGA%2C%20Port-Harcourt%2C%20Rivers%20State"
              target="_blank"
              rel="noreferrer"
              className="directions-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin size={15} />
              Get Directions
            </motion.a>
          </motion.div>

          {/* FORM */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-form-header">
              <span>SEND A MESSAGE</span>

              <h3>How can we help?</h3>

              <p>
                Fill out the form and our team will get back to you.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xaenwarq"
              method="POST"
              className="contact-form"
            >
              <div className="contact-form-row">

                <div className="contact-form-group">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

              </div>

              <div className="contact-form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234..."
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us how we can help..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="contact-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={15} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* FOOTER TEXT */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Platinum Farida Foods Services Nig. Ltd. • Est. Jan. 2014
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;