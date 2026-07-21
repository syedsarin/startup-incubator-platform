import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <aside className="border-r border-gray-200 bg-white shadow-sm">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        <DashboardHeader />

        <main className="flex-1 overflow-y-auto px-6 pb-8 lg:px-10 lg:pb-10">

          <motion.div
            className="max-w-6xl mx-auto mt-8"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            <Outlet />
          </motion.div>

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;