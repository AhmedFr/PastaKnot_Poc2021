import React from 'react'
import "./formpopup.css"
import LogicalModal from './logicalmodal'
import Modal from './modal'

export default function FormPopup() {
    const lmodaldata = LogicalModal();
    return (
        <div className="FormPopup">
            <button className="button" onClick={lmodaldata.toggle}>login in</button>
            <Modal reveal={lmodaldata.reveal} 
                    cache={lmodaldata.toggle}/>
        </div>
    )
}