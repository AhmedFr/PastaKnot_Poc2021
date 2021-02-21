import React, { Component } from 'react';
import "./home.css";
import {Cate_Item} from './cate_item';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Formpopup from "../FormPopup/formpopup"

export function Home() {
    
    return (<div><header className="showcase-top">
            <h1>PastaKnot</h1>
            <Formpopup/>
    </header>
    <section>
        <div className="container category">
            <Cate_Item
            link="http://localhost:3000/plat_du_pauvre"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />

            <Cate_Item
            link="https://www.marmiton.org/"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />

            <Cate_Item
            link="https://www.marmiton.org/"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />

            <Cate_Item
            link="https://www.marmiton.org/"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />

            <Cate_Item
            link="https://www.marmiton.org/"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />

            <Cate_Item
            link="https://www.marmiton.org/"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />
        </div>
    </section>
    </div>
    );
}