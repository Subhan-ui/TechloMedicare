import Backdrop from "../../modals/backdrop/Backdrop";
import OnlyModal from "../passwordModal/PasswordModal";
import { ModalProps } from "@/types/types";

const Modals: React.FC<ModalProps> = (props) => (
  <div className="animate_animated animate__backInUp">
    <Backdrop hiding={props.hiding} />,
    <OnlyModal hiding={props.hiding} />,
  </div>
);

export default Modals;
