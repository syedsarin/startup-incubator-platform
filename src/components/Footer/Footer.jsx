import "./Footer.css";
import { Link } from "react-router-dom";
import {
  Rocket,
  Mail,
  MapPin,
  Phone,
  Clock,
  Globe
} from "lucide-react";


function Footer() {


  return (

    <footer className="footer">


      <div className="footer-container">



        {/* Brand */}

        <div className="footer-brand">


          <div className="footer-logo">

            <Rocket size={26}/>

            <h2>
              StartupHub
            </h2>

          </div>



          <p>

            Empowering entrepreneurs, innovators, and startups through
            mentorship, incubation, funding support, and a thriving
            startup ecosystem.

          </p>




          <div className="footer-social">


            <a href="#" aria-label="Website">

              <Globe size={18}/>

            </a>


          </div>


        </div>





        {/* Quick Links */}

        <div className="footer-links">


          <h3>
            Quick Links
          </h3>


          <Link to="/">
            Home
          </Link>


          <Link to="/about">
            About
          </Link>


          <Link to="/programs">
            Programs
          </Link>


          <Link to="/services">
            Services
          </Link>


          <Link to="/mentors">
            Mentors
          </Link>


          <Link to="/events">
            Events
          </Link>


          <Link to="/contact">
            Contact
          </Link>


        </div>





        {/* Resources */}

        <div className="footer-links">


          <h3>
            Resources
          </h3>


          <Link to="/faqs">
            FAQs
          </Link>


          <Link to="/blog">
            Startup Blog
          </Link>


          <Link to="/community">
            Community
          </Link>


          <Link to="/investors">
            Investors
          </Link>


          <Link to="/success-stories">
            Success Stories
          </Link>


          <Link to="/register">
            Apply Now
          </Link>


        </div>





        {/* Contact */}

        <div className="footer-contact">


          <h3>
            Contact
          </h3>



          <p>

            <Mail size={16}/>

            support@startuphub.com

          </p>



          <p>

            <MapPin size={16}/>

            Hyderabad, Telangana, India

          </p>



          <p>

            <Phone size={16}/>

            +91 XXXXX XXXXX

          </p>



          <p>

            <Clock size={16}/>

            Mon - Fri | 9:00 AM - 6:00 PM

          </p>


        </div>



      </div>





      {/* Bottom */}

      <div className="footer-bottom">


        <p>
          © 2026 StartupHub. All Rights Reserved.
        </p>



        <div className="footer-bottom-links">


          <Link to="/privacy-policy">
            Privacy Policy
          </Link>


          <span>
            |
          </span>


          <Link to="/terms">
            Terms & Conditions
          </Link>


        </div>


      </div>


    </footer>

  );

}


export default Footer;