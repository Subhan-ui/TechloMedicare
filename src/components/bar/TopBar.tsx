import { componentsProps } from "@/types/types";

const Bar: React.FC<componentsProps> = ({ children, classN, onClick }) => (
  <>
    <div
      className={`bg-white h-[72.57px] max:w-[1122px] med:w-[780px] md:w-[550px] w-[90vw] mx-[22.55px] v_center sm:flex-row flex-col  px-[15px] med:px-[28.44px] ${classN}`}
      onClick={onClick}
    >
      {children}
    </div>
  </>
);

export default Bar;
