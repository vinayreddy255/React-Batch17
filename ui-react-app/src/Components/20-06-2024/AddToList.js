import { useState } from "react";
import "./style.css"

function AddToList() {
    const [userList, setUserList] = useState([])
    const [userName, setUserName] = useState("")
    const InputFormHandler = (event) => {
        const { value } = event.target;
        setUserName(value)

    }
    const AddToDoList = () => {
        const newList = [...userList]
        newList.push(userName);
        setUserList(newList)
        setUserName("")
    }
    return (
        <div>
            <h2 className="list">AddToList</h2>
            <div>
                <label>Name:</label>
                <input type="text" onChange={InputFormHandler} value={userName} />
                <button onClick={AddToDoList} style={{ backgroundColor: 'blue', fontSize: "20px" }}>Add</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((items, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{items}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AddToList;