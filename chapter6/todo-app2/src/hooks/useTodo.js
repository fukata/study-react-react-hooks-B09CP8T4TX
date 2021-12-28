import {useEffect, useState} from "react";
import * as todosApi from "../apis/todos";
import {v4 as uuidv4} from "uuid";
import {TODO_STATUS_COMPLETED, TODO_STATUS_UNCOMPLETED} from "../components/TodoStatus";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(async () => {
    setTodos(await todosApi.getAllTodos());
  }, []);

  const todoAdd = async (name) => {
    const newTodo = {
      id: uuidv4(),
      name: name,
      status: TODO_STATUS_UNCOMPLETED,
    }
    if (await todosApi.createTodo(newTodo)) {
      setTodos([newTodo, ...todos]);
    }
  };

  const todoDelete = async (id) => {
    if (await todosApi.deleteTodo(id)) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  }

  const todoTransitionToCompleted = async (todo) => {
    todo.status = TODO_STATUS_COMPLETED;
    if (await todosApi.updateTodo(todo)) {
      setTodos([...todos]);
    }
  };

  const todoTransitionToUncompleted = async (todo) => {
    todo.status = TODO_STATUS_UNCOMPLETED;
    if (await todosApi.updateTodo(todo)) {
      setTodos([...todos]);
    }
  };

  return {
    todos,
    todoAdd,
    todoDelete,
    todoTransitionToUncompleted,
    todoTransitionToCompleted,
  }
}