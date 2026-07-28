import "./ServicesHero.css";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import servicesHeroImage from "../../assets/images/services/services-hero.png";


function ServicesHero() {


  return (

    <section

      className="services-hero"

      style={{

        backgroundImage: `linear-gradient(
          rgba(15,23,42,0.65),
          rgba(15,23,42,0.65)
        ), url(${servicesHeroImage})`

      }}

    >


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

            <BriefcaseBusiness size={18}/>

            Startup Services

          </div>




          <h1>

            Complete Support To

            <span>
              Grow Your Startup
            </span>

          </h1>




          <p>

            We provide startups with expert guidance,
            technology support, business solutions,
            and resources needed to build scalable companies.

          </p>



        </motion.div>


      </div>


    </section>

  );

}


export default ServicesHero;