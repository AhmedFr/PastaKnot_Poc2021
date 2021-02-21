import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ReactComponent } from '*.svg';
import React, { Component } from 'react';
import { Category, Tips } from './test';
import './category.css';
import { Home } from '../Home/home';

export default function Categoryfunc(): JSX.Element {
    let cateData: Category = {id: 1, title: 'test Categorie', content: 'La La LAAAAAAAAAAAAAAAAA\nJe suis une catégorie !!'};
    let tip: Tips = {id: 1, title: 'Test1', IDClient: 1, date: new Date('2020/12/30'), likes: 420};
    let tip2: Tips = {id: 2, title: 'Test2', IDClient: 2, date: new Date('2010/05/31'), likes: 360};
    let tip3: Tips = {id: 3, title: 'Test3', IDClient: 5, date: new Date('2038/11/19'), likes: 120};
    let tip4: Tips = {id: 4, title: 'Test4', IDClient: 3, date: new Date('2025/04/28'), likes: 860};
    let tips: Array<Tips> = [tip, tip2, tip3, tip4];
    return (
        <div>
            <header>
                <title>PastaKnot - {cateData.title}</title>
            </header>
            <section>
                <div>
                    <h1>{cateData.title}</h1>
                    <p>{cateData.content}</p>
                </div>
            </section>
        </div>
    );
}
