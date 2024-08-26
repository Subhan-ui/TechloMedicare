export type componentsProps = {
  children: React.ReactNode;
  classN: string;
  onClick?: () => void;
};

export type TextType = {
  children: string[] | string;
  ml: string;
};

export type emailType = {
  email: string | null | undefined;
  name?: string | null | undefined;
};

export type typeFormAddPatient = {
  cross: boolean;
  handleShow: () => void;
};

export type typeFormRow = {
  children: string;
  top: string;
  cross: boolean;
  type: string;
  value: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export type typeModalForm = {
  image: File | undefined;
  urls: string | undefined;
  progress: number;
  handleShow: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeUrl: () => void;
};

export type typeModalModals = {
  children: React.ReactNode;
  className: string;
  hiding: () => void;
};

export type typeTaskModal = {
  title: string;
  loadAdd: boolean;
  handleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShow: () => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
};

export type typeChart = {
  width: number;
  male: number | undefined;
  female: number | undefined;
};

export type typeLogout = {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type data = {
  name: string;
  companyName: string;
  industry: string;
  eNumber: string;
};

export type typeTasks = {
  id: string;
  task: string;
  date: string;
  completed: boolean;
}[];

export type buttonType = {
  children: string;
  name: string;
  value: string;
  onChange: () => void;
};

export type checkbox = {
  checked?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type task = {
  id: string;
  date: string;
  title: string;
  checked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleDelete: (id: string) => void;
};

export type tableContent = {
  id: string;
  image: string;
  name: string;
  diagnosis: string;
  status: "On Treatment" | "Recovered" | "Awaiting Surgery";
  last: string;
  next: string;
  handleShow: (id: string) => void;
  handleHiding: () => void;
};

export type sideBtnType = {
  children: React.ReactNode;
  href: string;
  name: string;
  disable?: boolean;
};

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

export type patientType = {
  id: string;
  name: string;
  diagnosis: string;
  image: string;
  phNo: string;
  dateOfBirth: string;
  sex?: string;
  notes?: string;
};

export type ModalProps = {
  hiding: () => void;
  name?: string | null | undefined;
  email?: string | null | undefined;
};

export type card = {
  id: number;
  heading: string;
  number: number;
  percentage: string;
  image?: string;
  total?: {
    total: number;
    male: number;
    female: number;
  };
  loading: boolean;
};

import { EventProps } from "react-big-calendar";

export type cardType = EventProps & {
  location: string;
  title?: string;
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

export type message = {
  message: string;
  time: string;
  id: string;
};

export type some = {
  email: string | null | undefined;
  view: "week" | "month";
};

export type scheduleDashboardType = {
  clickedId: string;
  id: string;
  patientName: string;
  time: string;
  duration: string;
  purpose: string;
};
