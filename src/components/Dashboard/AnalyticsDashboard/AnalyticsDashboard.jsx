import "./AnalyticsDashboard.css";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  CalendarDays,
  FolderOpen,
} from "lucide-react";

const analytics = [
  {
    id: 1,
    title: "Startup Progress",
    value: "78%",
    icon: <TrendingUp size={32} />,
    color: "blue",
  },
  {
    id: 2,
    title: "Mentor Sessions",
    value: "12",
    icon: <Users size={32} />,
    color: "green",
  },
  {
    id: 3,
    title: "Events Attended",
    value: "8",
    icon: <CalendarDays size={32} />,
    color: "orange",
  },
  {
    id: 4,
    title: "Documents Uploaded",
    value: "15",
    icon: <FolderOpen size={32} />,
    color: "purple",
  },
];

function AnalyticsDashboard() {
  return (
    <section className="analytics-dashboard">

      <div className="analytics-header">

        <h2>Analytics Dashboard</h2>

        <p>
          Monitor your startup performance and activity at a glance.
        </p>

      </div>

      <div className="analytics-grid">

        {analytics.map((item, index) => (

          <motion.div
            key={item.id}
            className={`analytics-card ${item.color}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >

            <div className="analytics-icon">

              {item.icon}

            </div>

            <h3>{item.value}</h3>

            <p>{item.title}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default AnalyticsDashboard;