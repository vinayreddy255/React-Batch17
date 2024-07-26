import axios from "axios"
import { useEffect } from "react"
function ApiCall() {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1').then(response => console.log(response))
    }, [])
    return (
        <div>
            <h1>Api Call...</h1>
        </div>
    )
}
export default ApiCall