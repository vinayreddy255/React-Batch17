import ComponentC from "./ComponentC"
function ComponentB(props) {
    return (
        <div>
            <h2>ComponentB</h2>
            <ComponentC empolyData={props.empolyData} reciveChaildData={props.reciveChaildData} />
        </div>
    )
}
export default ComponentB