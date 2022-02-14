import Item from "./Item"

function ToDoCard(props) {
    return <>
        <div className="ToDoCard">
            <div className="ToDoCard-header">
                <span className="title">Titolo</span>
            </div>
            <div className="ToDoCard-body">
                <Item text={"texttexttexttexttexttexttexttexttexttexttexttexttexttexttext"} />
                <div>
                    <div className="container-add-item">
                        <button className="Item Item-button add-item-button">Add a item</button>
                        <button className="Item Item-button">X</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ToDoCard