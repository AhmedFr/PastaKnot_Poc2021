export interface Category {
    id: number;
    title: string;
    content: string;
}

export interface Tips {
    id: number;
    title: string;
    IDClient: number;
    date: Date;
    likes: number;
}