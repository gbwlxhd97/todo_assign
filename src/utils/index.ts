import { TodoResponse } from '../typings/todo';

/**
 * TODO API 인덱스에 해당하는 데이터를 가져오는 함수
 * @param index - 호출할 API 인덱스 default: 1 
 * @returns 호출 결과 데이터
 */
export const fetchTodo = async (index: number =1): Promise<TodoResponse> => {
  const response = await fetch(
    `https://my-json-server.typicode.com/arahansa/todojsmockdata/${index}`
  );
  return response.json();
};

type ValidationResult = {
  isValid: boolean;
  error: string;
}

/**
 * TODO 입력 유효성 검사 함수
 * @param input - 검사할 입력 문자열
 * @returns 유효성 검사 결과
 */
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