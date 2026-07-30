
import "./InvestmentOpportunities.css";
import { motion } from "framer-motion";
import {
  Building2,
  IndianRupee,
  PieChart,
  ArrowRight,
} from "lucide-react";

const opportunities = [
  {
    id: 1,
    startup: "AgriTech Solutions",
    industry: "Agriculture",
    funding: "₹50 Lakhs",
    equity: "10%",
    stage: "Seed",
  },
  {
    id: 2,
    startup: "HealthAI",
    industry: "Healthcare",
    funding: "₹1.2 Crores",
    equity: "15%",
    stage: "Series A",
  },
  {
    id: 3,
    startup: "EduNext",
    industry: "Education",
    funding: "₹80 Lakhs",
    equity: "12%",
    stage: "Seed",
  },
];

function InvestmentOpportunities() {
  return (
    <section className="investment-opportunities">

      <div className="investment-header">

        <h2>Investment Opportunities</h2>

        <p>
          Explore promising startups looking for investment.
        </p>

      </div>

      <div className="investment-grid">

        {opportunities.map((item, index) => (

          <motion.div
            key={item.id}
            className="investment-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >

            <div className="investment-logo">

              <Building2 size={40} />

            </div>

            <h3>{item.startup}</h3>

            <div className="investment-info">

              <p>
                <strong>Industry</strong>
                <span>{item.industry}</span>
              </p>

              <p>
                <strong>Funding</strong>
                <span>{item.funding}</span>
              </p>

              <p>
                <strong>Equity</strong>
                <span>{item.equity}</span>
              </p>

              <p>
                <strong>Stage</strong>
                <span>{item.stage}</span>
              </p>

            </div>

            <button className="view-details-btn">

              View Details

              <ArrowRight size={18} />

            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default InvestmentOpportunities;