import "./ProgramManagement.css";
import { motion } from "framer-motion";
import { Eye, Pencil, Trash2 } from "lucide-react";

const programs = [
  {
    id: 1,
    name: "Startup Incubation",
    duration: "6 Months",
    startups: 35,
    status: "Active",
  },
  {
    id: 2,
    name: "AI Accelerator",
    duration: "3 Months",
    startups: 20,
    status: "Active",
  },
  {
    id: 3,
    name: "Women Entrepreneur Program",
    duration: "4 Months",
    startups: 18,
    status: "Upcoming",
  },
];

function ProgramManagement() {
  return (
    <section className="program-management">

      <div className="program-header">

        <h2>Program Management</h2>

        <p>
          Manage incubation and accelerator programs.
        </p>

      </div>

      <div className="program-table-wrapper">

        <table className="program-table">

          <thead>

            <tr>

              <th>Program</th>
              <th>Duration</th>
              <th>Startups</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {programs.map((program, index) => (

              <motion.tr
                key={program.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >

                <td>{program.name}</td>

                <td>{program.duration}</td>

                <td>{program.startups}</td>

                <td>

                  <span className={`status ${program.status.toLowerCase()}`}>
                    {program.status}
                  </span>

                </td>

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

export default ProgramManagement;