import { memo } from "react";
function ChaildCompoent(props) {
    // console.log('chaild component calling....')
    return (
        <div>
            {props.text}:{props.value}
        </div>
    )
}
export default memo(ChaildCompoent);