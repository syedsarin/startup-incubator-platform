import "./MentorsHero.css";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

function MentorsHero() {
  return (
    <section className="mentors-hero">

      <div className="mentors-hero-container">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mentors-hero-content"
        >

          <div className="mentors-badge">

            <Users size={18} />

            Learn From Industry Experts

          </div>

          <h1>

            Meet Our

            <span>Expert Mentors</span>

          </h1>

          <p>

            Learn from experienced entrepreneurs, investors, and
            industry leaders who guide startups through every stage
            of their journey, from idea validation to business growth.

          </p>

          <div className="mentors-buttons">

            <button className="primary-btn">

              Connect Now

              <ArrowRight size={18} />

            </button>

            

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default MentorsHero;