import React, { Component } from 'react';
import "./home.css";
import {Cate_Item} from './cate_item';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {Button} from '../pop_up/index';

const axios = require('axios').default;
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;


export function Home() {
    
    return (<div><header className="showcase-top">
            <a href="http://localhost:3000/"><h1>PastaKnot</h1></a>
            <Button/>
    </header>
    <section>
        <div className="container category">
            <Cate_Item
            link="http://localhost:3000/les-plats-du-pauvre"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="Les plats du pauvre"
            />

            <Cate_Item
            link="http://localhost:3000/pour-soirée-chill"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="Pour des soirées chill"
            />

            <Cate_Item
            link="http://localhost:3000/pour-se-peter-la-pense"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="Pour se peter la pense"
            />

            <Cate_Item
            link="http://localhost:3000/les-plats-express"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="Les plats express"
            />

            <Cate_Item
            link="http://localhost:3000/Les-desserts-du-chef"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="Les desserts du chef"
            />

            <Cate_Item
            link="http://localhost:3000/le-bar-à-cocktail"
            image="https://assets.afcdn.com/recipe/20191212/104155_w350h250c1cx2960cy2000.jpg"
            messageText="Le bar à cocktail"
            />
        </div>
    </section>
    </div>
    );
}