import "./Notifications.css";
import { motion } from "framer-motion";
import {
  Bell,
  CalendarDays,
  FileText,
  UserRound,
  CheckCircle,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Mentor Session Confirmed",
    message: "Your mentoring session with Dr. Sarah Johnson has been confirmed.",
    time: "10 minutes ago",
    type: "mentor",
    icon: <UserRound size={22} />,
  },
  {
    id: 2,
    title: "Event Registration Successful",
    message: "You have successfully registered for Startup Summit 2026.",
    time: "2 hours ago",
    type: "event",
    icon: <CalendarDays size={22} />,
  },
  {
    id: 3,
    title: "Document Verified",
    message: "Your Pitch Deck has been reviewed and verified.",
    time: "Yesterday",
    type: "document",
    icon: <FileText size={22} />,
  },
  {
    id: 4,
    title: "Startup Progress Updated",
    message: "Congratulations! Your startup has completed another milestone.",
    time: "2 days ago",
    type: "progress",
    icon: <CheckCircle size={22} />,
  },
];

function Notifications() {
  return (
    <section className="notifications-section">

      <div className="notifications-header">

        <h2>Notification System</h2>

        <p>
          Stay informed about your startup activities, mentor sessions,
          events and important updates.
        </p>

      </div>

      <div className="notifications-list">

        {notifications.map((item, index) => (

          <motion.div
            key={item.id}
            className="notification-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >

            <div className={`notification-icon ${item.type}`}>

              {item.icon}

            </div>

            <div className="notification-content">

              <h3>{item.title}</h3>

              <p>{item.message}</p>

              <span>{item.time}</span>

            </div>

            <Bell size={18} className="notification-bell" />

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Notifications;