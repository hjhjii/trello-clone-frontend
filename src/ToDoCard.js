import Item from "./Item"
import { useState } from 'react'

function ToDoCard(props) {
    const [isAddActionActive, setAddActionActive] = useState(false)
    return <>
        <div className="ToDoCard">
            <div className="ToDoCard-header">
                <span className="title">Titolo</span>
            </div>
            <div className="ToDoCard-body">
                <Item text={"texttexttexttexttexttexttexttexttexttexttexttexttexttexttext"} />
                <div>
                    <div className="container-add-item">

                        {/* <button className="Item Item-button">X</button> */}
                        {isAddActionActive ? <textarea className="Item"></textarea> : <button className="Item Item-button add-item-button" onClick={() => setAddActionActive(!isAddActionActive)}>Add a item</button>}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ToDoCard