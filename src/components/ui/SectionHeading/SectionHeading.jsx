function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionHeading;