export type componentsProps = {
    children: React.ReactNode;
    classN: string;
    onClick?: () => void;
};

export type TextType = {
    children: string[] | string;
    ml: string;
}

export type emailType = {
    email: string | null | undefined;
}

export type typeFormAddPatient = {
    cross: boolean;
    handleShow: () => void;
}

export type typeFormRow = {
    children: string;
    top: string;
    cross: boolean;
    type: string;
    value: string;
    name: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeTextArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type typeModalForm = {
    image: File | undefined;
    urls: string | undefined;
    progress: number;
    handleShow: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeUrl: () => void;
}


export type typeModalModals = {
    children: React.ReactNode;
    className: string;
    hiding: () => void;
}

export type typeTaskModal = {
    title: string;
    loadAdd: boolean;
    handleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleShow: () => void;
    handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

export type typeChart = {
    width: number;
    male: number | undefined;
    female: number | undefined;
}

export type typeLogout = {
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
