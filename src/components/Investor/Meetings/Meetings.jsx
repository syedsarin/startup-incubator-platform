import "./Meetings.css";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  User,
  Video,
} from "lucide-react";

const upcomingMeetings = [
  {
    id: 1,
    startup: "AgriTech Solutions",
    founder: "Rahul Sharma",
    date: "12 Aug 2026",
    time: "11:00 AM",
    mode: "Online",
  },
  {
    id: 2,
    startup: "HealthAI",
    founder: "Priya Patel",
    date: "15 Aug 2026",
    time: "03:30 PM",
    mode: "Offline",
  },
];

const meetingHistory = [
  {
    id: 1,
    startup: "EduNext",
    date: "20 Jul 2026",
    status: "Completed",
  },
  {
    id: 2,
    startup: "FinGrow",
    date: "05 Jul 2026",
    status: "Completed",
  },
];

function Meetings() {
  return (
    <section className="meetings-section">

      <div className="meetings-header">

        <h2>Meetings</h2>

        <p>
          View your upcoming meetings and meeting history with startup founders.
        </p>

      </div>

      <div className="meetings-grid">

        <div className="meeting-card">

          <h3>Upcoming Meetings</h3>

          {upcomingMeetings.map((meeting, index) => (

            <motion.div
              key={meeting.id}
              className="meeting-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
            >

              <div className="meeting-info">

                <h4>{meeting.startup}</h4>

                <p>

                  <User size={16} />

                  {meeting.founder}

                </p>

                <p>

                  <CalendarDays size={16} />

                  {meeting.date}

                </p>

                <p>

                  <Clock size={16} />

                  {meeting.time}

                </p>

              </div>

              <button>

                <Video size={16} />

                {meeting.mode}

              </button>

            </motion.div>

          ))}

        </div>

        <div className="meeting-card">

          <h3>Meeting History</h3>

          <table>

            <thead>

              <tr>

                <th>Startup</th>
                <th>Date</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {meetingHistory.map((meeting) => (

                <tr key={meeting.id}>

                  <td>{meeting.startup}</td>

                  <td>{meeting.date}</td>

                  <td>

                    <span className="completed">

                      {meeting.status}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default Meetings;