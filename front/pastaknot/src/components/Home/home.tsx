import React, { Component } from 'react';
import "./home.css";
import {Cate_Item} from './cate_item';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const axios = require('axios').default;
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

async function call_login(event: any): Promise<any> {
  axios.post('http://localhost:8000/api/login', {
      username: event.target.username.value,
      password: event.target.password.value
  })
  .then(function (response : any) {
      alert();
      return (response.body);
  })
  .catch(function (error : any) {
      alert();
      return (error);
  });
}

export class Button extends Component {
    state = { isShown: false };

    showModal = () => {
        if (this.state.isShown){
            this.setState({ isShown: false });
            enableBodyScroll(document.querySelector('html'));
        }else{
            this.setState({ isShown: true });
            disableBodyScroll(document.querySelector('html'));
        }
    };

    render() {
        return (
          <React.Fragment>
            <button className="button1" onClick={this.showModal}>log in</button>
            {this.state.isShown ? (
              <div className="backLoginForm">
                  <div className="loginForm">
                    <AiOutlineCloseCircle className="icon" onClick={this.showModal}/>
                    <form onSubmit={call_login}>
                        <label>Username</label><br/>
                        <input type="username" id="username" name="username" placeholder="Username"/><br/>
                        <label>Password</label><br/>
                        <input type="password" id="password" name="password" placeholder="Password"/><br/><br/>
                        <input type="submit" value="Login"/>
                    </form>
                </div>
              </div>
            ) : null}
          </React.Fragment>
        );
      }
}

export function Home() {
    
    return (<div><header className="showcase-top">
            <a href="http://localhost:3000/"><h1>PastaKnot</h1></a>
            <Button/>
    </header>
    <section>
        <div className="container category">
            <Cate_Item
            link="http://localhost:3000/categories/les-plats-du-pauvre"
            image="https://images.unsplash.com/photo-1612524681749-2f7615663729?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            messageText="Les plats du pauvre"
            />

            <Cate_Item
            link="http://localhost:3000/categories/pour-soirée-chill"
            image="https://images.unsplash.com/photo-1610213018271-1e149e2328b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            messageText="Pour des soirées chill"
            />

            <Cate_Item
            link="http://localhost:3000/categories/pour-se-peter-la-pense"
            image="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            messageText="Pour se peter la pense"
            />

            <Cate_Item
            link="http://localhost:3000/categories/les-plats-express"
            image="https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
            messageText="Les plats express"
            />

            <Cate_Item
            link="http://localhost:3000/categories/Les-desserts-du-chef"
            image="https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
            messageText="Les desserts du chef"
            />

            <Cate_Item
            link="http://localhost:3000/categories/le-bar-à-cocktail"
            image="https://images.unsplash.com/photo-1517417090568-b262025371c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            messageText="les bar à cocktail"
            />
        </div>
    </section>
    </div>
    );
}