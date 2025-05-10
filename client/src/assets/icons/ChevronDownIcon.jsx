const ChevronDownIcon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 10L12.5008 14.58L17.5 10"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronDownIcon;
