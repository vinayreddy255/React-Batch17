import { useEffect, useRef } from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD";

function ComponentA() {
    const inputRef = useRef();
    const btnAction = () => {
        console.log('inputRef....', inputRef.current.value)
        inputRef.current.value = 'Abc Test'
    }

    useEffect(() => {
        inputRef.current.value = 'Abc Test'
    }, [])

    return (
        <div>
            <h1>ComponentA</h1>
            <input type="text" ref={inputRef} />
            {/* <button onClick={btnAction}>Click</button> */}
            <ComponentB />
            <ComponentC />
            <ComponentD />
        </div>
    )
}
export default ComponentA