import { useState, KeyboardEvent, JSX } from 'react'
import './App.css'

interface Todo {
  text: string;
  completed: boolean;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  const handleAddTodo = (): void => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }])
      setInputValue('')
    }
  }

  const handleToggleComplete = (index: number): void => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const handleDeleteTodo = (index: number): void => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Todo List</h1>
      
      <div className="todo-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button 
          onClick={handleAddTodo}
          className="add-button"
        >
          Add
        </button>
      </div>
      
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="empty-message">
            No tasks yet. Add one above!
          </li>
        ) : (
          todos.map((todo, index) => (
            <li 
              key={index} 
              className="todo-item"
            >
              <div className="todo-content">
                <input 
                  type="checkbox" 
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(index)}
                  className="todo-checkbox"
                />
                <span className={todo.completed ? "todo-text completed" : "todo-text"}>
                  {todo.text}
                </span>
              </div>
              <button 
                onClick={() => handleDeleteTodo(index)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
      
      {todos.length > 0 && (
        <div className="todo-stats">
          <p>Total tasks: {todos.length}</p>
          <p>Completed: {todos.filter(todo => todo.completed).length}</p>
        </div>
      )}
    </div>
  )
}

export default App