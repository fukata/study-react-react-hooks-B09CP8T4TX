import {TransitionToCompletedButton} from "./TransitionToCompletedButton";
import {DeleteTodoButton} from "./DeleteTodoButton";
import {TODO_STATUS_UNCOMPLETED} from "./TodoStatus";

export const UncompletedTodoList = ({todos, handleDeleteTodo, handleTransitionToCompleted}) => {
  const uncompletedTodos = todos.filter((todo) => todo.status === TODO_STATUS_UNCOMPLETED).map((todo) => {
    return (
      <li key={todo.id}>
        {todo.name}
        <TransitionToCompletedButton todo={todo} handleTransitionToCompleted={handleTransitionToCompleted} />
        <DeleteTodoButton todo={todo} handleDeleteTodo={handleDeleteTodo} />
      </li>
    )
  });
  return (
    <div>
      <h2>未完了TODOリスト</h2>
      <ul>
        {uncompletedTodos}
      </ul>
    </div>
  );
};