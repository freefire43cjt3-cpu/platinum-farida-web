import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./Gallery.css";

const galleryImages = [
  {
    src: "/images/freshbeefcut.jpeg",
    name: "Fresh Beef Cuts",
    alt: "Fresh beef cuts",
  },
  {
    src: "/images/premiumgoatmeat.jpeg",
    name: "Premium Goat Meat",
    alt: "Premium goat meat",
  },
  {
    src: "/images/specialtycuts.jpeg",
    name: "Specialty Cuts",
    alt: "Specialty meat cuts",
  },
  {
    src: "/images/qualitymeatselection.jpeg",
    name: "Quality Meat Selection",
    alt: "Quality meat selection",
  },
  {
    src: "/images/freshnesspreserved.jpeg",
    name: "Freshness Preserved",
    alt: "Fresh meat preserved for quality",
  },
  {
    src: "/images/carefullypackage.jpeg",
    name: "Carefully Packaged",
    alt: "Fresh meat packaging",
  },
  {
    src: "/images/bestquality.jpeg",
    name: "Quality You Can Trust",
    alt: "Premium quality meat",
  },
  {
    src: "/images/insideplatinumfarida.jpeg",
    name: "Inside Platinum Farida",
    alt: "Inside Platinum Farida",
  },
  {
    src: "/images/kidney.jpeg",
    name: "Premium Meat Selection",
    alt: "Premium meat selection",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    setSelectedImage((current) =>
      current === 0
        ? galleryImages.length - 1
        : current - 1
    );
  };

  const showNext = () => {
    setSelectedImage((current) =>
      current === galleryImages.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section className="gallery-section" id="gallery">

      {/* Background Glows */}
      <div className="gallery-glow gallery-glow-left"></div>
      <div className="gallery-glow gallery-glow-right"></div>

      <div className="gallery-container">

        {/* =========================
            HEADER
        ========================= */}
        <motion.div
          className="gallery-header"
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

          <div className="gallery-label">
            <span></span>
            Our Collection
            <span></span>
          </div>

          <h2>
            Take A Look <span>Inside</span>
          </h2>

          <p>
            Explore our selection of quality meat cuts,
            carefully handled and packaged with the
            standard you expect from Platinum Farida.
          </p>

        </motion.div>


        {/* =========================
            GALLERY GRID
        ========================= */}
        <motion.div
          className="gallery-grid"
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
                staggerChildren: 0.08,
              },
            },
          }}
        >

          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              className="gallery-item"
              onClick={() => setSelectedImage(index)}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
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
                y: -4,
              }}
              aria-label={`View ${image.name}`}
            >

              <img
                src={image.src}
                alt={image.alt}
              />

              <div className="gallery-overlay">
                <div className="gallery-overlay-content">

                  <h3>
                    {image.name}
                  </h3>

                  <span>
                    VIEW IMAGE
                  </span>

                </div>
              </div>

            </motion.button>
          ))}

        </motion.div>

      </div>


      {/* =========================
          LIGHTBOX
      ========================= */}
      <AnimatePresence>
        {selectedImage !== null && (

          <motion.div
            className="gallery-lightbox"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeLightbox}
          >

            {/* CLOSE */}
            <button
              type="button"
              className="gallery-close"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>


            {/* PREVIOUS */}
            <button
              type="button"
              className="gallery-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>


            {/* IMAGE */}
            <motion.div
              key={selectedImage}
              className="gallery-lightbox-content"
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <img
                src={
                  galleryImages[selectedImage].src
                }
                alt={
                  galleryImages[selectedImage].alt
                }
              />

              <div className="gallery-lightbox-info">

                <h3>
                  {galleryImages[selectedImage].name}
                </h3>

                <span>
                  {selectedImage + 1} /{" "}
                  {galleryImages.length}
                </span>

              </div>

            </motion.div>


            {/* NEXT */}
            <button
              type="button"
              className="gallery-next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Gallery;