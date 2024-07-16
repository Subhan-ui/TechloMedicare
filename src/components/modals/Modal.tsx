
import Backdrop from "./ModalBackdrop";
import { typeModalModals } from "@/models/types";


const Modal: React.FC<typeModalModals> = ({
  hiding,
  children,
  className,
}) => (
    <div>
      <Backdrop hiding={hiding} />
      <div className={`block z-[250] top-24 left-1/2 transform -translate-x-1/2 p-12  rounded-lg  bg-white ${className}` }>
        {children}
      </div>
    </div>
  );

export default Modal;
