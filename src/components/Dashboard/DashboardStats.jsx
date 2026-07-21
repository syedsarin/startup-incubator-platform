import { motion } from "framer-motion";
import {
  FileText,
  CalendarDays,
  Users,
  Newspaper,
  TrendingUp
} from "lucide-react";

function DashboardStats() {

  const stats = [
    {
      title: "Applications",
      value: "12",
      change: "+3 this month",
      icon: FileText,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Consultations",
      value: "5",
      change: "+1 this week",
      icon: CalendarDays,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Mentors",
      value: "18",
      change: "Available",
      icon: Users,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Blogs",
      value: "42",
      change: "Updated",
      icon: Newspaper,
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section className="mt-8">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Dashboard Overview
          </h2>

          <p className="mt-1 text-slate-500">
            Quick insights into your startup journey.
          </p>

        </div>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat, index) => {

          const Icon = stat.icon;

          return (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4
              }}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <h3 className="mt-4 text-4xl font-bold text-slate-900">
                    {stat.value}
                  </h3>

                  <div className="mt-4 flex items-center gap-2">

                    <TrendingUp
                      size={16}
                      className="text-emerald-500"
                    />

                    <span className="text-sm font-medium text-emerald-600">
                      {stat.change}
                    </span>

                  </div>

                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}
                >
                  <Icon size={26} />
                </div>

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}

export default DashboardStats;