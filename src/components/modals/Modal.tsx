
import Backdrop from "./ModalBackdrop";

const Modal: React.FC<{ hiding: () => void; children: React.ReactNode, className:string,}> = ({
  hiding,
  children,
  className,
}) => {
  return (
    <div>
      <Backdrop hiding={hiding} />
      <div className={`md:block hidden z-[250] top-24 left-1/2 transform -translate-x-1/2 p-12  rounded-lg  bg-white ${className}` }>
        {children}
      </div>
    </div>
  );
};

export default Modal;
