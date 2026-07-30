import "./StartupManagement.css";
import { motion } from "framer-motion";
import { Eye, CheckCircle, XCircle } from "lucide-react";

const startups = [
  {
    id: 1,
    name: "AgriTech Solutions",
    founder: "Rahul Sharma",
    category: "Agriculture",
    status: "Pending",
  },
  {
    id: 2,
    name: "HealthAI",
    founder: "Priya Patel",
    category: "Healthcare",
    status: "Approved",
  },
  {
    id: 3,
    name: "EduNext",
    founder: "Amit Verma",
    category: "Education",
    status: "Pending",
  },
];

function StartupManagement() {
  return (
    <section className="startup-management">

      <div className="startup-header">

        <h2>Startup Management</h2>

        <p>
          Review and manage startup applications.
        </p>

      </div>

      <div className="startup-table-wrapper">

        <table className="startup-table">

          <thead>

            <tr>

              <th>Startup</th>
              <th>Founder</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {startups.map((startup, index) => (

              <motion.tr
                key={startup.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >

                <td>{startup.name}</td>

                <td>{startup.founder}</td>

                <td>{startup.category}</td>

                <td>

                  <span
                    className={`status ${startup.status.toLowerCase()}`}
                  >
                    {startup.status}
                  </span>

                </td>

                <td>

                  <div className="action-buttons">

                    <button className="view-btn">
                      <Eye size={16} />
                      View
                    </button>

                    <button className="approve-btn">
                      <CheckCircle size={16} />
                      Approve
                    </button>

                    <button className="reject-btn">
                      <XCircle size={16} />
                      Reject
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

export default StartupManagement;