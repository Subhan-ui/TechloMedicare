import { buttonType } from "@/types/types";

const Button: React.FC<buttonType> = ({ children, name, value, onChange }) => {
  const active = children === value;
  return (
    <button
      className={`font-mukta font-normal md:text-base sm:text-xs text-[9px] md:px-[18px] md:py-[9px] sm:py-[5px] sm:px-[10px] px-[4px] py-[2px] rounded-lg ${
        active ? "bg-blue text-white" : "bg-white text-darkGrey"
      }`}
      type="button"
      name={name}
      onClick={onChange}
    >
      {children}
    </button>
  );
};

export default Button;
