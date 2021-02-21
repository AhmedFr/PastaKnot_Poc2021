import { ReactComponent } from '*.svg';
import React, { Component } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import "./tips.css";
import {Button} from './pop_up/index';

interface Tips_inter{
    id: number;
    title: string;
    category: string;
    idClient: number;
    date: Date;
    content: string;
    likes: number;
}

// export function Tipsfunc() {
//     let tipsData: Tips = {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100};
//     return (
//     <div>
//         <header className="showcase-top">
//             <a href="http://localhost:3000/"><h1>PastaKnot</h1></a>
//         </header>
//     <section>
//         <div>
//             <h1>{tipsData.title}</h1>
//             <p>{tipsData.content}</p>
//         </div>
//         <div>
//             <p>Like: {tipsData.likes}</p>
//             <p>Commentaire: </p>
//         </div>
//     </section>
//     </div>
//     );
// }

function Tip(props: any) {
    return(
        <div className="tip">
            <h1 className="title">
                {props.title}
            </h1>
            <h3 className="author">
                {props.idClient}
            </h3>
            <p className="content">
                {props.content}
            </p>
            <div className="likeDiv">
                <AiOutlineHeart className="iconHeart"/>
            </div>

        </div>
    );
}

class Tips extends Component {
    tipsData: Array<Tips_inter> = [{id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100},
    {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100},
    {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100},
    {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100},
    {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100},
    {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100},
    {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100},
    {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100},
    {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100}];
    level = 10;
    render() {
        var indents = [];
        for (var i = 0; i < this.level; i++) {
        indents.push(<Tip title={this.tipsData[i].title} idClient={this.tipsData[i].idClient} content={this.tipsData[i].content}/>);
        //indents.push(<Tip/>);
        }
        return indents;
      }
}


export function Tipsfunc() {
    let tipsData: Tips_inter = {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100};
    return (
    <div>
        <header className="showcase-top">
            <a href="http://localhost:3000/"><h1>PastaKnot</h1></a>
            <Button/>
        </header>
    <div className="containerTips">
        <div className="centering">
            <div className="centerDiv">
                <h1>{tipsData.title}</h1>
            </div>
            <div className="contentDiv">
                <p>{tipsData.content}</p>
            </div>
            <div className="interaction">
                <div className="commentaire">
                <input type="texte" placeholder="Commentaire"/><br/>
                </div>
                <div className="likes">
                    <AiOutlineHeart className="iconHeart"/>
                    <p>{tipsData.likes}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}
