export default function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-page px-margin-mobile md:px-margin-tablet lg:px-margin-desktop ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
