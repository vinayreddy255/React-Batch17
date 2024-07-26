import { memo } from "react"
function Button(props) {
    console.log('Button action...');
    return (
        <button onClick={props.click}>{props.children}</button>
    )
}
export default memo(Button);