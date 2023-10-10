import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({todos, onDelete}) {
    return (
        <div>
            {todos.map((todo, index) => (
                <ToDoItem key={index} text={todo} onDelete={onDelete}/>
            ))}
        </div>
    );
}

export default ToDoList;