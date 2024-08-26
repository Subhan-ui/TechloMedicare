const ScheduleTableHeader = ({
  Month,
  week,
  month,
}: {
  Month: string;
  week: () => void;
  month: () => void;
}) => (
  <div className="v_center justify-between mx-7 h-[60px]">
    <div className="lg:block hidden"></div>
    <p className="font-bold text-lg">{Month}</p>
    <div className="flex gap-2">
      <button
        onClick={week}
        className="border-2 px-2 py-1 font-mukta font-semibold hover:bg-black hover:text-white rounded-lg"
      >
        Week
      </button>
      <button
        onClick={month}
        className="border-2 px-2 py-1 font-mukta font-semibold hover:bg-black hover:text-white rounded-lg"
      >
        Month
      </button>
    </div>
  </div>
);

export default ScheduleTableHeader;
