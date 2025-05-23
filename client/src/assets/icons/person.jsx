const Icon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeW = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 25"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.6557 21.6601V19.6601C20.6557 18.5992 20.2343 17.5818 19.4841 16.8316C18.734 16.0815 17.7166 15.6601 16.6557 15.6601H8.6557C7.59483 15.6601 6.57742 16.0815 5.82727 16.8316C5.07713 17.5818 4.6557 18.5992 4.6557 19.6601V21.6601"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6557 11.6601C14.8648 11.6601 16.6557 9.8692 16.6557 7.66006C16.6557 5.45093 14.8648 3.66006 12.6557 3.66006C10.4466 3.66006 8.6557 5.45093 8.6557 7.66006C8.6557 9.8692 10.4466 11.6601 12.6557 11.6601Z"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;
