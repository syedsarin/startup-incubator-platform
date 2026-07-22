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
    "• One-on-one guidance from experienced mentors.\n\n" +
    "• Expert advice for startup growth.\n\n" +
    "• Business strategy and planning support.\n\n" +
    "• Industry networking opportunities.\n\n" +
    "• Personalized mentorship for founders."

    },

    {
      icon: Wallet,
      title: "Business Development",
  description:
    "• Build sustainable business models.\n\n" +
    "• Develop effective growth strategies.\n\n" +
    "• Market research and validation.\n\n" +
    "• Improve operational efficiency.\n\n" +
    "• Scale startups with expert guidance."
    },

    {
      icon: Lightbulb,
      title: "Product Development",
  description:
    "• Web and mobile application development.\n\n" +
    "• AI and SaaS product solutions.\n\n" +
    "• Cloud-based application development.\n\n" +
    "• Prototype and MVP development.\n\n" +
    "• End-to-end technical support."
    },

    {
      icon: Code,
      title: "Technology Consulting",
  description:
    "• AI and machine learning solutions.\n\n" +
    "• Cloud architecture and migration.\n\n" +
    "• Cybersecurity best practices.\n\n" +
    "• DevOps and automation services.\n\n" +
    "• Custom software development."
    },

    {
      icon: Megaphone,
        title: "Legal Support",
  description:
    "• Company registration assistance.\n\n" +
    "• Intellectual property guidance.\n\n" +
    "• Trademark registration support.\n\n" +
    "• Business compliance assistance.\n\n" +
    "• Legal advisory for startups."

    },

    {
      icon: Settings,
   title: "Marketing Support",
  description:
    "• Brand identity and positioning.\n\n" +
    "• Digital marketing strategies.\n\n" +
    "• SEO optimization for startups.\n\n" +
    "• Social media marketing support.\n\n" +
    "• Growth marketing and customer acquisition."
    },

    {
      icon: Settings,
   title: "Startup Resources",
  description:
    "• Startup learning hub and guides.\n\n" +
    "• Business plan and strategy templates.\n\n" +
    "• Business Model Canvas resources.\n\n" +
    "• Pitch deck and financial templates.\n\n" +
    "• Founder handbook and practical toolkits."
    },

    
{
      icon: Settings,
    title: "Knowledge Center",
  description:
    "• Startup blogs and expert articles.\n\n" +
    "• Educational videos and podcasts.\n\n" +
    "• Live webinars and workshops.\n\n" +
    "• Research papers and case studies.\n\n" +
    "• Learning resources for entrepreneurs."
    },

    
    


    

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