import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ReactComponent } from '*.svg';
import React, { Component } from 'react';
import { Category } from './test';
import './category.css';
import { Home } from '../Home/home';

export default function Categoryfunc(): JSX.Element {
    let cateData: Category = {id: 1, title: 'test Categorie', content: 'La La LAAAAAAAAAAAAAAAAA\nJe suis une catégorie !!'};
    return (
        <div>
            <header>
                <title>PastaKnot - {cateData.title}</title>
            </header>
            <section>
                <div>
                    <h1>{cateData.title}</h1>
                    <p>{cateData.content}</p>
                    <button onClick = {Home}>Je veux que tu me cliques</button>
                </div>
            </section>
        </div>
    );
}