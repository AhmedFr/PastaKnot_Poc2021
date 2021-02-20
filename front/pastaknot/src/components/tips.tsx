import { ReactComponent } from '*.svg';
import React, { Component } from 'react';
import "./tips.css";

interface Tips{
    id: number;
    title: string;
    category: string;
    idClient: number;
    date: Date;
    content: string;
    likes: number;
}

export function Tipsfunc() {
    let tipsData: Tips = {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100};
    return (
    <div>
        <header className="showcase-top">
            <h1>PastaKnot</h1>
        </header>
    <section>
        <div>
            <h1>{tipsData.title}</h1>
            <p>{tipsData.content}</p>
        </div>
        <div>
            <p>Like: {tipsData.likes}</p>
            <p>Commentaire: </p>
        </div>
    </section>
    </div>
    );
}
