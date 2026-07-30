import "./InvestorManagement.css";
import { motion } from "framer-motion";
import { Eye, UserCheck, UserX } from "lucide-react";

const investors = [
  {
    id: 1,
    name: "John Anderson",
    company: "Alpha Ventures",
    focus: "Technology",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    company: "Future Capital",
    focus: "Healthcare",
    status: "Pending",
  },
  {
    id: 3,
    name: "Michael Brown",
    company: "Growth Partners",
    focus: "FinTech",
    status: "Active",
  },
];

function InvestorManagement() {
  return (
    <section className="investor-management">

      <div className="investor-header">

        <h2>Investor Management</h2>

        <p>
          Review and manage registered investors on the platform.
        </p>

      </div>

      <div className="investor-table-wrapper">

        <table className="investor-table">

          <thead>

            <tr>

              <th>Investor</th>
              <th>Company</th>
              <th>Investment Focus</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {investors.map((investor, index) => (

              <motion.tr
                key={investor.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >

                <td>{investor.name}</td>

                <td>{investor.company}</td>

                <td>{investor.focus}</td>

                <td>

                  <span
                    className={`status ${investor.status.toLowerCase()}`}
                  >
                    {investor.status}
                  </span>

                </td>

                <td>

                  <div className="action-buttons">

                    <button className="view-btn">

                      <Eye size={16} />

                      View

                    </button>

                    <button className="approve-btn">

                      <UserCheck size={16} />

                      Verify

                    </button>

                    <button className="reject-btn">

                      <UserX size={16} />

                      Suspend

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

export default InvestorManagement;