import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import styles from './todo.module.css';
import { fetchTodoByIndex } from '../services';
import { TodoResponse } from '../typings/todo';
import { validateTodo } from '../utils';

const Todo = () => {
  const [todos, setTodos] = useState<TodoResponse>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [currentApiIndex, setCurrentApiIndex] = useState(1);

  useEffect(() => {
    const loadInitialTodos = async () => {
      setIsLoading(true);
      try {
        const initialTodos = await fetchTodoByIndex(currentApiIndex);
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
    if (currentApiIndex >= 4) return;
    
    setIsLoading(true);
    try {
      const nextIndex = currentApiIndex + 1;
      const moreTodos = await fetchTodoByIndex(nextIndex);
      setTodos(prev => [...prev, ...moreTodos]);
      setCurrentApiIndex(nextIndex);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const validation = validateTodo(newTodo);
      if (!validation.isValid) {
        toast.error(validation.error);
        return;
      }

      const newTodoItem = {
        id: Date.now(),
        userId: 1,
        title: newTodo.trim(),
        completed: false
      };
      setTodos(prev => [newTodoItem, ...prev]);
      setNewTodo('');
    }
  };

  const handleToggle = (id: number) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id 
      ? { ...todo, completed: !todo.completed } 
      : todo
    ));
  };

  const handleDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Todo</h1>
      
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Input task name then tap Enter to add"
        />
      </div>

      {todos.map((todo) => (
        <div key={todo.id} className={styles.todoItem}>
          <div className={styles.todoLeft}>
            <input
              type="checkbox"
              checked={todo.completed}
              className={styles.checkbox}
              onChange={() => handleToggle(todo.id)}
            />
            <span className={todo.completed ? styles.completed : ''}>
              {todo.title}
            </span>
          </div>
          <button 
            className={styles.deleteButton}
            onClick={() => handleDelete(todo.id)}
          >
            ×
          </button>
        </div>
      ))}

      {isLoading && <div>Loading...</div>}
      
      <button 
        className={styles.loadMoreButton}
        onClick={handleLoadMore} 
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default Todo;
