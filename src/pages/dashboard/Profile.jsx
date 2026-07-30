import "./Profile.css";
import { User, Mail, Phone, Building2, MapPin, Globe } from "lucide-react";

function Profile() {
  return (
    <section className="profile-page">

      <div className="profile-header">

        <div className="profile-avatar">
          S
        </div>

        <div>

          <h2>Startup Founder Profile</h2>

          <p>Manage your personal and startup information.</p>

        </div>

      </div>

      <div className="profile-grid">

        <div className="profile-card">

          <h3>Personal Information</h3>

          <div className="profile-item">
            <User size={18} />
            <span>Syed Sarin Mehdi</span>
          </div>

          <div className="profile-item">
            <Mail size={18} />
            <span>founder@email.com</span>
          </div>

          <div className="profile-item">
            <Phone size={18} />
            <span>+91 9876543210</span>
          </div>

          <div className="profile-item">
            <MapPin size={18} />
            <span>Amravati, Maharashtra</span>
          </div>

        </div>

        <div className="profile-card">

          <h3>Startup Information</h3>

          <div className="profile-item">
            <Building2 size={18} />
            <span>StartupHub Technologies</span>
          </div>

          <div className="profile-item">
            <Globe size={18} />
            <span>www.startuphub.com</span>
          </div>

          <div className="profile-item">
            <Building2 size={18} />
            <span>Technology</span>
          </div>

          <button className="edit-profile-btn">
            Edit Profile
          </button>

        </div>

      </div>

    </section>
  );
}

export default Profile;