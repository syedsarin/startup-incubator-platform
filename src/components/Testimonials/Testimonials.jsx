import "./Testimonials.css";

function Testimonials() {

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Founder, TechNova",
      message: "StartupHub helped me connect with the right people and grow my idea."
    },
    {
      name: "Priya Patel",
      role: "Investor",
      message: "A great platform to discover innovative startup ideas."
    },
    {
      name: "Amit Verma",
      role: "Startup Mentor",
      message: "The community and resources make startup growth easier."
    }
  ];

  return (
    <section className="testimonial-section">

      <h2>What People Say</h2>

      <div className="testimonial-container">

        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <p>
              "{item.message}"
            </p>

            <h3>
              {item.name}
            </h3>

            <span>
              {item.role}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;