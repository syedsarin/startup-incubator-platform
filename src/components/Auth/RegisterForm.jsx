import "./Auth.css";
import "./RegisterForm.css";

import { motion } from "framer-motion";

import {
  Rocket,
  Building2,
  User,
  Users,
  Mail,
  Phone,
  Globe,
  Briefcase,
  BarChart3,
  Target,
  Lightbulb,
  TrendingUp,
  DollarSign,
  Upload,
  Link2,
} from "lucide-react";

function RegisterForm() {
  return (
    <section className="auth-section">
      <div className="auth-container">

        <motion.div
          className="auth-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className="register-icon">
            <Rocket size={32} />
          </div>

          <h1>Apply for Incubation</h1>

          <p className="auth-subtitle">
            Submit your startup application to join StartupHub's incubation
            program.
          </p>

          <form className="auth-form">

            <div className="auth-group">
              <label>Startup Name</label>

              <div className="auth-input">
                <Building2 size={18} />

                <input
                  type="text"
                  placeholder="Enter startup name"
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Founder Name</label>

              <div className="auth-input">
                <User size={18} />

                <input
                  type="text"
                  placeholder="Enter founder name"
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Co-Founder Details</label>

              <div className="auth-input">
                <Users size={18} />

                <input
                  type="text"
                  placeholder="Enter co-founder details"
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Email Address</label>

              <div className="auth-input">
                <Mail size={18} />

                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Phone Number</label>

              <div className="auth-input">
                <Phone size={18} />

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Website</label>

              <div className="auth-input">
                <Globe size={18} />

                <input
                  type="url"
                  placeholder="https://yourstartup.com"
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Industry</label>

              <div className="auth-input">
                <Briefcase size={18} />

                <input
                  type="text"
                  placeholder="AI, HealthTech, FinTech..."
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Startup Stage</label>

              <div className="auth-input">
                <BarChart3 size={18} />

                <select required>
                  <option value="">Select Startup Stage</option>
                  <option>Idea Stage</option>
                  <option>MVP</option>
                  <option>Early Revenue</option>
                  <option>Growth Stage</option>
                  <option>Scaling</option>
                </select>
              </div>
            </div>

            <div className="auth-group">
              <label>Problem Statement</label>

              <textarea
                rows="4"
                placeholder="Describe the problem your startup solves..."
              ></textarea>
            </div>

            <div className="auth-group">
              <label>Solution</label>

              <textarea
                rows="4"
                placeholder="Describe your solution..."
              ></textarea>
            </div>

            <div className="auth-group">
              <label>Target Market</label>

              <div className="auth-input">
                <Target size={18} />

                <input
                  type="text"
                  placeholder="Who are your target customers?"
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Business Model</label>

              <div className="auth-input">
                <Lightbulb size={18} />

                <input
                  type="text"
                  placeholder="Describe your business model"
                />
              </div>
            </div>

                        <div className="auth-group">
              <label>Revenue Model</label>

              <div className="auth-input">
                <TrendingUp size={18} />

                <input
                  type="text"
                  placeholder="How does your startup generate revenue?"
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Team Size</label>

              <div className="auth-input">
                <Users size={18} />

                <input
                  type="number"
                  placeholder="Number of team members"
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Funding Raised</label>

              <div className="auth-input">
                <DollarSign size={18} />

                <input
                  type="text"
                  placeholder="Bootstrapped / ₹10 Lakhs / $50K"
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Pitch Deck Upload</label>

              <div className="auth-input">
                <Upload size={18} />

                <input
                  type="file"
                  accept=".pdf,.ppt,.pptx"
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Demo Video</label>

              <div className="auth-input">
                <Upload size={18} />

                <input
                  type="file"
                  accept="video/*"
                />
              </div>
            </div>

            <div className="auth-group">
              <label>MVP Link</label>

              <div className="auth-input">
                <Link2 size={18} />

                <input
                  type="url"
                  placeholder="https://your-demo-link.com"
                />
              </div>
            </div>

            <button
              type="submit"
              className="auth-button"
            >
              Submit Application
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}

export default RegisterForm;