import { motion } from "framer-motion";

import {
  Target,
  Rocket,
  Users,
  Lightbulb,
  Trophy,
  BriefcaseBusiness,
  MessageCircle,
} from "lucide-react";

import "./AboutContent.css";


function AboutContent() {


  const cards = [

    {
      icon: Rocket,
      title: "Who We Are",
      points: [
        "Supporting startups, innovators, and entrepreneurs.",
        "Helping founders build scalable businesses.",
        "Providing mentorship, resources, and guidance.",
        "Connecting startups with investors and opportunities.",
        "Accelerating innovation and startup growth."
      ]
    },

    {
      icon: Target,
      title: "Vision",
      points: [
        "Creating a world-class innovation ecosystem for entrepreneurs.",
        "Empowering founders to build impactful and scalable companies.",
        "Providing the right resources, mentorship, and opportunities.",
        "Supporting startups to compete in global markets.",
        "Becoming a trusted platform for innovation and entrepreneurship."
      ]
    },

    {
      icon: Lightbulb,
      title: "Mission",
      points: [
        "Support innovative startups.",
        "Promote entrepreneurship and founder growth.",
        "Connect founders with mentors and investors.",
        "Foster innovation and technology development.",
        "Build sustainable and scalable businesses."
      ]
    }

  ];



  const features = [
    "Expert Startup Mentorship",
    "Investor & Funding Network",
    "Business Growth Support",
    "Strong Entrepreneur Community"
  ];



  const successStories = [
    "Startup Journey",
    "Funding Raised",
    "Awards & Recognition",
    "Customer Growth",
    "Revenue Milestones",
    "Founder Testimonials"
  ];



  const community = [
    "Discussion Forums",
    "Slack & Discord Community",
    "Founder Networking",
    "Startup Meetups",
    "Alumni Network",
    "Knowledge Sharing"
  ];



  const careers = [
    "Startup Jobs",
    "Internships",
    "Founder Opportunities",
    "Volunteer Programs",
    "Career Guidance",
    "Hiring Network"
  ];



  return (

    <>


      {/* About Cards */}

      <section className="content-section">

        <div className="content-container">


          <div className="content-cards">


            {cards.map((card,index)=>{


              const Icon = card.icon;


              return (

                <motion.div

                  key={card.title}

                  className="content-card"

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
                    duration:.5,
                    delay:index*.1
                  }}

                >


                  <div className="content-icon">

                    <Icon size={32}/>

                  </div>



                  <h3>
                    {card.title}
                  </h3>



                  <ul className="card-points">

                    {card.points.map((point)=>(

                      <li key={point}>
                        {point}
                      </li>

                    ))}

                  </ul>


                </motion.div>

              )


            })}


          </div>


        </div>

      </section>





      {/* Why Choose Us */}


      <section className="content-section light">


        <div className="content-container">


          <div className="content-heading">

            <h2>
              Why Choose Us
            </h2>

          </div>



          <div className="feature-grid">


            {features.map((item)=>(

              <div
                className="feature-card"
                key={item}
              >

                <Users size={32}/>

                <span>
                  {item}
                </span>

              </div>

            ))}


          </div>


        </div>


      </section>





      {/* Success Stories */}


      <section className="content-section">


        <div className="content-container">


          <div className="content-heading">

            <h2>
              Success Stories
            </h2>


            <span>
              We proudly showcase the inspiring journeys of startups that have grown through our incubation ecosystem.
            </span>

          </div>




          <div className="feature-grid">


            {successStories.map((item)=>(

              <div
                className="feature-card"
                key={item}
              >

                <Trophy size={30}/>

                <span>
                  {item}
                </span>

              </div>

            ))}


          </div>


        </div>


      </section>






      {/* Community */}


      <section className="content-section light">


        <div className="content-container">


          <div className="content-heading">

            <h2>
              Community
            </h2>


            <span>
              Connect with entrepreneurs, mentors, investors, and innovators through an active startup community.
            </span>


          </div>



          <div className="feature-grid">


            {community.map((item)=>(

              <div
                className="feature-card"
                key={item}
              >

                <MessageCircle size={30}/>

                <span>
                  {item}
                </span>


              </div>

            ))}


          </div>


        </div>


      </section>







      {/* Career Center */}


      <section className="content-section">


        <div className="content-container">


          <div className="content-heading">


            <p>
              Career Center
            </p>


            <h2>
              Grow Your Career In The Startup Ecosystem
            </h2>


            <span>
              Explore startup jobs, internships, founder opportunities, and volunteer programs.
            </span>


          </div>




          <div className="feature-grid">


            {careers.map((item)=>(

              <div

                className="feature-card"

                key={item}

              >

                <BriefcaseBusiness size={30}/>


                <span>
                  {item}
                </span>


              </div>

            ))}


          </div>



        </div>


      </section>



    </>

  );

}


export default AboutContent;