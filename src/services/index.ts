import { TodoResponse } from './../typings/todo';
import { fetchTodo } from '../utils';

/**
 * TODO API 인덱스에 해당하는 데이터를 가져오는 함수
 * @param index - 호출할 API 인덱스
 * @returns 호출 결과 데이터 또는 null
 */
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
