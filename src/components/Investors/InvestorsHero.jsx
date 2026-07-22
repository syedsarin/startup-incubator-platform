import "./InvestorsHero.css";
import { motion } from "framer-motion";
import { ArrowRight, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

function InvestorsHero() {
  return (
    <section className="investor-hero">

      <div className="investor-hero-container">

        <motion.div
          className="investor-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className="investor-badge">

            <Landmark size={18} />

            Investor Network

          </div>

          <h1>

            Connect With

            <span>High Potential Startups</span>

          </h1>

          <p>

            Discover innovative startups, connect with visionary founders,
            explore investment opportunities, and help shape the future of
            entrepreneurship through StartupHub.

          </p>

          <Link
            to="/register"
            className="investor-btn"
          >

            Become an Investor

            <ArrowRight size={18} />

          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default InvestorsHero;