/**
 * List and keys
 */
function ListItems() {
    const citys = ['Hyderbad', 'Banglore', 'Chennai', 'Delhi'];
    // console.log('citys>>>', citys)
    return (
        <div>
            <h1>ListItems</h1>
            <ul>
                {/* {citys.map(function (e, i) {
                    return (
                        <li key={i}>{e}--- {i}</li>
                    )
                })} */}
                <h1>---------------</h1>
                {citys.map((e, i) => (
                    <li key={i}>{e}</li>
                ))}
            </ul>
        </div>
    )
}
export default ListItems;