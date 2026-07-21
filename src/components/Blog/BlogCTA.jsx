import "./BlogCTA.css";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

function BlogCTA() {
  return (
    <section className="blog-cta">

      <div className="blog-cta-container">

        <motion.div
          className="blog-cta-box"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="blog-cta-badge">

            <BookOpen size={18} />

            Keep Learning Every Week

          </div>

          <h2>

            Stay Updated With

            <span>Startup Knowledge</span>

          </h2>

          <p>

            Get expert startup insights, funding tips, business growth
            strategies, and the latest industry trends delivered
            directly to you.

          </p>

          <div className="blog-cta-buttons">

            <button className="blog-cta-primary">

              Explore Articles

              <ArrowRight size={18} />

            </button>

            <button className="blog-cta-secondary">

              Subscribe Now

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default BlogCTA;