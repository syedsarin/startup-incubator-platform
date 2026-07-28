import "./InvestorsHero.css";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import investorsHeroImage from "../../assets/images/investors/investors-hero.png";


function InvestorsHero() {


  return (

    <section

      className="investors-hero"

      style={{

        backgroundImage: `linear-gradient(
          rgba(15,23,42,0.65),
          rgba(15,23,42,0.65)
        ), url(${investorsHeroImage})`

      }}

    >


      <div className="investors-container">


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

          className="investors-hero-content"

        >



          <div className="investors-badge">

            <TrendingUp size={18}/>

            Investor Network

          </div>





          <h1>

            Connecting Investors With

            <span>
              High Growth Startups
            </span>

          </h1>





          <p>

            Discover promising startups, explore investment
            opportunities, and support innovative companies
            building the future through our startup ecosystem.

          </p>



        </motion.div>


      </div>


    </section>

  );

}


export default InvestorsHero;