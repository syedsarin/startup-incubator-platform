import { motion } from "framer-motion";

function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",

    secondary:
      "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;