import "./InvestorsCTA.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function InvestorsCTA() {
  return (
    <section className="investor-cta-section">

      <div className="investor-cta-container">

        <div className="investor-cta-box">

          <h2>
            Ready To Invest In The Next Unicorn?
          </h2>

          <p>
            Join StartupHub's investor network to discover innovative startups,
            connect with ambitious founders, and unlock high-growth investment
            opportunities across multiple industries.
          </p>

          <Link
            to="/register"
            className="investor-cta-btn"
          >

            Become an Investor

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}

export default InvestorsCTA;