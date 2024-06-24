function ComponentC(props) {
    const { name, city, age } = props.empolyData
    const sendDatatoParent = () => {
        props.reciveChaildData('Sending to parent as chaild data....')
    }
    return (
        <div>
            <h3>ComponentC</h3>
            <ul>
                <li>Name:{name}</li>
                <li>Age:{age}</li>
                <li>City:{city}</li>
            </ul>
            <button onClick={sendDatatoParent}>Click</button>
            <button>+</button>
            <button>-</button>
        </div>
    )
}
export default ComponentC