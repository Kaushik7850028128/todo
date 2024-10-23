import React, { useState } from 'react';
import './ToDoList.css'


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');


  const addTodo = () => {
    if (currentTodo !== '') {
      const newTodo = {
        id: Math.random(),
        text: currentTodo
      };
      setTodos([...todos, newTodo]);
      setCurrentTodo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='main'>
      <div className="main2">

        <h2>To-Do List</h2>
        <input
          type="text"
          value={currentTodo}
          onChange={e => setCurrentTodo(e.target.value)}
          placeholder="Enter element add in list"
          className='input'

        />
        <button className='addbutton' onClick={addTodo}>Add</button>
      </div>

      {todos.length != 0 ? "" : <h1 >Added items will be visible here.</h1>}
      <ol className='listItems'>
        {todos.map(todo => (
          <div id='listText' key={todo.id}>
            <h2>{todo.text}</h2>
            <h4>{new Date(Date.now()).toLocaleString()}</h4>
            <div className="buttons">
              <button className="delbutton"onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button className="editbutton"onClick={() => editTodo(todo.id, prompt('Enter new text'))}>Edit</button>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;