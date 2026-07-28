import "./InvestorsSection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import investorsImage from "../../assets/images/Investors/Investors-banner.png";

const InvestorsSection = () => {

  return (

    <section className="landing-investors">

      <div className="landing-investors-container">


        {/* Left Content */}

        <motion.div

          className="landing-investors-content"

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

          <p className="investor-tag">
            For Investors
          </p>


          <h2>
            Discover And Support The Next Generation Of Startups
          </h2>


          <p className="investor-description">

            Connect with innovative startups, explore investment
            opportunities, and support founders building scalable
            businesses with high growth potential.

          </p>


          <Link

            to="/investors"

            className="investor-btn"

          >

            Explore Investors

          </Link>


        </motion.div>



        {/* Right Image */}

        <motion.div

          className="landing-investors-image"

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

            src={investorsImage}

            alt="Startup Investors"

          />

        </motion.div>



      </div>

    </section>

  );

};


export default InvestorsSection;