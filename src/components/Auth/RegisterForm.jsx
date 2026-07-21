import "./Auth.css";
import "./RegisterForm.css";

import { motion } from "framer-motion";
import {
  UserPlus,
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

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
            <UserPlus size={32} />
          </div>

          <h1>Create Your Account</h1>

          <p className="auth-subtitle">
            Join StartupHub and start your startup journey.
          </p>

          <form className="auth-form">
            <div className="auth-group">
              <label htmlFor="name">Full Name</label>

              <div className="auth-input">
                <User size={18} />

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label htmlFor="email">Email Address</label>

              <div className="auth-input">
                <Mail size={18} />

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label htmlFor="phone">Phone Number</label>

              <div className="auth-input">
                <Phone size={18} />

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label htmlFor="city">City</label>

              <div className="auth-input">
                <MapPin size={18} />

                <input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  autoComplete="address-level2"
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label htmlFor="password">Password</label>

              <div className="auth-input">
                <Lock size={18} />

                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div className="auth-input">
                <Lock size={18} />

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            <div className="terms-box">
              <input
                type="checkbox"
                id="terms"
                required
              />

              <label htmlFor="terms">
                I agree to the Terms & Conditions and Privacy Policy.
              </label>
            </div>

            <button
              type="submit"
              className="auth-button"
            >
              Create Account
            </button>

            <p className="auth-bottom">
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default RegisterForm;