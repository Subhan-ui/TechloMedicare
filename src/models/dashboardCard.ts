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
  },
  loading: boolean;
};

