const ButtonWithNumber = ({ title, number }) => (
  <button className="text-xl border-2 w-fit px-4 py-1 rounded-[4px] border-[var(--white-200)] relative">
    <p className="text-sm">{title}</p>
    <p className="text-[8px] absolute top-[-10px] right-[-10px] bg-[var(--primary)] rounded-4xl  w-[20px] h-[20px] flex items-center justify-center">
      {number}
    </p>
  </button>
);

export default ButtonWithNumber;
