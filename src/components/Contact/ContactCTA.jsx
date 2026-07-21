import "./ContactCTA.css";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

function ContactCTA() {
  return (
    <section className="contact-cta">

      <div className="contact-cta-container">

        <motion.div
          className="contact-cta-box"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="contact-cta-badge">

            <Rocket size={18} />

            Start Your Journey

          </div>

          <h2>

            Have A Startup Idea?

            <span>Let's Build It Together</span>

          </h2>

          <p>

            Connect with StartupHub and get access to mentors,
            resources, and opportunities that help transform your
            ideas into successful businesses.

          </p>

          <button>

            Apply Now

            <ArrowRight size={18} />

          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactCTA;