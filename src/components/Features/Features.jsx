import "./Features.css";

function Features() {

  const features = [
    {
      title: "Connect Founders",
      description: "Find talented founders and build your startup team."
    },
    {
      title: "Investor Network",
      description: "Connect with investors who support innovative ideas."
    },
    {
      title: "Startup Resources",
      description: "Get tools, guidance, and resources to grow faster."
    }
  ];

  return (
    <section className="features-section">

      <h2>Why Choose StartupHub?</h2>

      <div className="features-container">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              ⭐
            </div>

            <h3>{feature.title}</h3>

            <p>
              {feature.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;