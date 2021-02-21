import { ReactComponent } from '*.svg';
import React, { Component } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
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
    level = 10;
    render() {
        var indents = [];
        for (var i = 0; i < this.level; i++) {
        indents.push(<Tip/>);
        }
        return indents;
      }
}


export function Tipsfunc() {
    // let tipsData: Tips = {id: 1, title: 'pasta', category: 'plat du pauvre', idClient: 10, date: new Date("2019-01-16"), content: 'pute pute salope salope', likes: 100};
    return (
    <div>
        <header className="showcase-top">
            <a href="http://localhost:3000/"><h1>PastaKnot</h1></a>
        </header>
    <div>
        <Tips/>
    </div>
    </div>
    );
}
