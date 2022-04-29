import React, { useState } from 'react';
import './secondPlanner.scss';

const taskArray = [
  {
    title: 'Watch a movie',
    done: true,
  },
];

const buttonArray = [
  {
    title: 'All',
    done: false,
  },
  {
    title: 'In progress',
    done: false,
  },
  {
    title: 'Completed',
    done: false,
  },
];

const SecondPlanner = () => {
  const [tasks, setTasks] = useState(taskArray);
  const [inputValue, setInputValue] = useState('');
  const [isDone, setIsDone] = useState(buttonArray);

  const getDone = (index:number) => {
    const newTaskArray = [...tasks];
    newTaskArray[index].done = !newTaskArray[index].done;
    return newTaskArray;
  };

  return (
    <div className="todo">
      <input
        type="text"
        className="todo__input"
        placeholder="Add new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="todo__btn--add"
        onClick={() => {
          setTasks([...tasks, { title: inputValue, done: false }]);
          setInputValue('');
        }}
      >
        ADD
      </button>

      <div className="todo__list">
        <div className="todo__box">
          {tasks.map((item, index) => (
            <div key={Math.random()}>
              <div
                className="todo__task"
                style={{ textDecoration: item.done ? 'line-through' : 'none' }}
              >
                <input
                  className="todo__checkbox"
                  type="checkbox"
                  checked={item.done}
                  onClick={() => setTasks(getDone(index))}
                  onChange={() => {}}
                />
                <span>{item.title}</span>
              </div>
            </div>
          ))}
          <div className="todo-progress__btn">
            {isDone.map((item) => (
              <div key={Math.random()}>
                <button style={{ backgroundColor: item.done ? 'lightgreen' : 'none' }}>{item.title}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPlanner;
