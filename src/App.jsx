import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

/* Public Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Services from "./pages/Services";
import Mentors from "./pages/Mentors";
import Investors from "./pages/Investors";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookConsultation from "./pages/BookConsultation";
import FAQ from "./pages/FAQ";

/* Startup Dashboard */
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Profile from "./pages/dashboard/Profile";
import Notifications from "./pages/dashboard/Notifications";
import Settings from "./pages/dashboard/Settings";

/* Investor Dashboard */
import InvestorDashboard from "./pages/investor/InvestorDashboard";
import InvestorProfile from "./pages/investor/InvestorProfile";
import InvestorSettings from "./pages/investor/InvestorSettings";

/* Admin Panel */
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminSettings from "./pages/admin/AdminSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Website */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/consultation" element={<BookConsultation />} />

          {/* Temporary Investor Pages */}
          <Route
            path="/investor-dashboard"
            element={<InvestorDashboard />}
          />

          <Route
            path="/investor-profile"
            element={<InvestorProfile />}
          />

          <Route
            path="/investor-settings"
            element={<InvestorSettings />}
          />
        </Route>

        {/* Startup Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={<AdminDashboard />}
          />

          <Route
            path="settings"
            element={<AdminSettings />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;