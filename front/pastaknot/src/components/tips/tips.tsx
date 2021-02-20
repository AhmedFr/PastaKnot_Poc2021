import { ReactComponent } from '*.svg';
import React, { Component } from 'react';
import {Cate_Item} from '../Home/cate_item';
import {Tips} from './test'
import "./tips.css";


let clickCheck: boolean = false;

class ClassClick extends Component {
    clickHandler() {
        console.log('clicked the button')
        clickCheck = true;
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>log in</button>
            </div>
        )
    }
}

export default function Tipsfunc() {
    let tipsData: Tips = {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100};
    return (
    <div>
        <header>
            <h1>PastaKnot</h1>
            <ClassClick></ClassClick>
    </header>
    <section>
        <div>
            <h1>{tipsData.title}</h1>
            <p>{tipsData.content}</p>
        </div>
    </section>
    </div>
    );
}

