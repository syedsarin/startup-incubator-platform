import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            StartupHub 🚀
          </h2>

          <p>
            Empowering founders to build, connect, and grow successful startups.
          </p>
        </div>


        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <a href="#">
            Home
          </a>

          <a href="#">
            Startups
          </a>

          <a href="#">
            Community
          </a>

          <a href="#">
            Contact
          </a>

        </div>


        <div className="footer-contact">

          <h3>
            Contact
          </h3>

          <p>
            Email: support@startuphub.com
          </p>

          <p>
            Location: India
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        © 2026 StartupHub. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;