import "./MentorsSection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mentorsImage from "../../assets/images/mentors/mentors-banner.png";


const MentorsSection = () => {

  return (

    <section className="landing-mentors">


      <div className="landing-mentors-container">


        {/* Left Content */}

        <motion.div

          className="landing-mentors-content"

          initial={{
            opacity: 0,
            x: -50
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration:0.6
          }}

          viewport={{
            once:true
          }}

        >


          <p className="mentor-tag">

            Expert Mentorship

          </p>



          <h2>

            Learn From Industry Experts And Startup Leaders

          </h2>



          <p className="mentor-description">

            Get guidance from experienced mentors who help startups
            with strategy, technology, product development, marketing,
            fundraising, and business growth.

          </p>



          <Link

            to="/mentors"

            className="mentor-btn"

          >

            Explore Mentors

          </Link>



        </motion.div>





        {/* Right Image */}


        <motion.div

          className="landing-mentors-image"

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

            src={mentorsImage}

            alt="Startup Mentors"

          />


        </motion.div>



      </div>


    </section>

  );

};


export default MentorsSection;