const EyeIcon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeW = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.833374 10C0.833374 10 4.16671 3.33334 10 3.33334C15.8334 3.33334 19.1667 10 19.1667 10C19.1667 10 15.8334 16.6667 10 16.6667C4.16671 16.6667 0.833374 10 0.833374 10Z"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12.5C11.3808 12.5 12.5 11.3807 12.5 10C12.5 8.6193 11.3808 7.50001 10 7.50001C8.61933 7.50001 7.50004 8.6193 7.50004 10C7.50004 11.3807 8.61933 12.5 10 12.5Z"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EyeIcon;
