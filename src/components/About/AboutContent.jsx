import { motion } from "framer-motion";
import { Target, Rocket, Users, Lightbulb } from "lucide-react";
import "./AboutContent.css";

function AboutContent() {

  const cards = [
    {
      icon: Rocket,
      title: "Our Mission",
      description:
        "We help entrepreneurs turn innovative ideas into successful businesses through mentorship, resources, and startup support."
    },
    {
      icon: Target,
      title: "Our Vision",
      description:
        "To create a strong startup ecosystem where founders, mentors, and investors collaborate to build impactful solutions."
    },
    {
      icon: Lightbulb,
      title: "Our Values",
      description:
        "We believe in innovation, collaboration, continuous learning, and empowering entrepreneurs for long-term growth."
    }
  ];


  const features = [
    "Expert Startup Mentorship",
    "Investor & Funding Network",
    "Business Growth Support",
    "Strong Entrepreneur Community"
  ];


  return (
    <>

      {/* About Story */}

      <section className="content-section">

        <div className="content-container">

          <div className="content-heading">

            <p>
              About StartupHub
            </p>

            <h2>
              Supporting Entrepreneurs From Idea To Success
            </h2>

            <span>
              StartupHub is an innovation-driven incubation platform
              helping aspiring founders validate ideas, build products,
              connect with mentors, and grow successful businesses.
            </span>

          </div>

        </div>

      </section>



      {/* Mission Vision Values */}

      <section className="content-section light">

        <div className="content-container">

          <div className="content-cards">

            {cards.map((card,index)=>{

              const Icon = card.icon;

              return (

                <motion.div
                  key={card.title}
                  initial={{
                    opacity:0,
                    y:30
                  }}
                  whileInView={{
                    opacity:1,
                    y:0
                  }}
                  viewport={{
                    once:true
                  }}
                  transition={{
                    duration:0.5,
                    delay:index*0.1
                  }}
                  className="content-card"
                >

                  <div className="content-icon">

                    <Icon size={32}/>

                  </div>


                  <h3>
                    {card.title}
                  </h3>


                  <p>
                    {card.description}
                  </p>


                </motion.div>

              );

            })}

          </div>

        </div>

      </section>




      {/* Why Choose Us */}

      <section className="content-section">

        <div className="content-container">


          <div className="content-heading">

            <p>
              Why Choose Us
            </p>

            <h2>
              Everything Founders Need To Grow
            </h2>

          </div>



          <div className="feature-grid">

            {features.map((feature)=>(

              <div
                key={feature}
                className="feature-card"
              >

                <Users size={32}/>

                {feature}

              </div>

            ))}

          </div>


        </div>

      </section>


    </>
  );
}

export default AboutContent;