import "./InvestorProfile.css";
import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  MapPin,
} from "lucide-react";

function InvestorProfile() {
  return (
    <section className="investor-profile">

      <div className="investor-profile-header">

        <div className="investor-avatar">
          I
        </div>

        <div>

          <h2>Investor Profile</h2>

          <p>
            View and manage your investor information.
          </p>

        </div>

      </div>

      <div className="investor-profile-grid">

        <div className="investor-profile-card">

          <h3>Personal Information</h3>

          <div className="profile-row">
            <User size={18} />
            <span>John Anderson</span>
          </div>

          <div className="profile-row">
            <Mail size={18} />
            <span>investor@email.com</span>
          </div>

          <div className="profile-row">
            <Phone size={18} />
            <span>+91 9876543210</span>
          </div>

          <div className="profile-row">
            <MapPin size={18} />
            <span>Mumbai, Maharashtra</span>
          </div>

        </div>

        <div className="investor-profile-card">

          <h3>Investment Information</h3>

          <div className="profile-row">
            <Building2 size={18} />
            <span>Angel Investor</span>
          </div>

          <div className="profile-row">
            <Briefcase size={18} />
            <span>Technology & Healthcare</span>
          </div>

          <div className="profile-row">
            <Building2 size={18} />
            <span>15 Investments</span>
          </div>

          <button className="edit-investor-btn">
            Edit Profile
          </button>

        </div>

      </div>

    </section>
  );
}

export default InvestorProfile;