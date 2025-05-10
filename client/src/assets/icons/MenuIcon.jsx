const MenuIcon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 29"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 14.5H24.5M3.5 7.25H24.5M3.5 21.75H24.5"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MenuIcon;
