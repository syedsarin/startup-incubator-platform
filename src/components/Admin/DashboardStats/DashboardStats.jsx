import "./DashboardStats.css";
import {
  Rocket,
  Briefcase,
  Users,
  CalendarDays,
  GraduationCap,
  BarChart3,
} from "lucide-react";

const stats = [
  {
    title: "Startups",
    value: "128",
    icon: <Rocket size={30} />,
  },
  {
    title: "Investors",
    value: "54",
    icon: <Briefcase size={30} />,
  },
  {
    title: "Mentors",
    value: "36",
    icon: <Users size={30} />,
  },
  {
    title: "Events",
    value: "18",
    icon: <CalendarDays size={30} />,
  },
  {
    title: "Programs",
    value: "12",
    icon: <GraduationCap size={30} />,
  },
  {
    title: "Applications",
    value: "245",
    icon: <BarChart3 size={30} />,
  },
];

function DashboardStats() {
  return (
    <section className="admin-stats">

      {stats.map((item) => (

        <div className="admin-stat-card" key={item.title}>

          <div className="admin-stat-icon">
            {item.icon}
          </div>

          <h2>{item.value}</h2>

          <p>{item.title}</p>

        </div>

      ))}

    </section>
  );
}

export default DashboardStats;