export const TransitionToCompletedButton = ({todo, handleTransitionToCompleted}) => {
  const handleOnClick = () => {
    handleTransitionToCompleted(todo);
  };

  return (
    <a
      href="#"
      role="button"
      style={{marginLeft: '10px'}}
      onClick={handleOnClick}
    >
      完了リストへ
    </a>
  );
};