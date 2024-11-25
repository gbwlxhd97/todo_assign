import { useEffect, useState } from 'react';
import styles from './todo.module.css';
import { fetchInitialTodos, fetchMoreTodo } from '../services';
import { TodoResponse } from '../typings/todo';

const Todo = () => {
  const [todos, setTodos] = useState<TodoResponse>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadInitialTodos = async () => {
      setIsLoading(true);
      try {
        const initialTodos = await fetchInitialTodos();
        setTodos(initialTodos);
      } catch (err) {
        console.log(err);
        
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialTodos();
  }, []);

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const moreTodos = await fetchMoreTodo();
      setTodos((prev) => [...prev, ...moreTodos]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {isLoading && <div>Loading...</div>}

      {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly />
          <span className={todo.completed ? styles.completed : ''}>
            {todo.title}
          </span>
        </div>
      ))}

      <button onClick={handleLoadMore} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default Todo;
