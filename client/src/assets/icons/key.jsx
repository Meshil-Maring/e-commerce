const KeyIcon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeW = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="14" r="4" stroke={stroke} strokeWidth={strokeW} />
    <path
      d="M12 11L15.5 7.5M17 6L15.5 7.5M15.5 7.5L18 10"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
    />
  </svg>
);

export default KeyIcon;
