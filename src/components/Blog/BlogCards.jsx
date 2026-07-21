import "./BlogCards.css";
import { motion } from "framer-motion";
import {
  CalendarDays,
  User,
  ArrowRight,
} from "lucide-react";

function BlogCards() {

  const blogs = [
    {
      category: "Startup",
      title: "How To Validate Your Startup Idea Before Building",
      date: "12 Aug 2026",
      author: "StartupHub Team",
      description:
        "Learn practical techniques to validate your business idea, reduce risk, and build products customers actually want."
    },
    {
      category: "Funding",
      title: "5 Tips To Prepare For Your First Investor Pitch",
      date: "18 Aug 2026",
      author: "Rahul Sharma",
      description:
        "Discover how successful founders prepare pitch decks, answer investor questions, and secure funding."
    },
    {
      category: "Marketing",
      title: "Digital Marketing Strategies For Startups",
      date: "26 Aug 2026",
      author: "Neha Kapoor",
      description:
        "Explore growth marketing techniques that help startups acquire customers without spending huge budgets."
    },
    {
      category: "Technology",
      title: "Building Scalable Products From Day One",
      date: "05 Sep 2026",
      author: "Amit Verma",
      description:
        "Understand the importance of scalable architecture and technology choices during the early stages."
    },
    {
      category: "Leadership",
      title: "How Great Startup Leaders Build Winning Teams",
      date: "15 Sep 2026",
      author: "Anjali Rao",
      description:
        "Learn leadership principles that help founders create productive, motivated, and high-performing teams."
    },
    {
      category: "Growth",
      title: "Scaling Your Startup Without Losing Focus",
      date: "28 Sep 2026",
      author: "Priya Mehta",
      description:
        "Discover proven growth strategies while maintaining product quality and customer satisfaction."
    }
  ];

  return (

    <section className="blog-section">

      <div className="blog-container">

        <div className="blog-heading">

          <p>LATEST ARTICLES</p>

          <h2>

            Explore Startup
            <span> Knowledge & Insights</span>

          </h2>

        </div>

        <div className="blog-grid">

          {blogs.map((blog, index) => (

            <motion.div
              key={blog.title}
              className="blog-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08
              }}
            >

              <div className="blog-category">

                {blog.category}

              </div>

              <h3>

                {blog.title}

              </h3>

              <p>

                {blog.description}

              </p>

              <div className="blog-meta">

                <span>

                  <CalendarDays size={16} />

                  {blog.date}

                </span>

                <span>

                  <User size={16} />

                  {blog.author}

                </span>

              </div>

              <button>

                Read More

                <ArrowRight size={18} />

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default BlogCards;