import {TODO_STATUS_COMPLETED} from "./TodoStatus";
import {DeleteTodoButton} from "./DeleteTodoButton";
import {TransitionToUncompletedButton} from "./TransitionToUncompletedButton";

export const CompletedTodoList = ({todos, handleDeleteTodo, handleTransitionToUncompleted}) => {
  const completedTodos = todos.filter((todo) => todo.status === TODO_STATUS_COMPLETED).map((todo) => {
    return (
      <li key={todo.id}>
        {todo.name}
        <TransitionToUncompletedButton todo={todo} handleTransitionToUncompleted={handleTransitionToUncompleted} />
        <DeleteTodoButton todo={todo} handleDeleteTodo={handleDeleteTodo} />
      </li>
    )
  });
  return (
    <div>
      <h2>完了TODOリスト</h2>
      {completedTodos}
    </div>
  );
};