import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {

  return (

    <section className="hero">


      <motion.div

        className="hero-content"

        initial={{
          opacity:0,
          x:-50
        }}

        animate={{
          opacity:1,
          x:0
        }}

        transition={{
          duration:0.8
        }}

      >


        <span className="hero-badge">
          🚀 Startup Incubator Platform
        </span>



       <h1>
  TEST HERO COMPONENT
</h1>



        <p>
          We help founders transform ideas into successful businesses
          through mentorship, incubation, funding support, and a strong
          startup ecosystem.
        </p>



        <div className="hero-actions">


          <button className="hero-primary">
            Apply Now
          </button>


          <button className="hero-secondary">
            Explore Programs
          </button>

          <button className="hero-primary">
            Join Community
          </button>


          <button className="hero-secondary">
            Book Consultation
          </button>

        </div>



      </motion.div>





      <motion.div

        className="hero-visual"

        initial={{
          opacity:0,
          scale:.8
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:0.8
        }}

      >



  


      </motion.div>



    </section>

  );

}


export default Hero;