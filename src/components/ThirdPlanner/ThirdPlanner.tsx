import React, { useState } from 'react';
import './thirdPlanner.scss';

const percentCalculator = (mainLength: number, length: number) => ((100 / mainLength) * length).toFixed(2);

const taskArray = [
  {
    title: 'Watch a movie',
    done: true,
    id: Math.random(),
  },
];

const all = 1;
const inProgress = 2;
const completed = 3;

const buttonsArray = [
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

let filterOptions = all;

const ThirdPlanner = () => {
  const [tasks, setTasks] = useState(taskArray);
  const [inputValue, setInputValue] = useState('');
  const deleteItem = (id: any) => {
    const newArray = tasks.filter((item) => item.id !== id);
    setTasks(newArray);
  };

  const getDone = (index: number) => {
    const newTaskArray = [...tasks];
    newTaskArray[index].done = !newTaskArray[index].done;
    return newTaskArray;
  };

  return (
    <div
      className="third-planner third-planner__styling"
      onClick={() => { // @ts-ignore
        document.getElementById('progress-line').style.width = `${percentCalculator(tasks.length, tasks.filter((i) => (
          i.done)).length)}%`;
      }}
    >
      <div className="third-planner__box">
        <div>
          <input
            className="third-planner__input"
            type="text"
            placeholder="Add new task..."
            value={inputValue}
            onChange={((event) => setInputValue(event.target.value))}
          />
          <button onClick={() => {
            setTasks([...tasks, { title: inputValue, done: false, id: Math.random() }]);
            setInputValue('');
          }}
          >
            ADD
          </button>
        </div>
        <div className="third-planner__progress-bar">
          <div id="progress-line" className="third-planner__progress-bar--line" />
        </div>
        <div>
          {tasks.filter((item) => {
            if (filterOptions === all) {
              return item;
            } if (filterOptions === inProgress) {
              return !item.done;
            } return item.done;
          }).map((item, index) => (
            <div key={Math.random()}>
              <div className="third-planner__todo-box" key={Math.random()}>
                <div style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                  <input
                    type="checkbox"
                    checked={item.done}
                    onClick={() => setTasks(getDone(index))}
                    onChange={() => {}}
                  />
                  <span>{item.title}</span>
                </div>
                <button
                  onClick={() => { deleteItem(item.id); }}
                  className="third-planner__close-btn"
                >
                  X
                </button>
              </div>
            </div>
          ))}
          <div className="third-planner__filter-btn">
            {buttonsArray.map((i) => (
              <button
                key={Math.random()}
                onClick={() => { filterOptions = i.filter; setTasks([...tasks]); }}
              >
                {i.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPlanner;
