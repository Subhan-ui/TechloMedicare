export type checkbox = {
    checked?: boolean; // Optional initial checked state (defaults to false)
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

export type task = { 
    id: number;
    date: string;
    title: string;
}