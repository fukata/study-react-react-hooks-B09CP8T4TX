export const DeleteTodoButton = ({todo, handleDeleteTodo}) => {
  const handleOnClick = () => {
    handleDeleteTodo(todo.id);
  };
  return (
    <a
      href="#"
      role="button"
      style={{marginLeft: '10px'}}
      onClick={handleOnClick}
    >
      削除
    </a>
  );
};