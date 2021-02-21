import React from 'react'
import "./formpopup.css"
const axios = require('axios').default;

interface popup {
    reveal: boolean;
    cache: () => void;
}

async function call_login(event: any): Promise<any> {
    //alert(event.target.username.value);
    axios.post('http://localhost:8000/api/login', {
        username: event.target.username.value,
        password: event.target.password.value
    })
    .then(function (response : any) {
        console.log(response.body);
        alert();
        return (response.body);
    })
    .catch(function (error : any) {
        console.log(error);
        alert();
        return (error);
    });
}

const Modale = (popup:popup) => popup.reveal ?(
    <React.Fragment>
        <div className="overlay"/>
        <div className="wrapper">
            <div className="modal">
                <button type="button" className="close" onClick={popup.cache}>
                    <span>&times;</span>
                </button>
                <form onSubmit={call_login}>
                    <p>Username</p>
                    <input type="text" id="fname" name="fname" placeholder="Username"/><br/>
                    <p>Password</p>
                    <input type="password" id="lname" name="lname" placeholder="Password"></input>
                </form>
            </div>
        </div>
    </React.Fragment>
) : null

export default Modale;