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
