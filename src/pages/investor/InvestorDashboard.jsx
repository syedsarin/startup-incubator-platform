import DashboardHero from "../../components/Investor/DashboardHero/DashboardHero";
import DashboardStats from "../../components/Investor/DashboardStats/DashboardStats";
import InvestmentOpportunities from "../../components/Investor/InvestmentOpportunities/InvestmentOpportunities";
import Meetings from "../../components/Investor/Meetings/Meetings";

function InvestorDashboard() {
  return (
    <div className="dashboard-content">

      <DashboardHero />

      <DashboardStats />

      <InvestmentOpportunities />

      <Meetings />

    </div>
  );
}

export default InvestorDashboard;