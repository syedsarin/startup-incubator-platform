import "./ContactForm.css";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

function ContactForm() {
  return (
    <section className="contact-form-section">

      <div className="contact-form-container">

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="contact-left">

            <p className="contact-small-title">
              SEND MESSAGE
            </p>

            <h2>

              We'd Love To

              <span> Hear From You</span>

            </h2>

            <p className="contact-description">

              Whether you have a startup idea, need mentorship,
              funding support, or simply want to connect with us,
              fill out the form and our team will get back to you
              as soon as possible.

            </p>

          </div>

          <form className="contact-form">

            <div className="form-grid">

              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="form-group">
                <label>Subject</label>

                <input
                  type="text"
                  placeholder="Enter subject"
                />
              </div>

            </div>

            <div className="form-group full-width">

              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>

            </div>

            <button type="submit">

              <Send size={18} />

              Send Message

            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactForm;