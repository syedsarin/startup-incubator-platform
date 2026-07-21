import "./ContactInfo.css";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

function ContactInfo() {

  const contactDetails = [
    {
      icon: MapPin,
      title: "Office Address",
      value: "StartupHub Innovation Center",
      description: "Nagpur, Maharashtra, India",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "support@startuphub.com",
      description: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 98765 43210",
      description: "Mon - Fri | 9:00 AM - 6:00 PM",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Monday - Friday",
      description: "09:00 AM - 06:00 PM",
    },
  ];

  return (

    <section className="contact-info-section">

      <div className="contact-info-container">

        <div className="contact-info-heading">

          <p>CONTACT DETAILS</p>

          <h2>

            We're Always Ready
            <span> To Help</span>

          </h2>

        </div>

        <div className="contact-info-grid">

          {contactDetails.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                className="contact-info-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="contact-info-icon">

                  <Icon size={28} />

                </div>

                <h3>{item.title}</h3>

                <h4>{item.value}</h4>

                <p>{item.description}</p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );
}

export default ContactInfo;