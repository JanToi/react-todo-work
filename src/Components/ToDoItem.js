import React from "react";

function ToDoItem({text, onDelete}) {
    const handleDelete = () => {
        onDelete(text);
    };
    return (
        <div className="todo-item">
            <span className="task-text">{text}</span>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ToDoItem;