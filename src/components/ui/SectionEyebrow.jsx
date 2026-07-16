export default function SectionEyebrow({ inverse = false, className = "", children }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`h-px w-8 ${inverse ? "bg-secondary-container" : "bg-secondary"}`}
        aria-hidden="true"
      />
      <span
        className={`font-mono text-label-caps uppercase ${
          inverse ? "text-surface-variant" : "text-secondary"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
