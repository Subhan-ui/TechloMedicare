import { darkGrey } from "@/constants/colors";
import { Cross } from "@/constants/react-icons";
import { typeFormRow } from "@/types/types";

const Row: React.FC<typeFormRow> = ({
  children,
  top,
  type,
  cross,
  value,
  name,
  onChange,
  onChangeTextArea,
}) => (
  <>
    <tr className="relative" style={{ top: top }}>
      <td className="">{children}</td>
      <td className="relative med:left-10 left-5 ">
        {type === "textarea" ? (
          <textarea
            name="notes"
            id={children}
            value={value}
            onChange={onChangeTextArea}
            className="med:w-[415px] md:w-[345px] sm:w-[60vw] w-[65vw] h-[103px] px-3 border-2 border-gray-300"
          ></textarea>
        ) : (
          <input
            value={value}
            name={name}
            onChange={onChange}
            type={type}
            className="med:w-[415px] md:w-[345px] sm:w-[60vw] w-[65vw] px-3 h-[44px] border-2 border-gray-300"
            placeholder=""
          />
        )}
        {cross && (
          <Cross
            className="absolute med:right-56 md:right-28 right-16 bottom-[1.08rem]"
            color={darkGrey}
            size={12}
          />
        )}
      </td>
    </tr>
  </>
);

export default Row;
