import { motion } from "framer-motion";
import { UserPen } from "lucide-react";

function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
    >
      <div>

        <p className="text-sm font-semibold uppercase tracking-[2px] text-indigo-600">
          Account
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your personal information and startup details.
        </p>

      </div>

      <motion.button
        whileHover={{
          scale: 1.04,
          y: -2
        }}
        whileTap={{
          scale: 0.97
        }}
        className="flex items-center gap-3 rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
      >
        <UserPen size={20} />

        Edit Profile
      </motion.button>

    </motion.div>
  );
}

export default ProfileHeader;