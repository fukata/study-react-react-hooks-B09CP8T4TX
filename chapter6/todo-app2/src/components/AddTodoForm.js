import {useState} from "react";

export const AddTodoForm = ({handleTodoAdd}) => {
  const [name, setName] = useState("");
  const handleOnChange = (event) => {
    setName(event.target.value);
  };
  const handleOnClick = () => {
    if (name.length === 0) {
      alert("TODOの内容を入力してください");
      return;
    }

    handleTodoAdd(name);
    setName("");
  };

  return (
    <div className="grid">
      <input type="text" value={name} onChange={handleOnChange} />
      <button onClick={handleOnClick}>TODOを追加</button>
    </div>
  );
};