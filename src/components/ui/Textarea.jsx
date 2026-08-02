export default function Textarea({
  label,
  name,
  rows = 5,
  error,
  className = "",
  ...rest
}) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <span className="font-mono text-label-caps uppercase text-on-surface-variant">
          {label}
        </span>
      )}
      <textarea
        name={name}
        rows={rows}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={errorId}
        className={`resize-none rounded border bg-surface-container-lowest px-4 py-3 font-sans text-body-md text-on-background transition-colors focus:outline-none ${
          error
            ? "border-error focus:border-error"
            : "border-input-border focus:border-primary"
        }`}
        {...rest}
      />
      {error && (
        <span id={errorId} role="alert" className="font-sans text-sm text-error">
          {error}
        </span>
      )}
    </label>
  );
}
