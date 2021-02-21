import {useState} from 'react'


const LogicalModal = () => {
    const [reveal, changeRevel] = useState(false);
    function toggle(){
        changeRevel(!reveal);
    }
    return {
        reveal, 
        toggle
    }
}

export default LogicalModal;