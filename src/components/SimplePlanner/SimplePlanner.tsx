import React, { useState } from 'react';
import './simplePlanner.scss';

const taskArray = [
  {
    title: 'Watch a movie',
  },
];

const SimplePlanner = () => {
  const [tasks, setTasks] = useState(taskArray);
  const [inputValue, setInputValue] = useState('');

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
        <button
          type="button"
          className="simple-planner__btn"
          onClick={() => {
            setTasks([...tasks, { title: inputValue }]);
            setInputValue('');
          }}
        >
          ADD
        </button>

      </div>
      <div className="simple-planner__list">
        {tasks.map((item, index) => (
          <div key={Math.random()}>
            <li>
              {item.title}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimplePlanner;
