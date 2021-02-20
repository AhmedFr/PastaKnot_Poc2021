export interface Clients {
    ID: number;
    name: string;
    user: string;
    password: string;
}

export interface Categories {
    ID: number;
    name: string;
}

export interface Tips {
    ID: number;
    title: string;
    IDcategorie: number;
    IDclient: number;
    date: Date;
    content: string;
    likes: number;
}