import { motion } from "framer-motion";
import "./About.css";

function About() {
  const stats = [
    {
      number: "100%",
      label: "Fresh Daily",
    },
    {
      number: "Premium",
      label: "Quality Cuts",
    },
    {
      number: "Trusted",
      label: "Service",
    },
  ];

  return (
    <section className="about-section" id="about">

      {/* Background Glow */}
      <div className="about-glow about-glow-left"></div>
      <div className="about-glow about-glow-right"></div>

      <div className="about-container">

        {/* =========================
            IMAGE
        ========================= */}
        <motion.div
          className="about-image-side"
          initial={{
            opacity: 0,
            x: -70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >

          <div className="about-image-frame">

            <div className="about-image-wrapper">

              <motion.img
                src="/images/aboutsection.jpeg"
                alt="Premium fresh meat cuts"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.04,
                }}
              />

              <div className="about-image-overlay"></div>

              {/* Image Label */}
              <div className="about-image-label">
                <span>PLATINUM FARIDA</span>
                <strong>Quality You Can Trust</strong>
              </div>

            </div>

          </div>

          {/* Floating Badge */}
          <motion.div
            className="about-floating-badge"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            <div className="badge-icon">
              ✓
            </div>

            <div>
              <small>OUR PROMISE</small>
              <strong>Fresh & Quality</strong>
            </div>
          </motion.div>

        </motion.div>


        {/* =========================
            TEXT
        ========================= */}
        <motion.div
          className="about-content"
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >

          {/* Section Label */}
          <div className="about-label">
            <span></span>
            About Platinum Farida
          </div>


          {/* Heading */}
          <h2>
            Quality You Can
            <br />
            <span>Trust.</span>
          </h2>


          {/* Description */}
          <p className="about-intro">
            At Platinum Farida, we believe good meals start with
            quality meat. We provide carefully selected fresh cuts
            with a strong focus on quality, cleanliness and
            dependable service.
          </p>


          <p className="about-description">
            From beef and goat meat to ram and other carefully
            selected cuts, our goal is simple — to make it easier
            for you to get quality meat prepared to your
            preference.
          </p>


          {/* =========================
              STATS
          ========================= */}
          <div className="about-stats">

            {stats.map((stat, index) => (
              <motion.div
                className="about-stat"
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <strong>
                  {stat.number}
                </strong>

                <span>
                  {stat.label}
                </span>
              </motion.div>
            ))}

          </div>


          {/* CTA */}
          <motion.a
            href="#products"
            className="about-button"
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Explore Our Products
            <span>→</span>
          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}

export default About;