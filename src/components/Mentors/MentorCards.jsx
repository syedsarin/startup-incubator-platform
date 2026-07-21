import "./MentorCards.css";
import { motion } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  DollarSign,
  Code,
  Globe,
  ArrowRight,
} from "lucide-react";

function MentorCards({
  limit,
  showButton = true,
}) {

  const mentors = [
    {
      name: "Rahul Sharma",
      role: "Startup Founder",
      icon: Briefcase,
      experience: "12+ Years Experience",
      description:
        "Built and scaled multiple successful startups while mentoring hundreds of founders.",
    },
    {
      name: "Priya Mehta",
      role: "Angel Investor",
      icon: DollarSign,
      experience: "50+ Startup Investments",
      description:
        "Helps founders raise capital, prepare investor pitches, and build sustainable businesses.",
    },
    {
      name: "Amit Verma",
      role: "Technology Expert",
      icon: Code,
      experience: "Software Architect",
      description:
        "Guides startups in product development, cloud technologies, and scalable software systems.",
    },
    {
      name: "Neha Kapoor",
      role: "Growth Strategist",
      icon: TrendingUp,
      experience: "Growth & Marketing",
      description:
        "Expert in branding, digital marketing, customer acquisition, and startup growth strategies.",
    },
    {
      name: "Vikram Singh",
      role: "Business Consultant",
      icon: Globe,
      experience: "Global Business Advisor",
      description:
        "Supports startups with business planning, operations, partnerships, and international expansion.",
    },
    {
      name: "Anjali Rao",
      role: "Leadership Coach",
      icon: Briefcase,
      experience: "Leadership Development",
      description:
        "Mentors founders in leadership, team building, communication, and startup management.",
    },
  ];

  const displayMentors = limit
    ? mentors.slice(0, limit)
    : mentors;

  return (
    <section className="mentor-section">

      <div className="mentor-container">

        <div className="mentor-heading">

          <p>OUR MENTORS</p>

          <h2>
            Learn From
            <span> Industry Leaders</span>
          </h2>

        </div>

        <div className="mentor-grid">

          {displayMentors.map((mentor, index) => {

            const Icon = mentor.icon;

            return (

              <motion.div
                key={mentor.name}
                className="mentor-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="mentor-avatar">
                  {mentor.name.charAt(0)}
                </div>

                <h3>{mentor.name}</h3>

                <h4>{mentor.role}</h4>

                <div className="mentor-experience">
                  <Icon size={18} />
                  <span>{mentor.experience}</span>
                </div>

                <p>{mentor.description}</p>

                {showButton && (

                  <button>

                    Linkedin Profile

                    <ArrowRight size={18} />

                  </button>

                )}

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default MentorCards;