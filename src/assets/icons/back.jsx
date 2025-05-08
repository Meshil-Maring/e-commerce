const Icon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeW = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.1667 14H5.83337M5.83337 14L14 22.1667M5.83337 14L14 5.83333"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;
