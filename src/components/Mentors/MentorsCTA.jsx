import "./MentorsCTA.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function MentorsCTA() {
  return (
    <section className="mentors-cta">

      <div className="mentors-cta-container">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mentors-cta-box"
        >

          <span className="mentors-cta-badge">
          
          </span>

          <h2>

            Ready To Learn From

            <span>Experienced Mentors?</span>

          </h2>

          <p>

            Connect with successful entrepreneurs, investors, and
            industry experts who can guide your startup from idea
            to successful business.

          </p>

          <div className="mentors-cta-buttons">

            <button className="cta-primary">

              Find A Mentor

              <ArrowRight size={18} />

            </button>

            
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default MentorsCTA;