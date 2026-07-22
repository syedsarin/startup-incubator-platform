import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h2>StartupHub 🚀</h2>

          <p>
            Empowering entrepreneurs, innovators, and startups through
            mentorship, incubation, funding support, and a thriving startup
            ecosystem.
          </p>

        </div>


        {/* Quick Links */}

      <div className="footer-links">

  <h3>Quick Links</h3>

  <Link to="/">Home</Link>

  <Link to="/about">About</Link>

  <Link to="/programs">Programs</Link>

  <Link to="/services">Services</Link>

  <Link to="/mentors">Mentors</Link>

  <Link to="/events">Events</Link>

  <Link to="/blog">Blog</Link>

  <Link to="/contact">Contact</Link>

</div>

        {/* Resources */}

        <div className="footer-links">

  <h3>Resources</h3>

  <a href="#">Startup Resources</a>

  <a href="#">Community</a>

  <a href="#">Success Stories</a>

  <a href="#">Investors</a>

  <a href="#">Startup Directory</a>

  <Link to="/faqs">FAQs</Link>

  <Link to="/register">Apply Now</Link>

</div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 support@startuphub.com</p>

          <p>📍 Hyderabad, Telangana, India</p>

          <p>📞 +91 XXXXX XXXXX</p>

          <p>🌐 Mon - Fri | 9:00 AM - 6:00 PM</p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 StartupHub. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">

          <a href="#">Privacy Policy</a>

          <span>|</span>

          <a href="#">Terms & Conditions</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;