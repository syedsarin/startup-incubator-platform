import "./ProgramCards.css";
import { motion } from "framer-motion";
import programImage from "../../assets/images/programs/programs-banner.png";
import { ArrowRight, Rocket } from "lucide-react";

function ProgramCards({

  limit,

  showButton = true,

  home = false

}) {

  const programs = [

    {
      title: "Incubation Program",
      description:
        "Support for early-stage startups with idea validation, mentorship, and resources."
    },

    {
      title: "Accelerator Program",
      description:
        "Help startups scale faster through expert guidance, networking, and investor connections."
    },

    {
      title: "Mentorship Program",
      description:
        "Connect with experienced mentors who guide founders throughout their journey."
    },

    {
      title: "Funding Support",
      description:
        "Get guidance for fundraising, investor connections, and startup growth."
    }

  ];

  const displayPrograms = limit
    ? programs.slice(0, limit)
    : programs;

  return (

    <section
      className={
        home
          ? "program-section home-program-section"
          : "program-section"
      }
    >

      <div className="program-container">

        {/* Heading */}

        <div className="program-heading">

          <p>
            Our Programs
          </p>

          <h2>

            Programs Designed For

            <span>
              Startup Growth
            </span>

          </h2>

        </div>

        {/* Hero Content */}

        <div className="program-hero">

          <motion.div
            className="program-content"
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
          >

            <h3>
              Empowering Startups at Every Stage
            </h3>

            <p>
              From idea validation and expert mentorship to funding support and
              investor connections, our programs help entrepreneurs transform
              innovative ideas into scalable and successful businesses.
            </p>

           </motion.div>

          <motion.div
            className="program-image"
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
          >

            <img
              src={programImage}
              alt="Startup Programs"
            />

          </motion.div>

        </div>

        {/* Program Cards */}

        <div className="program-cards">

          {displayPrograms.map((program, index) => (

            <motion.div

              key={program.title}

              initial={{
                opacity: 0,
                y: 30
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}

              className={
                home
                  ? "program-card home-program-card"
                  : "program-card"
              }

            >

              <div className="program-icon">

                <Rocket size={home ? 24 : 30} />

              </div>

              <h3>
                {program.title}
              </h3>

              <p>
                {program.description}
              </p>

              {showButton && (

                <button>

                  Learn More

                  <ArrowRight size={18} />

                </button>

              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default ProgramCards;