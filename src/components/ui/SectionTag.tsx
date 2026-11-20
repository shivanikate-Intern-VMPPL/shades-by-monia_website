interface SectionTagProps {
  label: string;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionTag({
  label,
  theme = "light",
  className = "",
}: SectionTagProps) {
  const isDark = theme === "dark";

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <span className="text-[#D9A441] font-mono font-medium text-xs tracking-widest">//</span>
      <span
        className={`text-[11px] uppercase tracking-[0.22em] font-medium ${
          isDark ? "text-[#F7F4EE]/70" : "text-[#75726D]"
        }`}
      >
        {label.replace(/^\/\/\s*/, "")}
      </span>
    </div>
  );
}
