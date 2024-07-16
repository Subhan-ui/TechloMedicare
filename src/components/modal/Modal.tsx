import Backdrop from "../modals/ModalBackdrop";
import OnlyModal from "./PasswordModal";

type ModalProps = {
  hiding: () => void;
};

const Modals: React.FC<ModalProps> = (props) => (
    <div className="animate_animated animate__backInUp">
      <Backdrop hiding={props.hiding} />,
      <OnlyModal hiding={props.hiding} />,
    </div>
  );

export default Modals;
