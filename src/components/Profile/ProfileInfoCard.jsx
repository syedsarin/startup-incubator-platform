import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera
} from "lucide-react";

function ProfileInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="flex flex-col items-center">

        <div className="relative">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-4xl font-bold text-white shadow-lg">
            S
          </div>

          <button className="absolute bottom-1 right-1 rounded-full bg-white p-2 shadow-md hover:bg-slate-100 transition">
            <Camera size={18} />
          </button>

        </div>

        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          Syed Sarin
        </h2>

        <p className="text-slate-500">
          Startup Founder
        </p>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3 text-slate-600">
          <Mail size={18} />
          syed@example.com
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <Phone size={18} />
          +91 9876543210
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <MapPin size={18} />
          Maharashtra, India
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <Calendar size={18} />
          Joined July 2026
        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between text-sm mb-2">

          <span className="font-medium">
            Profile Completion
          </span>

          <span className="text-indigo-600 font-semibold">
            85%
          </span>

        </div>

        <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-indigo-600"
          />

        </div>

      </div>

    </motion.div>
  );
}

export default ProfileInfoCard;