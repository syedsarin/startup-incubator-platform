import "./MentorsHero.css";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import mentorsHeroImage from "../../assets/images/mentors/mentors-hero.png";


function MentorsHero() {


  return (

    <section

      className="mentors-hero"

      style={{

        backgroundImage: `linear-gradient(
          rgba(15,23,42,0.65),
          rgba(15,23,42,0.65)
        ), url(${mentorsHeroImage})`

      }}

    >


      <div className="mentors-container">


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

          className="mentors-hero-content"

        >



          <div className="mentors-badge">

            <Users size={18}/>

            Startup Mentors

          </div>




          <h1>

            Learn From Experts

            <span>
              Build Your Success Story
            </span>

          </h1>




          <p>

            Connect with experienced founders, industry experts,
            and successful entrepreneurs who provide guidance,
            mentorship, and strategic support to help startups grow.

          </p>



        </motion.div>


      </div>


    </section>

  );

}


export default MentorsHero;