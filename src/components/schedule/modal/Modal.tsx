import Backdrop from '../../modals/ModalBackdrop'
import OnlyModal from './ScheduleModal'

type ModalProps = {
  hiding: () => void;
  name:string|null|undefined;
  email:string|null|undefined;
};

const Modals: React.FC<ModalProps> = (props) => {
  return (
    <div className="animate_animated animate__backInUp">
      <Backdrop hiding={props.hiding} />,
      
      <OnlyModal email={props.email} name={props.name} hiding={props.hiding} />,
    </div>
  );
};

export default Modals;
