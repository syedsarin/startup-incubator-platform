import "./ServicesHero.css";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

function ServicesHero() {

  return (

    <section className="services-hero">

      <div className="services-container">


        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6
          }}

          className="services-hero-content"

        >


          <div className="services-badge">

            <Briefcase size={18}/>

            Startup Services

          </div>



          <h1>

            Complete Support For

            <span>
              Growing Startups
            </span>

          </h1>



          <p>

            We provide startups with the right resources,
            mentorship, technology support, and business
            guidance to help them grow faster.

          </p>


        </motion.div>


      </div>


    </section>

  );

}

export default ServicesHero;