import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Rocket,
  CalendarDays,
  UserCircle,
  BookOpen,
  ArrowRight
} from "lucide-react";

function QuickActions() {

  const actions = [
    {
      title: "Apply Startup",
      description: "Submit a new startup application",
      path: "/apply",
      icon: Rocket,
      color: "from-indigo-500 to-violet-600"
    },
    {
      title: "Book Consultation",
      description: "Schedule a mentor meeting",
      path: "/consultation",
      icon: CalendarDays,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Edit Profile",
      description: "Update your personal information",
      path: "/profile",
      icon: UserCircle,
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Browse Programs",
      description: "Explore incubation programs",
      path: "/programs",
      icon: BookOpen,
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="mt-10">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-slate-500">
          Frequently used shortcuts to manage your startup.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {actions.map((action, index) => {

          const Icon = action.icon;

          return (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.45
              }}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
            >

              <Link
                to={action.path}
                className="group block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
              >

                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${action.color} text-white shadow-lg`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {action.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {action.description}
                </p>

                <div className="mt-8 flex items-center font-semibold text-indigo-600">

                  <span>Open</span>

                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                  />

                </div>

              </Link>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}

export default QuickActions;