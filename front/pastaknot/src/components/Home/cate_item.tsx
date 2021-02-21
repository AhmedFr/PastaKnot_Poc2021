import React from 'react';
import "./home.css";

export function Cate_Item(props: any): JSX.Element{
    return(
        <a href={props.link} className="itemlink">
        <div className="item" id="Pasta">
        <img src={props.image}></img>
        <h1>
            {props.messageText}
        </h1>
        </div>
        </a>);
}