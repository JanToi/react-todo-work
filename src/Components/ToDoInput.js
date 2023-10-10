import React, {useState} from "react";

function ToDoInput({addTask}) {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() === "") {
            return;
        }
        addTask(todo);
        setTodo("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
            <input
                type="text"
                placeholder="Add a task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Add</button>
            </div>
        </form>
    );
}

export default ToDoInput;