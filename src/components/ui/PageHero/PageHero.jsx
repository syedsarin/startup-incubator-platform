import { motion } from "framer-motion";

function PageHero({
  icon,
  badge,
  title,
  highlight,
  subtitle,
  children,
  className = "",
}) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-24 ${className}`}
    >
      {/* Background Blur */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200 opacity-30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-200 opacity-30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >

          {badge && (
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              {icon}
              <span>{badge}</span>
            </div>
          )}

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            {title}

            {highlight && (
              <span className="block text-blue-600">
                {highlight}
              </span>
            )}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              {subtitle}
            </p>
          )}

          {children && (
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              {children}
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
}

export default PageHero;