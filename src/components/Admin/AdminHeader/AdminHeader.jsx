import "./AdminHeader.css";
import { Bell, Search } from "lucide-react";

function AdminHeader() {
  return (
    <header className="admin-header">

      <div className="admin-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search..."
        />

      </div>

      <div className="admin-actions">

        <button className="notification-btn">

          <Bell size={20} />

        </button>

        <div className="admin-profile">

          <div className="admin-avatar">
            A
          </div>

          <div>

            <h4>Administrator</h4>

            <p>Platform Admin</p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default AdminHeader;