import "./HowItWorks.css";

function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Share Your Idea",
      description: "Submit your startup idea and showcase your vision."
    },
    {
      number: "02",
      title: "Connect",
      description: "Meet founders, mentors, and investors."
    },
    {
      number: "03",
      title: "Build",
      description: "Collaborate and develop your startup."
    },
    {
      number: "04",
      title: "Grow",
      description: "Scale your startup with the right support."
    }
  ];

  return (
    <section className="how-section">

      <h2>How StartupHub Works?</h2>

      <div className="steps-container">

        {steps.map((step, index) => (
          <div className="step-card" key={index}>

            <span>
              {step.number}
            </span>

            <h3>
              {step.title}
            </h3>

            <p>
              {step.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;