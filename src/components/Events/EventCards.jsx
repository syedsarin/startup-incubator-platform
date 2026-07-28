import "./EventCards.css";
import { motion } from "framer-motion";
import eventsImage from "../../assets/images/events/events-banner.png";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

function EventCards({
  limit,
  showButton = true,
}) {

  const events = [
    {
      title: "Workshops",
      date: "15 Aug 2026",
      time: "10:00 AM",
      location: "Mumbai",
      description:
        "Meet entrepreneurs, investors, and mentors while expanding your startup network.",
    },
    {
      title: "Bootcamps",
      date: "28 Aug 2026",
      time: "02:00 PM",
      location: "Pune",
      description:
        "Learn fundraising strategies and connect directly with angel investors and VCs.",
    },
    {
      title: "Hackathons",
      date: "10 Sep 2026",
      time: "11:00 AM",
      location: "Nagpur",
      description:
        "Build better products through practical sessions led by experienced founders.",
    },
    {
      title: "Demo Days",
      date: "20 Sep 2026",
      time: "04:00 PM",
      location: "Hyderabad",
      description:
        "Present your startup idea to mentors and investors for valuable feedback.",
    },
    {
      title: "Startup Competitions",
      date: "05 Oct 2026",
      time: "01:00 PM",
      location: "Bengaluru",
      description:
        "Discover proven marketing strategies to acquire customers and grow faster.",
    },
    {
      title: "Webinars",
      date: "18 Oct 2026",
      time: "09:30 AM",
      location: "Delhi",
      description:
        "Develop leadership, communication, and decision-making skills for startup success.",
    },
  ];

  const displayEvents = limit
    ? events.slice(0, limit)
    : events;

  return (

    <section className="events-section">

      <div className="events-container">

        {/* Hero Section */}

        {/* Hero Section */}

<div className="events-hero">

  <motion.div
    className="events-content"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >

    <p className="event-tag">
      Our Events
    </p>

    <h2>
      Join Our Startup Community Events
    </h2>

    <p className="events-description">
      Participate in workshops, bootcamps, hackathons, demo days,
      startup competitions, and webinars designed to help founders
      learn, connect, collaborate, and grow their startups.
    </p>

    <Link
      to="/register"
      className="event-btn"
    >
      Register Now
    </Link>

  </motion.div>


  <motion.div
    className="events-image"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >

    <img
      src={eventsImage}
      alt="Startup Events"
    />

  </motion.div>

</div>

        {/* Event Cards */}

        <div className="events-grid">

          {displayEvents.map((event, index) => (

            <motion.div
              key={event.title}
              className="event-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <div className="event-date">

                <CalendarDays size={18} />

                {event.date}

              </div>


              <h3>
                {event.title}
              </h3>


              <p>
                {event.description}
              </p>


              <div className="event-info">

                <span>

                  <Clock size={16} />

                  {event.time}

                </span>


                <span>

                  <MapPin size={16} />

                  {event.location}

                </span>

              </div>


              {showButton && (

                <button>

                  Register Now

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

export default EventCards;