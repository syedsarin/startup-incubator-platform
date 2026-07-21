import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

function StartupCards() {

  const startups = [
    {
      title: "AI Healthcare",
      description:
        "Using artificial intelligence to transform healthcare services and improve patient outcomes."
    },
    {
      title: "FinTech Platform",
      description:
        "Building secure digital financial solutions for businesses and individuals."
    },
    {
      title: "Green Energy",
      description:
        "Developing sustainable energy technologies for a cleaner future."
    }
  ];

  return (
    <section className="mt-16">

      <div className="mb-10 text-center">

        <p className="text-sm font-semibold uppercase tracking-[2px] text-indigo-600">
          Innovation
        </p>

        <h2 className="mt-2 text-4xl font-bold text-slate-900">
          Trending Startups
        </h2>
      <br></br>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {startups.map((startup, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15
            }}
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg">

              <Rocket size={30} />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">

              {startup.title}

            </h3>

            <p className="mt-4 leading-7 text-slate-500">

              {startup.description}

            </p>

            <button
              className="mt-8 flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-700"
            >
              View Details

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default StartupCards;