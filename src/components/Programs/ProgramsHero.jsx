import "./ProgramsHero.css";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

function ProgramsHero() {
  return (
    <section className="programs-hero">

      <div className="programs-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="programs-hero-content"
        >

          <div className="programs-badge">

            <Rocket size={18} />

            Startup Programs

          </div>


          <h1>
            Empowering Startups At
            <span>
              Every Stage Of Growth
            </span>
          </h1>


          <p>
            Our programs help startups with mentorship,
            resources, networking opportunities, funding support,
            and the right ecosystem to grow successfully.
          </p>


        </motion.div>


      </div>


    </section>
  );
}

export default ProgramsHero;