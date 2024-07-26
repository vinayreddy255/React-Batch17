import { useSelector } from "react-redux";
function Prodcts() {
    const state = useSelector(state => state);
    console.log('state....', state)
    return (
        <div>
            <h1>Prodcts Page...</h1>
            <h2>Count:{state.count}</h2>
        </div>
    )
}
export default Prodcts