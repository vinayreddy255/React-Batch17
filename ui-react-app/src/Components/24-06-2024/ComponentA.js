import { useState } from "react"
import ComponentB from "./ComponentB"
function ComponentA() {
    const emp = { name: 'Siva', age: 28, city: 'Banglore' }
    const [chaild, setChaild] = useState('')
    const reciveChaildData = (data) => {
        setChaild(data);
    }
    return (
        <div>
            <h1>ComponentA</h1>
            <h2>Count:{0}</h2>
            <li>{chaild}</li>
            <ComponentB empolyData={emp} reciveChaildData={reciveChaildData} />

        </div>
    )
}
export default ComponentA