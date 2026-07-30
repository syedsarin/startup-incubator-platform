import "./MentorBooking.css";
import { motion } from "framer-motion";
import { Calendar, Star } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    expertise: "Business Strategy",
    experience: "12 Years",
    rating: "4.9",
  },
  {
    id: 2,
    name: "Michael Chen",
    expertise: "Product Development",
    experience: "10 Years",
    rating: "4.8",
  },
  {
    id: 3,
    name: "Priya Sharma",
    expertise: "Marketing & Growth",
    experience: "8 Years",
    rating: "4.9",
  },
];

const bookings = [
  {
    id: 1,
    mentor: "Dr. Sarah Johnson",
    date: "20 Aug 2026",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    mentor: "Michael Chen",
    date: "25 Aug 2026",
    time: "03:00 PM",
    status: "Pending",
  },
];

function MentorBooking() {
  return (
    <section className="mentor-booking">

      <div className="mentor-header">
        <h2>Mentor Booking System</h2>
        <p>
          Connect with experienced mentors to accelerate your startup journey.
        </p>
      </div>

      <div className="mentor-grid">

        {mentors.map((mentor, index) => (

          <motion.div
            key={mentor.id}
            className="mentor-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >

            <div className="mentor-avatar">
              {mentor.name.charAt(0)}
            </div>

            <h3>{mentor.name}</h3>

            <p>{mentor.expertise}</p>

            <span>{mentor.experience}</span>

            <div className="mentor-rating">
              <Star size={16} fill="#facc15" color="#facc15" />
              {mentor.rating}
            </div>

            <button className="book-btn">
              <Calendar size={18} />
              Book Session
            </button>

          </motion.div>

        ))}

      </div>

      <div className="booking-table">

        <h3>Upcoming Bookings</h3>

        <table>

          <thead>

            <tr>
              <th>Mentor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {bookings.map((booking) => (

              <tr key={booking.id}>

                <td>{booking.mentor}</td>

                <td>{booking.date}</td>

                <td>{booking.time}</td>

                <td>
                  <span
                    className={`status ${booking.status.toLowerCase()}`}
                  >
                    {booking.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default MentorBooking;