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
      <td className="relative md:-left-4 ">
        {type === "textarea" ? (
          <textarea
            name="notes"
            id={children}
            value={value}
            onChange={onChangeTextArea}
            className="med:w-[415px] md:w-[345px] sm:w-[47vw] w-[60vw] h-[103px] px-3 border-2 border-gray-300"
          ></textarea>
        ) : (
          <div className="relative med:w-[415px] md:w-[345px] sm:w-[47vw] w-[60vw]">
          <input
            value={value}
            name={name}
            onChange={onChange}
            type={type}
            className="med:w-[415px] md:w-[345px] sm:w-[47vw] w-[60vw] px-3 h-[44px] border-2 border-gray-300"
            placeholder=""
          />
        {cross && (
          <Cross
          className="absolute  right-[18px] bottom-[1.08rem]"
          color={darkGrey}
          size={12}
          />
        )}
        </div>
        )}
      </td>
    </tr>
  </>
);

export default Row;
