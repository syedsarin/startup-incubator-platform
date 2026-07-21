import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>

      <Navbar />

      <main className="bg-slate-50">
        <Outlet />
      </main>

      <Footer />

    </>
  );
}

export default Layout;