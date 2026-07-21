import { motion } from "framer-motion";
import {
  Rocket,
  CalendarDays,
  User,
  CheckCircle,
  Clock
} from "lucide-react";

function RecentActivity() {

  const activities = [
    {
      title: "Startup Application Submitted",
      description: "Your application has been received successfully.",
      time: "2 hours ago",
      icon: Rocket,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Consultation Scheduled",
      description: "Meeting confirmed with Startup Mentor.",
      time: "Yesterday",
      icon: CalendarDays,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Profile Updated",
      description: "Your profile information has been updated.",
      time: "3 days ago",
      icon: User,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Application Approved",
      description: "Congratulations! Your startup has moved to the next stage.",
      time: "Last Week",
      icon: CheckCircle,
      color: "bg-violet-100 text-violet-600"
    }
  ];

  return (
    <section className="mt-10">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          Recent Activity
        </h2>

        <p className="mt-1 text-slate-500">
          Stay updated with your latest startup activities.
        </p>

      </div>

      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

        {activities.map((activity, index) => {

          const Icon = activity.icon;

          return (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4
              }}
              whileHover={{
                backgroundColor: "#f8fafc"
              }}
              className={`flex items-start justify-between p-6 transition ${
                index !== activities.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >

              <div className="flex gap-5">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${activity.color}`}
                >
                  <Icon size={24} />
                </div>

                <div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {activity.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {activity.description}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-500">

                <Clock size={16} />

                {activity.time}

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}

export default RecentActivity;