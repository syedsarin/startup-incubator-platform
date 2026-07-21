import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  CalendarDays,
  TrendingUp
} from "lucide-react";

function DashboardHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 lg:grid-cols-[2fr_1fr]"
    >
      {/* Left Card */}
      <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 p-8 text-white shadow-xl">

        <p className="text-sm font-semibold uppercase tracking-[3px] text-indigo-200">
          Welcome Back
        </p>

        <h1 className="mt-3 text-4xl font-bold leading-tight">
          Hi, Syed 👋
        </h1>

        <p className="mt-4 max-w-xl text-indigo-100 leading-7">
          Continue building your startup, submit new applications,
          schedule mentor consultations and track your overall progress.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            to="/register"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Apply Startup
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/consultation"
            className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-indigo-700"
          >
            Book Consultation
          </Link>

        </div>

      </div>

      {/* Right Card */}

      <motion.div
        whileHover={{
          y: -6
        }}
        className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
      >

        <h3 className="text-lg font-bold text-slate-900">
          Your Journey
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Keep moving forward.
        </p>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-indigo-100 p-3">

              <Rocket
                size={20}
                className="text-indigo-600"
              />

            </div>

            <div>

              <h4 className="font-semibold">
                Startup Ready
              </h4>

              <p className="text-sm text-slate-500">
                Complete your application
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-emerald-100 p-3">

              <CalendarDays
                size={20}
                className="text-emerald-600"
              />

            </div>

            <div>

              <h4 className="font-semibold">
                Consultation
              </h4>

              <p className="text-sm text-slate-500">
                Book a mentor session
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-orange-100 p-3">

              <TrendingUp
                size={20}
                className="text-orange-600"
              />

            </div>

            <div>

              <h4 className="font-semibold">
                Growth
              </h4>

              <p className="text-sm text-slate-500">
                Track your startup progress
              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </motion.section>
  );
}

export default DashboardHero;