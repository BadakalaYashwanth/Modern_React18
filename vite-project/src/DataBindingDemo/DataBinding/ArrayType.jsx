import { useState, useEffect } from "react";

function Application() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    console.log("Todo list updated", todos);
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos(prev => [...prev, newTodo]);
    setTask("");
  };

  const toggleTodo = id => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
<div className="container mt-5 d-flex flex-row text-center">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="mb-3">React 18 To Do List</h3>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task"
              value={task}
              onChange={e => setTask(e.target.value)}
            />
            <button className=" btn btn-primary" onClick={addTodo}>
              Add
            </button>
          </div>

          {todos.length === 0 && (
            <p className="text-muted">No tasks added</p>
          )}

          <ul className="list-group">
            {todos.map(todo => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  style={{
                    cursor: "pointer",
                    textDecoration: todo.completed ? "line-through" : "none"
                  }}
                >
                  {todo.text}
                </span>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Application;
