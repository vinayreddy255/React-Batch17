import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChaildCountValue from "./ChaildCountValue";
function CounterRedux() {
    // const [count, setCount] = useState(0);
    const storeData = useSelector(state => state);
    // console.log('storeData>>>', storeData)
    const { products: { list } } = storeData
    const dispatch = useDispatch();
    // console.log('storeData...', storeData)
    const incRement = () => {
        dispatch({ type: 'Increment' })
    }
    const decreemnt = () => {
        dispatch({ type: 'Decrement' })
    }
    console.log('list...', list)
    return (
        <div>
            <h1>Counter..</h1>
            <h2>Count:{storeData.counter.count}</h2>
            <button onClick={incRement}>Increment</button>
            <button onClick={decreemnt}>Decreemnt</button>
            <ChaildCountValue />

            <h2>Product List...</h2>
            {list?.map((e => (
                <li>Name:{e.name}, Price{e.price}</li>
            )))}
        </div>
    )
}
export default CounterRedux