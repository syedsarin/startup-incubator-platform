import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Services from "./pages/Services";
import Mentors from "./pages/Mentors";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookConsultation from "./pages/BookConsultation";
import Investors from "./pages/Investors";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Applications from "./pages/Applications";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Website Layout */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investors" element={<Investors />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/consultation" element={<BookConsultation />} />
          

        </Route>


        {/* User Dashboard Layout */}
        <Route element={<DashboardLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/applications" element={<Applications />} />

        </Route>


      </Routes>

    </BrowserRouter>
  );
}

export default App;