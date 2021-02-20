export interface Clients {
    id: number;
    name: string;
    password: string;
}

export interface Tips {
    id: number;
    title: string;
    category: number;
    idClient: number;
    date: Date;
    content: string;
    likes: number;
}