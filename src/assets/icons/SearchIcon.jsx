const SearchIcon = ({
  s = 24,
  c = "none",
  st = "currentColor",
  stw = "1.5",
}) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 28 29"
    fill={c}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.5 25.375L19.425 20.1188M22.1667 13.2917C22.1667 18.6304 17.988 22.9583 12.8333 22.9583C7.67868 22.9583 3.5 18.6304 3.5 13.2917C3.5 7.95291 7.67868 3.625 12.8333 3.625C17.988 3.625 22.1667 7.95291 22.1667 13.2917Z"
      stroke={st}
      strokeWidth={stw}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
