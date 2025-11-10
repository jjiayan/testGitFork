import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        placeholder="할 일을 입력하세요 ✏️"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInput;
