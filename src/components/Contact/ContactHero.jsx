import "./ContactHero.css";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
} from "lucide-react";

function ContactHero() {
  return (
    <section className="contact-hero">

      <div className="contact-hero-container">

        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="contact-badge">

            <Mail size={18} />

            Get In Touch

          </div>

          <h1>

            Let's Build Your

            <span>Startup Together</span>

          </h1>

        
          <div className="contact-buttons">

            <button className="contact-primary-btn">

              Contact Us

              <ArrowRight size={18} />

            </button>

            <button className="contact-secondary-btn">

              Book Consultation

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactHero;