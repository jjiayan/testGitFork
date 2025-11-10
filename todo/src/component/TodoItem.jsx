import { useState } from "react";

function TodoItem({ todo, toggleTodo, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() === "") return;
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      )}

      <div className="btn-group">
        {isEditing ? (
          <button className="save" onClick={handleSave}>
            저장
          </button>
        ) : (
          <button className="edit" onClick={() => setIsEditing(true)}>
            수정
          </button>
        )}
        <button className="delete" onClick={() => removeTodo(todo.id)}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
