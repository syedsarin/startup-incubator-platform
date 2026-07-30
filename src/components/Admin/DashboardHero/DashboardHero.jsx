import "./DashboardHero.css";
import { motion } from "framer-motion";

function DashboardHero() {
  return (
    <motion.section
      className="admin-dashboard-hero"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="admin-hero-content">

        <h1>Welcome Admin 👋</h1>

        <p>
          Manage startups, investors, mentors, programs, events,
          and monitor the overall platform from one place.
        </p>

      </div>

    </motion.section>
  );
}

export default DashboardHero;