import React, { useState } from 'react';
import './secondPlanner.scss';

const percentCalculator = (mainLength: number, length: number) => ((100 / mainLength) * length).toFixed(2);

// @ts-ignore
// document.getElementById('progress').style.width = `${percentCalculator(tasks.length, tasks.filter((i) => (
//     i.done)).length)}%`;

const all = 1;
const inProgress = 2;
const completed = 3;

let filterOptions = all;

const taskArray = [
  {
    title: 'Watch a movie',
    done: true,
  },
];

const buttonArray = [
  {
    title: 'All',
    filter: all,
  },
  {
    title: 'In progress',
    filter: inProgress,
  },
  {
    title: 'Completed',
    filter: completed,
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
    <div
      onClick={() => { // @ts-ignore
        document.getElementById('progress').style.width = `${percentCalculator(tasks.length, tasks.filter((i) => (
          i.done)).length)}%`;
      }}
      className="todo second-planner__styling"
    >
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
          <div className="todo__progress-bar">
            <div id="progress" className="todo__progress-bar--line" />
          </div>
          {tasks.filter((item) => {
            if (filterOptions === 1) {
              return item;
            }
            if (filterOptions === 2) {
              return !item.done;
            }
            return item.done;
          }).map((item, index) => (
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
            {isDone.map((item, index) => (
              <div key={Math.random()}>
                <button onClick={() => {
                  filterOptions = item.filter; setTasks([...tasks]);
                }}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPlanner;
