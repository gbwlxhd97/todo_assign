import { TodoResponse } from './../typings/todo';
import { API_ENDPOINTS } from './../mocks/api_constant';
import {fetchTodo} from '../utils';

export const fetchInitialTodos = async (): Promise<TodoResponse> => {
  try {
    const todoPromises = [
      fetchTodo(API_ENDPOINTS.TODO_1),
      fetchTodo(API_ENDPOINTS.TODO_2),
      fetchTodo(API_ENDPOINTS.TODO_3),
    ];

    const results = await Promise.all(todoPromises);
    console.log(results);
    return results.flat();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchMoreTodo = async (): Promise<TodoResponse | {}> => {
  try {
    return await fetchTodo(API_ENDPOINTS.TODO_4);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
