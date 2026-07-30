import "./MentorManagement.css";
import { motion } from "framer-motion";
import { Eye, UserCheck, UserX } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    expertise: "Artificial Intelligence",
    experience: "12 Years",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    expertise: "Business Strategy",
    experience: "8 Years",
    status: "Pending",
  },
  {
    id: 3,
    name: "Amit Joshi",
    expertise: "Cyber Security",
    experience: "10 Years",
    status: "Active",
  },
];

function MentorManagement() {
  return (
    <section className="mentor-management">

      <div className="mentor-header">

        <h2>Mentor Management</h2>

        <p>
          Manage mentors available on the incubation platform.
        </p>

      </div>

      <div className="mentor-table-wrapper">

        <table className="mentor-table">

          <thead>

            <tr>

              <th>Mentor</th>
              <th>Expertise</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {mentors.map((mentor, index) => (

              <motion.tr
                key={mentor.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >

                <td>{mentor.name}</td>

                <td>{mentor.expertise}</td>

                <td>{mentor.experience}</td>

                <td>

                  <span className={`status ${mentor.status.toLowerCase()}`}>
                    {mentor.status}
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

                      Approve

                    </button>

                    <button className="reject-btn">

                      <UserX size={16} />

                      Remove

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

export default MentorManagement;