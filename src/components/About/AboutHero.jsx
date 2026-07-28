import "./AboutHero.css";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import aboutHeroImage from "../../assets/images/about/about-hero.png";


function AboutHero() {

  return (

    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(
          rgba(15,23,42,0.65),
          rgba(15,23,42,0.65)
        ), url(${aboutHeroImage})`
      }}
    >


      <div className="hero-container">


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

          className="about-hero-content"

        >


          <div className="hero-badge">

            <Rocket size={18} />

            Empowering Future Entrepreneurs

          </div>




          <h1>

            Building The Future Of

            <span>
              Startup Innovation
            </span>

          </h1>




          <p>

            StartupHub helps entrepreneurs transform ideas into
            successful businesses through mentorship, resources,
            funding opportunities, and a powerful startup ecosystem.

          </p>




          <div className="hero-buttons">


            <button className="primary-btn">

              Apply Now

              <ArrowRight size={18} />

            </button>



            <button className="secondary-btn">

              Learn More

            </button>


          </div>



        </motion.div>


      </div>


    </section>

  );

}


export default AboutHero;