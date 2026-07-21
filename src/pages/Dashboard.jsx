import DashboardHero from "../components/Dashboard/DashboardHero";
import DashboardStats from "../components/Dashboard/DashboardStats";
import QuickActions from "../components/Dashboard/QuickActions";
import RecentActivity from "../components/Dashboard/RecentActivity";

function Dashboard() {
  return (
    <div className="flex flex-col gap-20">

      <DashboardHero />

      <DashboardStats />

      <QuickActions />

      <RecentActivity />

    </div>
  );
}

export default Dashboard;