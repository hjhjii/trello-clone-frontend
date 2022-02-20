import Item from "./Item"
import { useState } from 'react'

function ToDoCard(props) {
    const [isAddActionActive, setAddActionActive] = useState(false)
    const [text, setText] = useState("")
    const textAreaFragment = <>
        <textarea className="Item" onBlur={(event) => {
            setAddActionActive(!isAddActionActive)
            setText(event.target.value)
        }} autoFocus></textarea>
        <div autoFocus>
            <button className="Item Item-button">X</button>
            <button className="Item Item-button">X</button>
        </div>
    </>
    const addItemButtonFragment = <>
        <button className="Item Item-button add-item-button" onClick={() => setAddActionActive(!isAddActionActive)}>Add a item</button>
    </>

    return <>
        <div className="ToDoCard">
            <div className="ToDoCard-header">
                <span className="title">Titolo</span>
            </div>
            <div className="ToDoCard-body">
                <Item text={"texttexttexttexttexttexttexttexttexttexttexttexttexttexttext"} />
                <div className="container-add-item" style={isAddActionActive ? { flexDirection: "column" } : {}}>
                    {isAddActionActive ? textAreaFragment : addItemButtonFragment}
                </div>
            </div>
            {text ? <h2>{text}</h2> : ""}
        </div>
    </>
}

export default ToDoCard