import { Calendar, momentLocalizer, EventProps, dateFnsLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Card from "../schedule/Card";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

const locales = {
  'en-US': enUS,
}

// type appointmentData = {
//   title: string;
//   event_id: string;
//   location: string;
//   time: string;
//   nextDate: string;
//   duration: string;
//   name: string;
//   purspose: string;
//   online: boolean;
//   start: Date;
//   end: Date;
// };
type cardType = EventProps&{location:string,name:string,purpose:string,start:Date,end:Date}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})


const Schedule:React.FC<{data:cardType[]}> = ({data})=>{
  const eventStyleGetter = (event: EventProps, start: Date, end: Date, isSelected: boolean) => {
    const style = {
      backgroundColor: '#3174ad',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block'
    };
    return { style };
  };
  
  console.log(data)
  const EventComponent = ({ event }: { event: cardType }) => <Card event={event} />;
return(<>
<div className="scheduler">
      <Calendar
        localizer={localizer}
        events={data}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        defaultView="week"
        eventPropGetter={eventStyleGetter}
        step={15}
        timeslots={4}
        components={{
          event: EventComponent,
        }}
      />
    </div>
</>)
}

export default Schedule;