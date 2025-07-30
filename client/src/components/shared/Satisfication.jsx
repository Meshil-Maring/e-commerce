import Tick from "../../assets/icons/Tick";
import Cross from "../../assets/icons/Cross";

const Satisfication = ({ satis, title }) => (
  <div className="flex  gap-2 items-center">
    {satis ? (
      <div className="bg-[var(--primary)] rounded-full p-[1px]">
        <Tick size={16} />
      </div>
    ) : (
      <div className="bg-[var(--red)] rounded-full p-[1px]">
        <Cross size={16} />
      </div>
    )}

    <p className="text-xl">{title}</p>
  </div>
);

export default Satisfication;
