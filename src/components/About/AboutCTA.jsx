import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./AboutCTA.css";

function AboutCTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-box">

          <h2>
            Ready To Build Your Startup?
          </h2>

          <p>
            Create your StartupHub account and start your startup journey with
            mentorship, resources, and expert guidance.
          </p>

          <Link to="/register" className="cta-button">
            Register Now
            <ArrowRight size={18} />
          </Link>

        </div>
      </div>
    </section>
  );
}

export default AboutCTA;