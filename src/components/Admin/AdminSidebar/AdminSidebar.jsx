import "./AdminSidebar.css";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Rocket,
  Briefcase,
  Users,
  CalendarDays,
  GraduationCap,
  BarChart3,
  Settings,
} from "lucide-react";

function AdminSidebar() {

  return (

    <aside className="admin-sidebar">

      <h2>Admin</h2>

      <nav>

        <NavLink to="/admin">
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/admin/startups">
          <Rocket size={18} />
          Startups
        </NavLink>

        <NavLink to="/admin/investors">
          <Briefcase size={18} />
          Investors
        </NavLink>

        <NavLink to="/admin/mentors">
          <Users size={18} />
          Mentors
        </NavLink>

        <NavLink to="/admin/events">
          <CalendarDays size={18} />
          Events
        </NavLink>

        <NavLink to="/admin/programs">
          <GraduationCap size={18} />
          Programs
        </NavLink>

        <NavLink to="/admin/analytics">
          <BarChart3 size={18} />
          Analytics
        </NavLink>

        <NavLink to="/admin/settings">
          <Settings size={18} />
          Settings
        </NavLink>

      </nav>

    </aside>

  );

}

export default AdminSidebar;