import "./EventsCTA.css";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

function EventsCTA() {
  return (
    <section className="events-cta">

      <div className="events-cta-container">

        <motion.div
          className="events-cta-box"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="events-cta-badge">

            <CalendarDays size={18} />

            Join Our Startup Community

          </div>

          <h2>

            Don't Miss Our

            <span>Upcoming Events</span>

          </h2>

          <p>

            Learn from successful founders, connect with investors,
            participate in workshops, and grow your startup through
            our exclusive events and networking sessions.

          </p>

          <div className="events-cta-buttons">

            <button className="events-cta-primary">

              Register Now

              <ArrowRight size={18} />

            </button>

            <button className="events-cta-secondary">

              View All Events

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default EventsCTA;