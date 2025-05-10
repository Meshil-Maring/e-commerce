const LocationIcon = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7152 20.4561C16.4775 16.2983 18 12.8051 18 9.52609C18 6.0467 15.3137 3.22609 12 3.22609C8.68629 3.22609 6 6.0467 6 9.52609C6 12.8051 7.52248 16.2983 11.2848 20.4561C11.6682 20.8798 12.3318 20.8798 12.7152 20.4561ZM12 12.2261C13.6569 12.2261 15 10.8829 15 9.22609C15 7.56924 13.6569 6.22609 12 6.22609C10.3431 6.22609 9 7.56924 9 9.22609C9 10.8829 10.3431 12.2261 12 12.2261Z"
      stroke={stroke}
      strokeWidth="1.5"
    />
  </svg>
);

export default LocationIcon;
