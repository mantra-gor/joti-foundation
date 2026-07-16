export default function StatBlock({ label, value, divider = false, inverse = false, className = "" }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span
        className={`font-mono text-label-caps uppercase ${
          inverse ? "text-on-secondary/75" : "text-on-surface-variant"
        }`}
      >
        {label}
      </span>
      {divider && (
        <span
          className={`h-px w-10 ${inverse ? "bg-on-secondary/40" : "bg-outline-variant"}`}
          aria-hidden="true"
        />
      )}
      <span
        className={`font-display text-headline-lg-mobile md:text-headline-lg ${
          inverse ? "text-on-secondary" : "text-on-background"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
