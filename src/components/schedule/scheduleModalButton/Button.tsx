import { buttonType } from "@/types/typeButton";

const Button: React.FC<buttonType> = ({ children, name, value, onChange }) => {
  const active = children === value;
  return (
    <button
      className={`px-3 py-2 rounded-lg ${
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
