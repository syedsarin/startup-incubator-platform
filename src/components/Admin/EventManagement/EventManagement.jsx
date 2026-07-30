import "./EventManagement.css";
import { motion } from "framer-motion";
import { Eye, Pencil, Trash2 } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Startup Pitch Day",
    date: "15 Aug 2026",
    location: "Hyderabad",
    registrations: 120,
  },
  {
    id: 2,
    title: "AI Innovation Summit",
    date: "22 Aug 2026",
    location: "Bengaluru",
    registrations: 85,
  },
  {
    id: 3,
    title: "Investor Networking",
    date: "05 Sep 2026",
    location: "Pune",
    registrations: 64,
  },
];

function EventManagement() {
  return (
    <section className="event-management">

      <div className="event-header">

        <h2>Event Management</h2>

        <p>
          Create, update and manage platform events.
        </p>

      </div>

      <div className="event-table-wrapper">

        <table className="event-table">

          <thead>

            <tr>

              <th>Event</th>
              <th>Date</th>
              <th>Location</th>
              <th>Registrations</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {events.map((event, index) => (

              <motion.tr
                key={event.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >

                <td>{event.title}</td>

                <td>{event.date}</td>

                <td>{event.location}</td>

                <td>{event.registrations}</td>

                <td>

                  <div className="action-buttons">

                    <button className="view-btn">

                      <Eye size={16} />

                      View

                    </button>

                    <button className="edit-btn">

                      <Pencil size={16} />

                      Edit

                    </button>

                    <button className="delete-btn">

                      <Trash2 size={16} />

                      Delete

                    </button>

                  </div>

                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default EventManagement;