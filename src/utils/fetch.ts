import { TodoResponse } from '../typings/todo';

const fetchTodo = async (url: string): Promise<TodoResponse> => {
  const response = await fetch(url);
  return response.json();
};


export default fetchTodo;