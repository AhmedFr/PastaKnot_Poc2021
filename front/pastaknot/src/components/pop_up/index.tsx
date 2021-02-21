import React, { Component } from 'react';
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