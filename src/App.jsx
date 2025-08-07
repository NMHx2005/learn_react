import { useState } from "react";
import Header from "./test"
import "./todo.css"

function App() {
  const [list, setList] = useState([{
    id: 1,
    name: "Học React"
  }]);
  const [todos, setTodos] = useState("");

  const handleValue = (e) => {
    setTodos(e.target.value);
  }

  const handleAddTodo = () => {
    const newTodo = {
      id: list.length + 1,
      name: todos
    }
    setList([...list, newTodo]);
    setTodos(""); // Reset input field after adding todo
  }

  return (
    <>
      <div className="todo-container">
        <h1>Ứng dụng todo list</h1>
        <input name="" type="text" value={todos} onChange={(e) => handleValue(e)} placeholder="Nhập nội dung todo" />
        <button onClick={() => handleAddTodo()}>Thêm</button>
        <div className="todo-list">
          <Header list={list} />
        </div>
        {/* Thêm các thành phần khác của ứng dụng todo list ở đây */}
      </div>
    </>
  )
}

export default App
