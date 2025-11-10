import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, removeTodo, editTodo }) {
  if (todos.length === 0) {
    return <p className="empty">할 일이 없습니다 ☕</p>;
  }

  return (
    <ul className="todo-list">
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            layout
          >
            <TodoItem
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default TodoList;
