import React from 'react';
import "./home.css";
import {Cate_Item} from './cate_item';


export function Home() {
    return (<div><header className="showcase-top">
            <h1>PastaKnot</h1>
            <button className="button1">Sign in</button>
    </header>
    <section>
        <div className="container category">
            <a href="https://www.marmiton.org/">
            <Cate_Item
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />
            </a>

            <a href="https://www.marmiton.org/">
            <Cate_Item
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />
            </a>

            <a href="https://www.marmiton.org/">
            <Cate_Item
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />
            </a>

            <a href="https://www.marmiton.org/">
            <Cate_Item
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />
            </a>

            <a href="https://www.marmiton.org/">
            <Cate_Item
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />
            </a>

            <a href="https://www.marmiton.org/">
            <Cate_Item
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="name of the dish"
            />
            </a>
        </div>
    </section>
    </div>
    );
}