import Location from "../../../assets/icons/LocationIcon";

const AddressSection = () => {
  return (
    <div className="flex gap-2 border-2 m-4 rounded-lg justify-between items-center p-2">
      {/* <Location size={48} /> */}
      <p className="text-sm">
        Deliver to
        <strong> Quest Group of Institutions Boys Hostel, 12202, Punjab</strong>
      </p>

      <button className="text-lg bg-[var(--text)] text-white p-2 rounded-lg px-3">
        Change
      </button>
    </div>
  );
};

export default AddressSection;
