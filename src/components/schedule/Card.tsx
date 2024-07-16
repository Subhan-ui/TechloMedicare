
// import { GoPerson, GoClock, GoLocation } from "react-icons/go";
// import { GrNotes } from "react-icons/gr";


// type AppointmentProps = {
  
//   data: any;
// };

// const Card: React.FC<AppointmentProps> = (props) => {
//   const color = "#2f80ed";
//   const { targetedAppointmentData } = props.data;
//   const { location, name, purpose} =
//     targetedAppointmentData;
  
//   console.log('card component running')
//   return (
//     <div
//       className="w-[187px] h-[119px] rounded-lg pt-1  "
//       style={{ backgroundColor: `${color}4f`, color: color }}
//     >
//       <p
//         className="font-mukta font-normal text-xs pl-2 border-l-2 h-5 v_center"
//         style={{ borderColor: color, backgroundColor: `${color}40` }}
//       >
//         Pending
//       </p>
//       <div className="flex flex-col justify-around h-[99px]">
//         <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
//           <GoPerson size={10} />
//           {name}
//         </div>
//         <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
//           <GrNotes size={10} />
//           {purpose}
//         </div>
//         <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
//           <GoClock size={10} />
//           {/* {time} */}
//         </div>
//         <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
//           <GoLocation size={10} />
//           {location}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


// src/components/Card.tsx
// src/components/Card.tsx
import React from 'react';
import { Person, Clock, LocationI, Notes } from '@/constants/react-icons';
import Modal from '../modals/Modal';

type AppointmentProps = {
  event: {
    location: string;
    patientName: string;
    purpose: string;
    start: Date;
    end: Date;
  };
  handleShow: ()=>void;
};

const Card: React.FC<AppointmentProps> = ({ event, handleShow }) => {
  const color = "#2f80ed";
  const { location, patientName, purpose, start, end, } = event;
  console.log('card componetn')

  return (
    <>
    <Modal className='fixed' hiding={handleShow}>
    <div
      className="w-[187px] h-[119px] rounded-lg pt-1"
      style={{ backgroundColor: `${color}4f`, color: color }}
    >
      <p
        className="font-mukta font-normal text-xs pl-2 border-l-2 h-5 v_center"
        style={{ borderColor: color, backgroundColor: `${color}40` }}
      >
        Pending
      </p>
      <div className="flex flex-col justify-around h-[99px]">
        <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
          <Person size={10} />
          {patientName}
        </div>
        <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
          <Notes size={10} />
          {purpose}
        </div>
        <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
          <Clock size={10} />
          {start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
          {end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
          <LocationI size={10} />
          Room {location}
        </div>
      </div>
    </div>
    </Modal>
    </>
  );
};

export default Card;
