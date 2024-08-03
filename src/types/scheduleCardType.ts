export type AppointmentProps = {
  event: {
    location: string;
    patientName: string;
    purpose: string;
    start: Date;
    end: Date;
  };
  handleShow: () => void;
};
