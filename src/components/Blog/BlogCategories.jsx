import "./BlogCategories.css";
import { motion } from "framer-motion";
import {
  Rocket,
  DollarSign,
  TrendingUp,
  Code,
  Users,
  Lightbulb,
} from "lucide-react";

function BlogCategories() {
  const categories = [
    {
      icon: Rocket,
      title: "Startup",
      description:
        "Idea validation, business planning, MVP development, and launching your startup.",
    },
    {
      icon: DollarSign,
      title: "Funding",
      description:
        "Investment strategies, angel investors, venture capital, and fundraising guides.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "Scaling strategies, customer acquisition, branding, and business expansion.",
    },
    {
      icon: Code,
      title: "Technology",
      description:
        "Product development, software architecture, AI, cloud, and emerging technologies.",
    },
    {
      icon: Users,
      title: "Leadership",
      description:
        "Team building, communication, founder mindset, and startup management.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Creative thinking, product innovation, design thinking, and market disruption.",
    },
  ];

  return (
    <section className="categories-section">

      <div className="categories-container">

        <div className="categories-heading">

          <p>BROWSE TOPICS</p>

          <h2>
            Explore By
            <span> Category</span>
          </h2>

        </div>

        <div className="categories-grid">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                className="category-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="category-icon">
                  <Icon size={30} />
                </div>

                <h3>{category.title}</h3>

                <p>{category.description}</p>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default BlogCategories;