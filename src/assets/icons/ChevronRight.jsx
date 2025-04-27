const ChevronRightIcon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 7L15 12L10 17"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronRightIcon;
