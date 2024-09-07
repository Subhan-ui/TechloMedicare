import Backdrop from "../../../modals/backdrop/Backdrop";
import OnlyModal from "../scheduleModal/ScheduleModal";
import { ModalProps } from "@/types/types";

const Modals: React.FC<ModalProps> = (props) => {
  return (
    <div className="animate_animated animate__backInUp">
      <Backdrop hiding={props.hiding} />,
      <OnlyModal email={props.email} name={props.name} hiding={props.hiding} />,
    </div>
  );
};

export default Modals;
