import "./TopNavbar.css";
import {
  Search,
  Bell,
  UserCircle,
} from "lucide-react";

function TopNavbar() {
  return (
    <header className="top-navbar">

      <div className="top-left">

        <h1>Founder Dashboard</h1>

        <p>Welcome back! Here's what's happening today.</p>

      </div>

      <div className="top-right">

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile-box">

          <UserCircle size={38} />

          <div>
            <h4>Syed Sarin</h4>
            <p>Founder</p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default TopNavbar;