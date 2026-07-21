import "./EventTimeline.css";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  Users,
  Presentation,
  Trophy,
} from "lucide-react";

function EventTimeline() {
  const timeline = [
    {
      icon: CalendarCheck,
      step: "01",
      title: "Register",
      description:
        "Choose your preferred event and complete the registration process online.",
    },
    {
      icon: Users,
      step: "02",
      title: "Network",
      description:
        "Meet founders, mentors, investors, and professionals from different industries.",
    },
    {
      icon: Presentation,
      step: "03",
      title: "Learn",
      description:
        "Attend expert sessions, workshops, and panel discussions to gain practical insights.",
    },
    {
      icon: Trophy,
      step: "04",
      title: "Grow",
      description:
        "Apply your knowledge, build valuable connections, and accelerate your startup journey.",
    },
  ];

  return (
    <section className="timeline-section">

      <div className="timeline-container">

        <div className="timeline-heading">

          <p>EVENT JOURNEY</p>

          <h2>
            What Happens
            <span> At Our Events</span>
          </h2>

        </div>

        <div className="timeline-grid">

          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                className="timeline-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="timeline-step">
                  {item.step}
                </div>

                <div className="timeline-icon">
                  <Icon size={30} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default EventTimeline;