import "./Analytics.css";
import { TrendingUp, Users, Rocket, IndianRupee } from "lucide-react";

const analytics = [
  {
    title: "Total Platform Users",
    value: "2,540",
    icon: <Users size={30} />,
  },
  {
    title: "Active Startups",
    value: "128",
    icon: <Rocket size={30} />,
  },
  {
    title: "Funding Raised",
    value: "₹8.6 Cr",
    icon: <IndianRupee size={30} />,
  },
  {
    title: "Growth Rate",
    value: "+24%",
    icon: <TrendingUp size={30} />,
  },
];

function Analytics() {
  return (
    <section className="analytics-section">

      <div className="analytics-header">

        <h2>Platform Analytics</h2>

        <p>
          Overview of the incubation platform performance.
        </p>

      </div>

      <div className="analytics-grid">

        {analytics.map((item) => (

          <div className="analytics-card" key={item.title}>

            <div className="analytics-icon">
              {item.icon}
            </div>

            <h3>{item.value}</h3>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Analytics;