import { TodoResponse } from './../typings/todo';
import { fetchTodo } from '../utils';

export const fetchTodoByIndex = async (index: number): Promise<TodoResponse | null> => {
  try {
    const result = await fetchTodo(index);
    if (Object.keys(result).length === 0) {
      return null;
    }
    return Array.isArray(result) ? result : [result];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
