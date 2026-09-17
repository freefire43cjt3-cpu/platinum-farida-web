import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-left"></div>
      <div className="footer-glow footer-glow-right"></div>

      <div className="footer-container">

        {/* TOP FOOTER */}
        <div className="footer-grid">

          {/* BRAND */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="footer-logo">
              <div className="footer-logo-mark">
                <img
                  src="/images/pdflogo.jpeg"
                  alt="Platinum Farida Foods Logo"
                />
              </div>

              <div className="footer-logo-text">
                <small>PLATINUM</small>
                <strong>FARIDA</strong>
              </div>
            </a>

            <p>
              Quality meat, fresh cuts and trusted service.
              Platinum Farida is committed to providing
              carefully selected meat with care and quality.
            </p>

            <span className="footer-established">
              EST. 2014
            </span>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>QUICK LINKS</h3>

            <ul>
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#products">Products</a>
              </li>

              <li>
                <a href="#gallery">Gallery</a>
              </li>

              <li>
                <a href="#order">How to Order</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            className="footer-column footer-contact"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>CONTACT</h3>

            <div className="footer-contact-item">
              <MapPin size={17} />

              <span>
                No. 30B Yakubu Gowon Way,
                <br />
                Jos, Plateau State
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={17} />

              <a href="tel:+2348036453718">
                +234 803 645 3718
              </a>
            </div>

            <div className="footer-contact-item">
              <Mail size={17} />

              <a href="mailto:platinumfaridafoods@gmail.com">
                platinumfaridafoods@gmail.com
              </a>
            </div>
          </motion.div>

          {/* WHATSAPP */}
          <motion.div
            className="footer-column footer-socials"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>WHATSAPP</h3>

            <p>
              Have an enquiry or want to place an order?
              Chat with Platinum Farida directly on WhatsApp.
            </p>

            <motion.a
              href="https://wa.me/2348036453718"
              className="whatsapp-link"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <MessageCircle size={19} />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

        </div>

        {/* DIVIDER */}
        <div className="footer-divider"></div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">

          <p>
            © 2026 Platinum Farida Foods Services Nig. Ltd.
            All rights reserved.
          </p>

          <span>
            RC 1164802
          </span>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;