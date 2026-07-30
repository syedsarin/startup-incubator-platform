import { Outlet } from "react-router-dom";

import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import TopNavbar from "../components/Dashboard/TopNavbar/TopNavbar";


function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopNavbar />

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;