import "./DashboardStats.css";
import {
  Briefcase,
  DollarSign,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Opportunities",
    value: "24",
    icon: <Briefcase size={30} />,
  },
  {
    title: "Investments",
    value: "08",
    icon: <DollarSign size={30} />,
  },
  {
    title: "Meetings",
    value: "12",
    icon: <CalendarDays size={30} />,
  },
  {
    title: "Portfolio Growth",
    value: "+18%",
    icon: <TrendingUp size={30} />,
  },
];

function DashboardStats() {
  return (
    <section className="investor-stats">

      {stats.map((item) => (

        <div className="investor-stat-card" key={item.title}>

          <div className="stat-icon">

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