import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function CTASection({
  badge,
  title,
  highlight,
  subtitle,
  buttonText = "Get Started",
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-20 text-center text-white shadow-xl md:px-16"
        >

          {badge && (
            <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
              {badge}
            </span>
          )}

          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            {title}

            {highlight && (
              <span className="block text-blue-100">
                {highlight}
              </span>
            )}
          </h2>

          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              {subtitle}
            </p>
          )}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-blue-700 transition hover:scale-105"
            >
              {buttonText}

              <ArrowRight size={18} />
            </button>

            {secondaryButtonText && (
              <button
                onClick={onSecondaryClick}
                className="rounded-xl border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryButtonText}
              </button>
            )}

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CTASection;