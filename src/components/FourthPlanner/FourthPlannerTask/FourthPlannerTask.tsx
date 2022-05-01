import React, { FC } from 'react';
import './fourthPlannerTask.scss';

type FourthPlannerTaskProps = {
    title: string
    isDone: boolean
    inEdit: boolean
    onClick: () => void
    eraseFn: () => void
    editFn: () => void
}

const FourthPlannerTask:FC<FourthPlannerTaskProps> = ({
  title, isDone, inEdit, onClick, eraseFn, editFn,
}) => (
  <div>
    {!inEdit && (
    <div className="fourth-planner__action-buttons">
      <div style={{ textDecoration: isDone ? 'line-through' : 'none' }} className="fourth-planner__action-buttons--box">
        <input
          type="checkbox"
          checked={isDone}
          onChange={onClick}
        />
        <span>
          {title}
        </span>
      </div>
      <div className="fourth-planner__edit">
        <button
          className="fourth-planner__edit-btn"
          onClick={editFn}
        >
          ✏️
        </button>
        <button
          className="fourth-planner__edit-btn fourth-planner__edit-btn--close"
          onClick={eraseFn}
        >
          X
        </button>
      </div>
    </div>
    )}
  </div>
);

export default FourthPlannerTask;
