import axios from "axios";

const API_ENDPOINT = "http://localhost:3100";

export const getAllTodos = async () => {
  const response = await axios.get(`${API_ENDPOINT}/todos`);
  console.log(response);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Can't not execute GetAllTodos");
  }
};

export const createTodo = async (todo) => {
  const params = {
    id: todo.id,
    name: todo.name,
    status: todo.status,
  };
  const response = await axios.post(`${API_ENDPOINT}/todos`, params);
  console.log(response);
  if (response.status === 201) {
    return true;
  } else {
    throw new Error("Can't not create");
  }
};

export const updateTodo = async (todo) => {
  const params = {
    name: todo.name,
    status: todo.status,
  };
  const response = await axios.put(`${API_ENDPOINT}/todos/${todo.id}`, params);
  console.log(response);
  if (response.status === 200) {
    return true;
  } else {
    throw new Error("Can't not update");
  }
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_ENDPOINT}/todos/${id}`);
  console.log(response);
  if (response.status === 200) {
    return true;
  } else {
    throw new Error("Can't not delete");
  }
};