const Icon = ({
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
    <path
      d="M13.2609 6.5L13.2593 4L21.9474 11.8824C22.0189 11.9464 22.0172 12.0568 21.9441 12.1192L13.537 19.2622C13.4289 19.3534 13.2609 19.2798 13.2609 19.1421V14.8336C9.49565 14.8336 5.88337 16.2709 3.21906 18.83L2 20L2.81992 18.3899C4.97032 14.1614 5.41271 10.2003 13.2626 9.17435L13.2609 6.5Z"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;
