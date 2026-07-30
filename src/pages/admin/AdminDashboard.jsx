import DashboardHero from "../../components/Admin/DashboardHero/DashboardHero";
import DashboardStats from "../../components/Admin/DashboardStats/DashboardStats";
import StartupManagement from "../../components/Admin/StartupManagement/StartupManagement";
import InvestorManagement from "../../components/Admin/InvestorManagement/InvestorManagement";
import MentorManagement from "../../components/Admin/MentorManagement/MentorManagement";
import EventManagement from "../../components/Admin/EventManagement/EventManagement";
import ProgramManagement from "../../components/Admin/ProgramManagement/ProgramManagement";
import Analytics from "../../components/Admin/Analytics/Analytics";

function AdminDashboard() {
  return (
    <div className="dashboard-content">

      <DashboardHero />

      <DashboardStats />

      <StartupManagement />

      <InvestorManagement />

      <MentorManagement />

      <EventManagement />

      <ProgramManagement />

      <Analytics />

    </div>
  );
}

export default AdminDashboard;