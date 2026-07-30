import "./DashboardStats.css";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Handshake,
  TrendingUp,
} from "lucide-react";

function DashboardStats() {

  const stats = [
    {
      icon: FileText,
      value: "01",
      title: "Applications",
      color: "#2563eb",
    },
    {
      icon: Users,
      value: "08",
      title: "Mentors Connected",
      color: "#10b981",
    },
    {
      icon: Handshake,
      value: "03",
      title: "Investor Meetings",
      color: "#f59e0b",
    },
    {
      icon: TrendingUp,
      value: "65%",
      title: "Startup Progress",
      color: "#8b5cf6",
    },
  ];

  return (

    <section className="dashboard-stats">

      {stats.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={item.title}
            className="stats-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
          >

            <div
              className="stats-icon"
              style={{ background: item.color }}
            >
              <Icon size={26} />
            </div>

            <h2>{item.value}</h2>

            <p>{item.title}</p>

          </motion.div>

        );

      })}

    </section>

  );

}

export default DashboardStats;