import { useState, useCallback } from "react"
import ChaildCompoent from "./ChaildCompoent";
import Button from "./Button";
function ParentCompoent() {
    const [count, setCount] = useState(0)
    const [sal, setSal] = useState(10)
    const incCounter = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const incSal = useCallback(() => {
        setSal(sal * 1000)
    }, [sal]);

    return (
        <div>
            <ChaildCompoent text={'Counter value'} value={count} />
            <Button click={incCounter}>incrementCount</Button>
            <ChaildCompoent text={'Sal value'} value={sal} />
            <Button click={incSal}>incrementSalary</Button>
        </div>
    )
}
export default ParentCompoent