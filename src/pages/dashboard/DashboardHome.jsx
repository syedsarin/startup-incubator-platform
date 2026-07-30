import "./DashboardHome.css";

import DashboardHero from "../../components/Dashboard/DashboardHero/DashboardHero";
import DashboardStats from "../../components/Dashboard/DashboardStats/DashboardStats";
import EventRegistration from "../../components/Dashboard/EventRegistration/EventRegistration";
import Copilot from "../../components/Copilot/Copilot";
import MentorBooking from "../../components/Dashboard/MentorBooking/MentorBooking";
import DocumentManagement from "../../components/Dashboard/DocumentManagement/DocumentManagement";
import Notifications from "../../components/Dashboard/Notifications/Notifications";
import AnalyticsDashboard from "../../components/Dashboard/AnalyticsDashboard/AnalyticsDashboard";

function DashboardHome() {

  return (
    <main className="dashboard-home">

      <DashboardHero />

      <DashboardStats />

      <EventRegistration />

      <Copilot />
      
      <MentorBooking />

      <DocumentManagement />

      <Notifications />

      <AnalyticsDashboard />

    </main>
  );

}

export default DashboardHome;