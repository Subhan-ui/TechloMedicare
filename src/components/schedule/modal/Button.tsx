const Button: React.FC<{
  children: string;
  name: string;
  value: string;
  onChange: () => void;
}> = ({ children, name, value, onChange }) => {
  const active = children === value;
  return (
    <button
      className={`px-3 py-2 rounded-lg ${
        active ? "bg-blue text-white" : "bg-[#fafafa] text-[#333333]"
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
