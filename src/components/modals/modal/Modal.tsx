import Backdrop from "../backdrop/ModalBackdrop";
import { typeModalModals } from "@/types/types";

const Modal: React.FC<typeModalModals> = ({ hiding, children, className }) => (
  <div>
    <Backdrop hiding={hiding} />
    <div
      className={`block z-[6000] med:top-24 md:top-16 top-7 med:left-1/2 md:left-[26rem] left-[42%] transform -translate-x-1/2 p-12  rounded-lg  bg-white ${className}`}
    >
      {children}
    </div>
  </div>
);

export default Modal;
