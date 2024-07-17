import { useEffect } from "react";
import axios from 'axios'


//get
//post
//put
//delete
function UseEffectApiCall() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        axios.get(url).then(response => console.log('resaponse', response))
    }, [])
    return (
        <div>
            <h1>Api Call uising axios and useEffect</h1>
        </div>
    )
}

export default UseEffectApiCall;