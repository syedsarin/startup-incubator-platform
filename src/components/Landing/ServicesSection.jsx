import "./ServicesSection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import servicesImage from "../../assets/images/services/services-banner.png";

const ServicesSection = () => {

  return (

    <section className="landing-services">


      <div className="landing-services-container">


        {/* Left Content */}

        <motion.div

          className="services-content"

          initial={{
            opacity:0,
            x:-50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.6
          }}

          viewport={{
            once:true
          }}

        >


          <p className="service-tag">
            Our Services
          </p>



          <h2>
            Complete Startup Support To Build And Scale Successfully
          </h2>



          <p className="service-description">

            We provide startups with mentorship, business development,
            product development, technology consulting, and strategic
            support to transform ideas into successful businesses.

          </p>



          <Link
            to="/services"
            className="service-btn"
          >

            Explore Services

          </Link>


        </motion.div>




        {/* Right Image */}

        <motion.div

          className="services-image"

          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.6
          }}

          viewport={{
            once:true
          }}

        >


          <img

            src={servicesImage}

            alt="Startup Services"

          />


        </motion.div>



      </div>


    </section>

  );

};


export default ServicesSection;