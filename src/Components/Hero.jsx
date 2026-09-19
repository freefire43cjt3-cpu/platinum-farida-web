import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Effects */}
      <div className="hero-glow hero-glow-left"></div>
      <div className="hero-glow hero-glow-right"></div>

      <div className="hero-container">

        {/* =========================
            HERO CONTENT
        ========================= */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <motion.div
            className="hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span></span>
            Premium Fresh Cuts
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            Quality Meat.
            <br />

            <span>Freshly Cut.</span>

            <br />

            Delivered With Care.
          </motion.h1>

          {/* HERO DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            Premium-quality beef, goat, ram and carefully selected
            meat cuts prepared with care for your home, business
            or special occasion.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
          >

            <motion.a
              href="#products"
              className="hero-primary-btn"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Order Now
              <span>→</span>
            </motion.a>

            <motion.a
              href="#about"
              className="hero-secondary-btn"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Discover Platinum Farida
            </motion.a>

          </motion.div>

          {/* Trust Points */}
          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
          >

            <div>
              <span></span>
              Quality Meat
            </div>

            <div>
              <span></span>
              Fresh Cuts
            </div>

            <div>
              <span></span>
              Trusted Service
            </div>

          </motion.div>

        </motion.div>

        {/* =========================
            HERO IMAGE
        ========================= */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.94,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        >

          <div className="hero-image-glow"></div>

          <motion.div
            className="hero-image-card"
            whileHover={{
              scale: 1.015,
            }}
          >

            <div className="hero-image-wrapper">

              <motion.img
                src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=1200&q=85"
                alt="Premium raw beef cuts"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.4,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.06,
                }}
              />

              <div className="hero-image-overlay"></div>

              <div className="hero-image-info">

                <div>
                  <small>PLATINUM FARIDA</small>

                  <h3>
                    Premium Quality Cuts
                  </h3>
                </div>

                <div className="hero-pf">
                  PF
                </div>

              </div>

            </div>

          </motion.div>

          {/* Floating Card */}
          <motion.div
            className="hero-floating-card"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
          >

            <small>OUR STANDARD</small>

            <strong>
              Fresh • Quality • Trusted
            </strong>

          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="hero-bottom-fade"></div>

    </section>
  );
}

export default Hero;