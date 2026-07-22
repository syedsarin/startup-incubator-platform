import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Users,
  Lightbulb,
  Trophy,
  BriefcaseBusiness,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

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

      {/* About Story */}

      

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

            
            <h2>
              Why Choose Us
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

{/* Success Stories */}

<section className="content-section light">

  <div className="content-container">

    <div className="content-heading">

    
      <h2>Success Stories</h2>

      <span>
        We proudly showcase the inspiring journeys of startups that have
        grown through our incubation ecosystem.
      </span>

    </div>

    <div className="feature-grid">

      {successStories.map((item) => (

        <div
          key={item}
          className="feature-card"
        >
          <Trophy size={30} />

          {item}

        </div>

      ))}

    </div>

  </div>

</section>



{/* Community */}

<section className="content-section">

  <div className="content-container">

    <div className="content-heading">

      <h2>Community</h2>

      <span>
        Connect with entrepreneurs, mentors, investors, and innovators
        through an active startup community.
      </span>

    </div>

    <div className="feature-grid">

      {community.map((item) => (

        <div
          key={item}
          className="feature-card"
        >

          <MessageCircle size={30} />

          {item}

        </div>

      ))}

    </div>

  </div>

</section>



{/* Career Center */}

<section className="content-section light">

  <div className="content-container">

    <div className="content-heading">

      <p>Career Center</p>

      <h2>Grow Your Career In The Startup Ecosystem</h2>

      <span>
        Explore startup jobs, internships, founder opportunities,
        and volunteer programs.
      </span>

    </div>

    <div className="feature-grid">

      {careers.map((item) => (

        <div
          key={item}
          className="feature-card"
        >

          <BriefcaseBusiness size={30} />

          {item}

        </div>

      ))}

    </div>

  </div>

</section>

    </>
  );
}

export default AboutContent;