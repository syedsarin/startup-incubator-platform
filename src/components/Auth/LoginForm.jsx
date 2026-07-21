import "./Auth.css";
import "./LoginForm.css";

import { motion } from "framer-motion";
import { LogIn, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <section className="auth-section">
      <div className="auth-container">
        <motion.div
          className="auth-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="auth-icon">
            <LogIn size={32} />
          </div>

          <h1>Welcome Back</h1>

          <p className="auth-subtitle">
            Login to your StartupHub account
          </p>

          <form className="auth-form">
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
              <label htmlFor="password">Password</label>

              <div className="auth-input">
                <Lock size={18} />

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <div className="forgot-password">
              <button type="button" className="forgot-link">
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="auth-button">
              Login
            </button>

            <p className="auth-bottom">
              Don't have an account?
              <Link to="/register"> Register </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default LoginForm;