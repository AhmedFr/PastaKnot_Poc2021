import React, { Component } from 'react'

export class ClassClick extends Component {
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
