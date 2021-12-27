import { AddTodoForm } from './AddTodoForm'
import { UncompletedTodoList } from './UncompletedTodoList'
import { CompletedTodoList } from './CompletedTodoList'
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {TODO_STATUS_COMPLETED, TODO_STATUS_UNCOMPLETED} from "./TodoStatus";

function App() {
  const [todos, setTodos] = useState([]);
  const todoAdd = (name) => {
    const newTodo = {
      id: uuidv4(),
      name: name,
      status: TODO_STATUS_UNCOMPLETED,
    }
    setTodos([newTodo, ...todos]);
  };
  const todoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const todoTransitionToCompleted = (todo) => {
    todo.status = TODO_STATUS_COMPLETED;
    setTodos([...todos]);
  };
  const todoTransitionToUncompleted = (todo) => {
    todo.status = TODO_STATUS_UNCOMPLETED;
    setTodos([...todos]);
  };

  return (
    <div>
      <h1>TODO進捗管理</h1>

      <AddTodoForm handleTodoAdd={todoAdd} />
      <UncompletedTodoList todos={todos} handleDeleteTodo={todoDelete} handleTransitionToCompleted={todoTransitionToCompleted} />
      <CompletedTodoList todos={todos} handleDeleteTodo={todoDelete} handleTransitionToUncompleted={todoTransitionToUncompleted} />
    </div>
  );
}

export default App;
