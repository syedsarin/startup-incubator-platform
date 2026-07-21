import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Settings,
  CalendarDays,
  ChevronDown
} from "lucide-react";

function DashboardHeader() {

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Left */}
        <div>

          <h1 className="text-2xl font-bold text-slate-900">
            Dashboard
          </h1>

          <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">

            <CalendarDays size={16} />

            <span>{today}</span>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <div className="hidden lg:flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-indigo-500 focus-within:bg-white">

            <Search
              size={18}
              className="mr-3 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-64 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />

          </div>

          {/* Notification */}
          <motion.button
            whileHover={{
              y: -2,
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md"
          >

            <Bell size={20} />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500"></span>

          </motion.button>

          {/* Settings */}
          <motion.button
            whileHover={{
              rotate: 45
            }}
            className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md"
          >

            <Settings size={20} />

          </motion.button>

          {/* Profile */}
          <motion.div
            whileHover={{
              y: -2
            }}
            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:shadow-lg"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">

              S

            </div>

            <div className="hidden md:block">

              <p className="font-semibold text-slate-900">
                Syed Sarin
              </p>

              <p className="text-xs text-slate-500">
                Startup Founder
              </p>

            </div>

            <ChevronDown
              size={18}
              className="text-slate-400"
            />

          </motion.div>

        </div>

      </div>
    </motion.header>
  );
}

export default DashboardHeader;