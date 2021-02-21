export interface Category {
    name: string;
}

export interface Clients {
    name: string;
    password: string;
}

export interface Comment {
    idTip: number,
    idClient: number,
    content: string,
    date: Date,
}

export interface Tips {
    title: string;
    category: string;
    idClient: number;
    date: Date;
    content: string;
    likes: number;
}