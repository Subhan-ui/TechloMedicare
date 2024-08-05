import { ModalProps } from "@/types/types";
import Backdrop from "../../modals/backdrop/ModalBackdrop";
import OnlyModal from "./ScheduleModal";

const Modals: React.FC<ModalProps> = (props) => {
  return (
    <div className="animate_animated animate__backInUp">
      <Backdrop hiding={props.hiding} />,
      <OnlyModal email={props.email} name={props.name} hiding={props.hiding} />,
    </div>
  );
};

export default Modals;
