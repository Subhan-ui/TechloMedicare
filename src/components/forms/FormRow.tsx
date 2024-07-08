import { Cross } from "@/constants/react-icons";

const Row: React.FC<{
  children: string;
  top: string;
  cross: boolean;
  type: string;
  value: string;
  name: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void;
  onChangeTextArea?: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
}> = ({ children, top, type, cross, value, onChange, name,onChangeTextArea  }) => {
  return (
    <>
      <tr className="relative" style={{ top: top }}>
        <td className="">{children}</td>
        <td className="relative left-10">
          {type === "textarea" ? (
            <textarea
              name="notes"
              id={children}
              value={value} 
              onChange={onChangeTextArea}
              className="w-[415px] h-[103px] px-3 border-2 border-gray-300"
            ></textarea>
          ) : (
            <input
              value={value}
              name={name}
              onChange={onChange}
              type={type}
              className="w-[415px] px-3 h-[44px] border-2 border-gray-300"
              placeholder=""
            />
          )}
          {cross && (
            <Cross
              className="absolute right-56 bottom-[1.08rem]"
              color="#333333"
              size={12}
            />
          )}
        </td>
      </tr>
    </>
  );
};

export default Row;
