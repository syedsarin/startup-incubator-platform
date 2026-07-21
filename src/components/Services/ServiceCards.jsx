import "./ServiceCards.css";
import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Wallet,
  Code,
  Megaphone,
  Settings
} from "lucide-react";

function ServiceCards({ limit }) {

  const services = [

    {
      icon: Users,
      title: "Startup Mentorship",
      description:
        "Get guidance from experienced mentors to validate ideas and make better business decisions."
    },

    {
      icon: Wallet,
      title: "Funding Support",
      description:
        "Connect with investors and explore funding opportunities to scale your startup."
    },

    {
      icon: Lightbulb,
      title: "Business Strategy",
      description:
        "Build effective strategies for growth, market positioning, and long-term success."
    },

    {
      icon: Code,
      title: "Technology Support",
      description:
        "Get technical guidance for building scalable products and digital solutions."
    },

    {
      icon: Megaphone,
      title: "Marketing Support",
      description:
        "Improve your brand visibility through marketing guidance and growth strategies."
    },

    {
      icon: Settings,
      title: "Startup Operations",
      description:
        "Optimize your startup processes with expert operational support."
    }

  ];

  const displayServices = limit
    ? services.slice(0, limit)
    : services;

  return (

    <section className="services-section">

      <div className="services-container">

        <div className="services-heading">

          <p>
            Our Services
          </p>

          <h2>
            Everything Your Startup Needs

            <span>
              To Grow
            </span>

          </h2>

        </div>

        <div className="service-grid">

          {displayServices.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div

                key={service.title}

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

                className="service-card"

              >

                <div className="service-icon">

                  <Icon size={32} />

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );

}

export default ServiceCards;