function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
}) {
  return (
    <div
      className={`${
        center ? "mx-auto text-center" : ""
      } max-w-3xl`}
    >
      {badge && (
        <p className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
          {badge}
        </p>
      )}

      <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
        {title}

        {highlight && (
          <span className="block text-blue-600">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;