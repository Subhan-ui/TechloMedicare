import { TextType } from "@/types/types";

const Text: React.FC<TextType> = ({ children, ml }) => (
  <div className=" h-[57.86px] v_center " style={{ marginLeft: ml }}>
    <p className="font-mukta text-lg">{children}</p>
  </div>
);

export default Text;
