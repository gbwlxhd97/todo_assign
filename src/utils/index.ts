import { TodoResponse } from '../typings/todo';

export const fetchTodo = async (url: string): Promise<TodoResponse> => {
  const response = await fetch(url);
  return response.json();
};

type ValidationResult = {
  isValid: boolean;
  error: string;
}

export const validateTodo = (input: string): ValidationResult => {
  if (!input.trim()) {
    return { isValid: false, error: '할일을 입력해주세요.' };
  }
  if (input.trim().length < 2) {
    return { isValid: false, error: '최소 2글자 이상 입력해주세요.' };
  }
  if (input.trim().length > 50) {
    return { isValid: false, error: '최대 50글자까지 입력 가능합니다.' };
  }
  return { isValid: true, error: '' };
}; 