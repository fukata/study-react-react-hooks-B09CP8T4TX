import { AddTodoForm } from './AddTodoForm'
import { UncompletedTodoList } from './UncompletedTodoList'
import { CompletedTodoList } from './CompletedTodoList'
import { useTodo } from "../hooks/useTodo";

function App() {
  const {
    todos,
    todoAdd,
    todoDelete,
    todoTransitionToUncompleted,
    todoTransitionToCompleted
  } = useTodo();

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
