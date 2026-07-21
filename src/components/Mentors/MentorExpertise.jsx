import "./MentorExpertise.css";
import { motion } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  Lightbulb,
  DollarSign,
  Users,
  Globe,
} from "lucide-react";

function MentorExpertise() {
  const expertise = [
    {
      icon: Lightbulb,
      title: "Startup Strategy",
      description:
        "Validate ideas, define business models, and create a roadmap for success.",
    },
    {
      icon: DollarSign,
      title: "Fundraising",
      description:
        "Learn how to prepare investor pitches, raise capital, and manage finances.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description:
        "Scale your startup through marketing, customer acquisition, and growth strategies.",
    },
    {
      icon: Briefcase,
      title: "Product Development",
      description:
        "Build products users love with expert guidance on planning and execution.",
    },
    {
      icon: Users,
      title: "Leadership",
      description:
        "Develop leadership skills, build strong teams, and manage startup operations.",
    },
    {
      icon: Globe,
      title: "Global Expansion",
      description:
        "Expand into new markets with strategies for international business growth.",
    },
  ];

  return (
    <section className="expertise-section">

      <div className="expertise-container">

        <div className="expertise-heading">

          <p>MENTOR EXPERTISE</p>

          <h2>
            Guidance For Every
            <span> Stage Of Your Startup</span>
          </h2>

        </div>

        <div className="expertise-grid">

          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="expertise-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="expertise-icon">

                  <Icon size={28} />

                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default MentorExpertise;