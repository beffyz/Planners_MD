import React, { useState } from 'react';
import './simplePlanner.scss';

const SimplePlanner = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodoHandler = () => {
    const oldTodos = [...todos];
    if (inputValue === '') {
      return;
    }
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
    };

    // @ts-ignore
    const newTodos = oldTodos.concat(newTodo);

    setTodos(newTodos);

    setInputValue('');
  };

  return (
    <div className="simple-planner simple-planner__styling">
      <div className="simple-planner__box">
        <input
          placeholder="Add new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="simple-planner__input"
          type="text"
        />
        <button type="button" onClick={addTodoHandler} className="simple-planner__btn">ADD</button>
      </div>
      <div className="simple-planner__list">
        <li>Watch a movie</li>
        {todos.map(({ id, text }, index) => (
          <div key={id}>
            <li>
              {text}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimplePlanner;
