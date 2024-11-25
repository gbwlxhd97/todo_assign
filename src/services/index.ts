import { TodoResponse } from './../typings/todo';
import { fetchTodo } from '../utils';

export const fetchTodoByIndex = async (index: number): Promise<TodoResponse> => {
  try {
    const result = await fetchTodo(index);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
