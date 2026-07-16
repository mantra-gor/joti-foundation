const TONE_CLASSES = {
  terracotta: "bg-secondary text-on-secondary",
  amber: "bg-accent text-on-accent",
  forest: "bg-primary-container text-on-primary-container",
  translucent: "bg-on-secondary/15 text-on-secondary",
};

const SHAPE_CLASSES = {
  rectangle: "rounded-sm",
  pill: "rounded-full",
};

export default function Chip({
  tone = "terracotta",
  shape = "rectangle",
  className = "",
  children,
}) {
  const classes = [
    "inline-flex items-center px-3 py-1 font-mono text-label-caps uppercase",
    TONE_CLASSES[tone],
    SHAPE_CLASSES[shape],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
