import "./DocumentManagement.css";
import { motion } from "framer-motion";
import {
  FileText,
  Upload,
  Download,
  Trash2,
  Eye,
} from "lucide-react";

const documents = [
  {
    id: 1,
    name: "Pitch Deck.pdf",
    type: "PDF",
    status: "Verified",
  },
  {
    id: 2,
    name: "Business Plan.pdf",
    type: "PDF",
    status: "Pending",
  },
  {
    id: 3,
    name: "Financial Projection.xlsx",
    type: "Excel",
    status: "Verified",
  },
  {
    id: 4,
    name: "Startup Registration.pdf",
    type: "PDF",
    status: "Pending",
  },
];

function DocumentManagement() {
  return (
    <section className="document-management">

      <div className="document-header">

        <div>

          <h2>Document Management</h2>

          <p>
            Upload, manage and access your startup documents.
          </p>

        </div>

        <button className="upload-btn">

          <Upload size={18} />

          Upload Document

        </button>

      </div>

      <div className="document-grid">

        {documents.map((doc, index) => (

          <motion.div
            key={doc.id}
            className="document-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >

            <div className="document-icon">

              <FileText size={40} />

            </div>

            <h3>{doc.name}</h3>

            <p>{doc.type}</p>

            <span
              className={`doc-status ${doc.status.toLowerCase()}`}
            >
              {doc.status}
            </span>

            <div className="document-actions">

              <button>

                <Eye size={16} />

              </button>

              <button>

                <Download size={16} />

              </button>

              <button>

                <Trash2 size={16} />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default DocumentManagement;