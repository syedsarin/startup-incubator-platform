import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  User,
  FileText,
  CalendarDays,
  LogOut,
  Rocket
} from "lucide-react";

function Sidebar() {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User
    },
    {
      name: "Applications",
      path: "/applications",
      icon: FileText
    },
    {
      name: "Consultations",
      path: "/consultation",
      icon: CalendarDays
    }
  ];

  return (
    <motion.aside
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:flex w-72 flex-col border-r border-slate-200 bg-white"
    >

      {/* Logo */}

      <div className="border-b border-slate-200 px-7 py-8">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg">

            <Rocket className="h-6 w-6 text-white"/>

          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              StartupHub
            </h2>

            <p className="text-sm text-slate-500">
              Incubator Portal
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-5">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink key={item.path} to={item.path}>

              {({ isActive }) => (

                <motion.div

                  whileHover={{
                    scale: 1.02,
                    x: 5
                  }}

                  whileTap={{
                    scale: 0.98
                  }}

                  className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300

                  ${
                    isActive
                    ? "bg-indigo-600 text-white shadow-xl"
                    : "text-slate-600 hover:bg-slate-100"
                  }`}

                >

                  <Icon size={22} />

                  <span className="font-medium">

                    {item.name}

                  </span>

                </motion.div>

              )}

            </NavLink>

          );

        })}

      </nav>

      {/* Profile */}

      <div className="border-t border-slate-200 p-5">

        <motion.div

          whileHover={{
            scale: 1.02
          }}

          className="rounded-2xl bg-slate-50 p-4"

        >

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">

              S

            </div>

            <div>

              <h3 className="font-semibold text-slate-900">

                Syed Sarin

              </h3>

              <p className="text-sm text-slate-500">

                Startup Founder

              </p>

            </div>

          </div>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-3 font-medium text-red-500 transition hover:bg-red-50">

            <LogOut size={18}/>

            Logout

          </button>

        </motion.div>

      </div>

    </motion.aside>
  );
}

export default Sidebar;