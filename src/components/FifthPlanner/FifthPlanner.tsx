import React, { FC, useState } from 'react';
import './fifthPlanner.scss';
import FifthPlannerChildren from './FifthPlannerChildren/FifthPlannerChildren';

const taskArray = [
  {
    title: 'Watch a movie',
    priority: { priorityTitle: 'HIGH PRIORITY', index: 3 },
  },
  {
    title: 'Watch a movie',
    priority: { priorityTitle: 'MEDIUM PRIORITY', index: 2 },
  },
  {
    title: 'Watch a movie',
    priority: { priorityTitle: 'LOW PRIORITY', index: 1 },
  },
];

const FifthPlanner = () => {
  const [tasks, setTasks] = useState(taskArray.map((item) => item));
  const [input, setInput] = useState('');

  return (
    <div className="fifth-planner__box">
      <div>
        <div className="fifth-planner__box-nav">
          <input
            placeholder="Add new task..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
          />
          <div className="fifth-planner__priority-box">
            <span>Priority</span>
            <select name="Priority">
              <option value="">High</option>
              <option value="">Medium</option>
              <option value="">Low</option>
            </select>
          </div>
          <button onClick={() => {
            const newTask = {
              title: input,
              priority: { priorityTitle: 'High', index: 3 },
            };
            setTasks([...tasks, newTask]);
            setInput('');
          }}
          >
            Add
          </button>
        </div>
        <div className="fifth-planner__tasks">
          {tasks.map((item) => (
            <div key={Math.random()} className="fifth-planner__tasks-item">
              <div>
                <span className="fifth-planner__tasks-item--priority">{item.priority.priorityTitle}</span>
              </div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthPlanner;
