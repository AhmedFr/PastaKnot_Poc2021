export interface Category {
    id: number;
    name: string;
}

export interface Clients {
    id: number;
    name: string;
    password: string;
}
export interface Comment {
    id: number,
    idTips: number,
    idClient: number,
    content: string,
    date: Date,
}

export interface Tips {
    id: number;
    title: string;
    category: string;
    idClient: number;
    date: Date;
    content: string;
    likes: number;
}