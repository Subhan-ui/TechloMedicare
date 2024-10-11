import useDateTime from "@/hooks/useDateTime";

const DateTime: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  const { handleChange, value, handleInputChange } = useDateTime(onClick);

  return (
    <div className="flex flex-col absolute left-72 top-24 bg-white h-48 w-64 gap-3 p-7 border-2 border-black ">
      <div className="bg-white w-full h-full">
        <input
          type="datetime-local"
          value={value}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="button"
        className="bg-black text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
        onClick={handleChange}
      >
        OK
      </button>
      <button
        type="button"
        className="bg-black text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
        onClick={onClick}
      >
        Close
      </button>
    </div>
  );
};

export default DateTime;
