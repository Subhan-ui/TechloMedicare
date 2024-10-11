import { TextType } from "@/types/types";

const Text: React.FC<TextType> = ({ children, ml, cls }) => (
  <div className={` h-[57.86px] v_center ${cls}`} style={{ marginLeft: ml }}>
    <p className="text-lg">{children}</p>
  </div>
);

export default Text;
