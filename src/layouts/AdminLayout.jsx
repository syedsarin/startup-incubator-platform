import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Admin/AdminSidebar/AdminSidebar";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import "./AdminLayout.css";

function AdminLayout() {
  return (
    <div className="dashboard-layout">

      <AdminSidebar />

      <div className="dashboard-main">

        <AdminHeader />

        <div className="dashboard-page">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;