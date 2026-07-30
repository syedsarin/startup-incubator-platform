import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Rocket,
  FileText,
  Users,
  HandCoins,
  CalendarDays,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "My Startup", path: "/dashboard/startup", icon: Rocket },
  { name: "Applications", path: "/dashboard/applications", icon: FileText },
  { name: "Mentors", path: "/dashboard/mentors", icon: Users },
  { name: "Investors", path: "/dashboard/investors", icon: HandCoins },
  { name: "Events", path: "/dashboard/events", icon: CalendarDays },
  { name: "Notifications", path: "/dashboard/notifications", icon: Bell },
  { name: "Profile", path: "/dashboard/profile", icon: User },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>StartupHub</h2>
      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      <button className="logout-btn">
        <LogOut size={20} />
        <span>Logout</span>
      </button>

    </aside>
  );
}

export default Sidebar;