import Backdrop from "../modals/backdrop/ModalBackdrop";
import OnlyModal from "./PasswordModal";
import {ModalProps} from '@/types/modalTypes'

const Modals: React.FC<ModalProps> = (props) => (
    <div className="animate_animated animate__backInUp">
      <Backdrop hiding={props.hiding} />,
      <OnlyModal hiding={props.hiding} />,
    </div>
  );

export default Modals;
