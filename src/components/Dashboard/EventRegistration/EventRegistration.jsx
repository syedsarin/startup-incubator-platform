import "./EventRegistration.css";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

function UpcomingEvents() {

  const events = [
    {
      title: "Startup Networking Meet",
      date: "15 Aug 2026",
      time: "10:00 AM",
      venue: "Innovation Hall",
      status: "Open",
    },
    {
      title: "AI Innovation Workshop",
      date: "22 Aug 2026",
      time: "02:00 PM",
      venue: "Conference Room A",
      status: "Registered",
    },
    {
      title: "Investor Pitch Day",
      date: "05 Sep 2026",
      time: "11:00 AM",
      venue: "Main Auditorium",
      status: "Open",
    },
    {
      title: "Demo Day",
      date: "18 Sep 2026",
      time: "03:00 PM",
      venue: "Startup Arena",
      status: "Closed",
    },
  ];

  return (

    <section className="upcoming-events">

      <h2>Events Registration</h2>

      <div className="events-grid">

        {events.map((event, index) => (

          <motion.div
            key={index}
            className="event-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
          >

            <span className={`event-status ${event.status.toLowerCase()}`}>
              {event.status}
            </span>

            <h3>{event.title}</h3>

            <p>
              <CalendarDays size={16} />
              {event.date}
            </p>

            <p>
              <Clock3 size={16} />
              {event.time}
            </p>

            <p>
              <MapPin size={16} />
              {event.venue}
            </p>

            <button>
              View Details
            </button>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default UpcomingEvents;