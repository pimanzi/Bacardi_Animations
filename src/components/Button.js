export function Button({
  color = 'black',
  backgroundColor = 'white',
  children,
  border = '1px solid white',
  borderRadius = '3px',
  family = 'calibri, sans-serif',
  size = '1rem',
  className = '',
  onClick,
}) {
  return (
    <button
      className={className}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        border: border,
        borderRadius: borderRadius,
        fontFamily: family,
        fontSize: size,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
