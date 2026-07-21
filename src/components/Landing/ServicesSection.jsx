import "./ServicesSection.css";


const services = [
  {
    title: "Startup Mentorship",
    description:
  "• One-on-one guidance from experts.\n\n" +
  "• Learn from experienced entrepreneurs.\n\n" +
  "• Receive practical business advice.\n\n" +
  "• Improve decision-making skills.\n\n" +
  "• Accelerate startup growth."
  },
  {
    title: "Business Devevelopement",
    description:
  "• Build sustainable business models.\n\n" +
  "• Develop growth strategies.\n\n" +
  "• Identify market opportunities.\n\n" +
  "• Improve customer acquisition.\n\n" +
  "• Scale business successfully."
  },
  {
    title: "Product Development",
    description:
  "• Develop web and mobile applications.\n\n" +
  "• Build AI and SaaS products.\n\n" +
  "• Create scalable cloud solutions.\n\n" +
  "• Improve product quality.\n\n" +
  "• Deliver market-ready products."
  },
  {
    title: "Technology Counsulting",
    description:
  "• AI and cloud consulting.\n\n" +
  "• Cybersecurity and DevOps support.\n\n" +
  "• Software architecture guidance.\n\n" +
  "• Optimize technical solutions.\n\n" +
  "• Enable digital transformation."
  }
];


const ServicesSection = () => {
  return (
    <section className="landing-services">

      <div className="services-container">

        <div className="services-header">

          <h2>
            Our Services
          </h2>

          <p>
            Everything your startup needs to grow, build and scale.
          </p>

        </div>


        <div className="services-cards">

          {services.map((service, index) => (

            <div 
              className="service-card"
              key={index}
            >

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};


export default ServicesSection;