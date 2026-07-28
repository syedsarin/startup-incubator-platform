import "./AboutSection.css";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/about/about-startup.png";


function AboutSection() {

  return (

    <section className="landing-about">


      <div className="landing-about-container">



        {/* Left Content */}

        <div className="landing-about-content">


          <p className="about-tag">
            About Us
          </p>



          <h2>
            Empowering Startups To Build, Grow & Scale
          </h2>



          <p className="about-description">

            We support startups and entrepreneurs with mentorship,
            resources, and opportunities to transform ideas into
            successful businesses.

          </p>



          <Link 
            to="/about"
            className="about-btn"
          >
            Learn More
          </Link>


        </div>





        {/* Right Image */}

        <div className="landing-about-image">


          <img

            src={aboutImage}

            alt="Startup ecosystem"

          />


        </div>



      </div>


    </section>

  );

}


export default AboutSection;