import "./ProgramsSection.css";
import { motion } from "framer-motion";
import programsImage from "../../assets/images/programs/programs-banner.png";
import { Link } from "react-router-dom";


const ProgramsSection = () => {

  return (

    <section className="landing-programs">


      <div className="landing-programs-container">


        {/* Left Content */}

        <motion.div

          className="landing-programs-content"

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


          <p className="program-tag">

            Our Programs

          </p>



          <h2>

            Structured Programs To Build Successful Startups

          </h2>



          <p className="program-description">

            We help startups at every stage with idea validation,
            incubation support, mentorship, technical guidance,
            and investor readiness programs.

          </p>



          <Link

            to="/programs"

            className="program-btn"

          >

            Explore Programs

          </Link>



        </motion.div>





        {/* Right Image */}


        <motion.div

          className="landing-programs-image"

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

            src={programsImage}

            alt="Startup Programs"

          />


        </motion.div>



      </div>


    </section>

  );

};


export default ProgramsSection;