export const TransitionToUncompletedButton = ({todo, handleTransitionToUncompleted}) => {
  const handleOnClick = () => {
    handleTransitionToUncompleted(todo);
  };

  return (
    <a
      href="#"
      role="button"
      style={{marginLeft: '10px'}}
      onClick={handleOnClick}
    >
      未完了リストへ
    </a>
  );
};