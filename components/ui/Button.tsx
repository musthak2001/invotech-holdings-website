type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-colors duration-200";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-blue-700",
    secondary:
      "bg-purple-600 text-white hover:bg-purple-700",
    outline:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
