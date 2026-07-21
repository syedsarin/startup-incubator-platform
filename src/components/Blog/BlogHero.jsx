import "./BlogHero.css";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

function BlogHero() {
  return (
    <section className="blog-hero">

      <div className="blog-hero-container">

        <motion.div
          className="blog-hero-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="blog-badge">

            <BookOpen size={18} />

            Startup Insights & Resources

          </div>

          <h1>

            Learn, Build &

            <span>Grow Your Startup</span>

          </h1>

          <p>

            Discover expert articles, startup success stories,
            fundraising strategies, product development tips,
            and business insights to help you build and scale
            your startup with confidence.

          </p>

          <div className="blog-buttons">

            <button className="blog-primary-btn">

              Explore Articles

              <ArrowRight size={18} />

            </button>

            <button className="blog-secondary-btn">

              Latest Posts

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default BlogHero;