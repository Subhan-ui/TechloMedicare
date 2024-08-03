import { EventProps } from "react-big-calendar";

export type cardType = EventProps & {
    location: string;
    patientName: string;
    purpose: string;
    start: Date;
    end: Date;
    time: string;
    id: string;
    duration: string;
  };

export type appointmentData = {
    id: string;
    event_id: string;
    title: string;
    location: string;
    time: string;
    nextDate: string;
    duration: string;
    patientName: string;
    purspose: string;
    online: boolean;
    start: Date;
    end: Date;
  };