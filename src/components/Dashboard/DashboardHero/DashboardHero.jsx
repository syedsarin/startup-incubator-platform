import "./DashboardHero.css";
import { ArrowRight } from "lucide-react";

function DashboardHero() {
  return (
    <section className="dashboard-hero">

      <div className="dashboard-hero-content">

        <span className="hero-badge">
          🚀 StartupHub Incubation
        </span>

        <h2>
          Welcome Back,
          <span> Syed Sarin</span>
        </h2>

        <p>
          Track your startup progress, manage applications,
          connect with mentors, and prepare for funding from one
          central dashboard.
        </p>

        <button className="hero-btn">
          Continue Application
          <ArrowRight size={18} />
        </button>

      </div>

    </section>
  );
}

export default DashboardHero;