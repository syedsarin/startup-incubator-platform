import "./DashboardHero.css";
import { motion } from "framer-motion";

function DashboardHero() {
  return (
    <motion.section
      className="investor-dashboard-hero"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="hero-content">

        <h1>Welcome Investor 👋</h1>

        <p>
          Explore promising startups, track investment opportunities,
          and connect with founders through one dashboard.
        </p>

      </div>

    </motion.section>
  );
}

export default DashboardHero;