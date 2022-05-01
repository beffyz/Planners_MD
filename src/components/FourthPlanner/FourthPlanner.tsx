import React, { useState } from 'react';
import './fourthPlanner.scss';
import FourthPlannerTask from './FourthPlannerTask/FourthPlannerTask';

type tasksProps = {
  title: string
  isDone: boolean
  inEdit: boolean
}

const FourthPlanner = () => {
  const [inputValue, setInputValue] = useState('');
  const [editValue, setEditValue] = useState('');
  const [tasks, setTasks] = useState<tasksProps[]>([]);
  const [visibleTasks, setVisibleTasks] = useState<tasksProps[]>([]);

  const taskButtons = [
    {
      title: 'All',
      onClick: () => {
        setVisibleTasks([...tasks]);
      },
    },
    {
      title: 'In progress',
      onClick: () => {
        const newTasks = [...tasks];
        setVisibleTasks(newTasks
          .filter((task) => !task.isDone));
      },
    },
    {
      title: 'Completed',
      onClick: () => {
        const newTasks = [...tasks];
        setVisibleTasks(newTasks
          .filter((task) => task.isDone));
      },
    },
  ];

  const checkThisBox = (index:number) => {
    const newTasks = [...visibleTasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setVisibleTasks(newTasks);
  };
  const eraseTask = (index:number) => {
    let newTasks = [...tasks];
    newTasks = newTasks.slice(0, index).concat(newTasks.slice(index + 1));
    setTasks(newTasks);
    setVisibleTasks(newTasks);
  };
  const editTaskToggle = (index:number) => {
    const newTasks = [...visibleTasks];
    newTasks[index].inEdit = true;
    setEditValue(newTasks[index].title);
    setVisibleTasks(newTasks);
  };
  const saveTaskEdit = (index:number) => {
    const newTasks = [...visibleTasks];
    newTasks[index].title = editValue;
    newTasks[index].inEdit = false;
    setVisibleTasks(newTasks);
    setEditValue('');
  };
  const cancelTaskEdit = (index:number) => {
    const newTasks = [...visibleTasks];
    newTasks[index].title = tasks[index].title;
    newTasks[index].inEdit = false;
    setVisibleTasks(newTasks);
    setEditValue('');
  };
  const percentageDone = () => {
    const doneTasks = tasks.filter((task) => task.isDone);
    return (doneTasks.length / tasks.length) * 100;
  };

  return (
    <div className="fourth-planner">
      <div className="fourth-planner__main">
        <input
          type="text"
          className="planner__input"
          placeholder="Add new task..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const newTask = {
              title: inputValue,
              isDone: false,
              inEdit: false,
            };
            setTasks([...tasks, newTask]);
            setVisibleTasks([...tasks, newTask]);
            setInputValue('');
          }}
        >
          Add
        </button>
      </div>
      <div>
        {visibleTasks.map((task, index) => (
          task.inEdit ? (
            <div key={Math.random()}>
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => {
                    setEditValue(e.target.value);
                  }}
                />
                <button
                  onClick={() => saveTaskEdit(index)}
                >
                  Save
                </button>
                <button
                  onClick={() => cancelTaskEdit(index)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )
            : (
              <FourthPlannerTask
                key={Math.random()}
                title={task.title}
                isDone={task.isDone}
                inEdit={task.inEdit}
                onClick={() => checkThisBox(index)}
                eraseFn={() => eraseTask(index)}
                editFn={() => editTaskToggle(index)}
              />
            )
        ))}
      </div>
      <div className="fourth-planner__status">
        {taskButtons.map((taskButton) => (
          <button
            className="fourth-planner__status-btn"
            title={taskButton.title}
            onClick={taskButton.onClick}
            key={Math.random()}
          >
            {taskButton.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FourthPlanner;
