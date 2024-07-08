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
