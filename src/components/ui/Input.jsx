export default function Input({ label, name, type = "text", error, className = "", ...rest }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <span className="font-mono text-label-caps uppercase text-on-surface-variant">
          {label}
        </span>
      )}
      <input
        name={name}
        type={type}
        className="rounded border border-input-border bg-surface-container-lowest px-4 py-3 font-sans text-body-md text-on-background transition-colors focus:border-primary focus:outline-none"
        {...rest}
      />
      {error && <span className="font-sans text-sm text-error">{error}</span>}
    </label>
  );
}
