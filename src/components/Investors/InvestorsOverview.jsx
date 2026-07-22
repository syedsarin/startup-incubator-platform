import "./InvestorsOverview.css";
import { motion } from "framer-motion";
import {
  HandCoins,
  TrendingUp,
  Building2,
  Landmark,
  BadgeCheck,
  Handshake,
  SearchCheck,
  ChartNoAxesCombined,
  UserPlus,
  FolderOpen,
  MessageCircle,
  IndianRupee,
  Rocket,
  Users,
  Award,
} from "lucide-react";

function InvestorsOverview() {
  const investorTypes = [
    {
      icon: HandCoins,
      title: "Angel Investors",
      description:
        "Invest in promising early-stage startups and mentor visionary founders.",
    },
    {
      icon: TrendingUp,
      title: "Venture Capital",
      description:
        "Discover scalable startups with high-growth investment opportunities.",
    },
    {
      icon: Building2,
      title: "Corporate Investors",
      description:
        "Partner with innovative startups to drive strategic business growth.",
    },
    {
      icon: Landmark,
      title: "Government Funding",
      description:
        "Explore grants, startup schemes, and public funding programs.",
    },
  ];

  const benefits = [
    {
      icon: BadgeCheck,
      text: "Verified Startups",
    },
    {
      icon: Handshake,
      text: "Founder Matching",
    },
    {
      icon: SearchCheck,
      text: "Due Diligence Support",
    },
    {
      icon: ChartNoAxesCombined,
      text: "High Growth Potential",
    },
  ];

  const process = [
    {
      icon: UserPlus,
      title: "Register",
    },
    {
      icon: FolderOpen,
      title: "Browse Startups",
    },
    {
      icon: MessageCircle,
      title: "Connect",
    },
    {
      icon: IndianRupee,
      title: "Invest",
    },
  ];

  const stats = [
    {
      icon: Rocket,
      number: "500+",
      label: "Startups",
    },
    {
      icon: Users,
      number: "120+",
      label: "Investors",
    },
    {
      icon: IndianRupee,
      number: "₹25Cr+",
      label: "Funding",
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
    },
  ];

  return (
    <>
      {/* Investor Categories */}

      <section className="investor-section">

        <div className="investor-container">

          <div className="section-heading">

            <p>Investment Opportunities</p>

            <h2>Choose Your Investment Path</h2>

          </div>

          <div className="investor-grid">

            {investorTypes.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  className="investor-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >

                  <Icon size={34} />

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Benefits */}

      <section className="investor-section light">

        <div className="investor-container">

          <div className="section-heading">

            <p>Why Invest With Us</p>

            <h2>Everything Investors Need</h2>

          </div>

          <div className="benefit-grid">

            {benefits.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.text}
                  className="benefit-card"
                >

                  <Icon size={28} />

                  {item.text}

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Investment Process */}

      <section className="investor-section">

        <div className="investor-container">

          <div className="section-heading">

            <p>Investment Journey</p>

            <h2>Simple 4 Step Process</h2>

          </div>

          <div className="process-grid">

            {process.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="process-card"
                >

                  <Icon size={34} />

                  <h3>{item.title}</h3>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="investor-section light">

        <div className="investor-container">

          <div className="stats-grid">

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.label}
                  className="stat-card"
                >

                  <Icon size={34} />

                  <h2>{item.number}</h2>

                  <p>{item.label}</p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

    </>
  );
}

export default InvestorsOverview;