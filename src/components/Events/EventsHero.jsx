import "./EventsHero.css";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

function EventsHero() {
  return (
    <section className="events-hero">

      <div className="events-hero-container">

        <motion.div
          className="events-hero-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="events-badge">

            <CalendarDays size={18} />

            Startup Events & Workshops

          </div>

          <h1>

            Learn, Network &

            <span>Grow Together</span>

          </h1>

          <p>

            Attend startup events, workshops, networking sessions,
            hackathons, and investor meetups designed to help founders
            build, connect, and scale faster.

          </p>

          <div className="events-buttons">

            <button className="events-primary-btn">

              Explore Events

              <ArrowRight size={18} />

            </button>

            <button className="events-secondary-btn">

              View Calendar

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default EventsHero;