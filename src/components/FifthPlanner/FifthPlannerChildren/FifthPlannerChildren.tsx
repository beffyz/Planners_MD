import React, { FC } from 'react';
import './FifthPlannerChildren.scss';

type FifthPlannerChildrenProps = {
    title: string,
    priority: number,
}

const FifthPlannerChildren:FC<FifthPlannerChildrenProps> = ({
  title, priority,
}) => (
  <div>
    <div>
      <input
        type="text"
      />

      <select name="Priority" id="">
        <option value="">High</option>
        <option value="">Medium</option>
        <option value="">Low</option>
      </select>

      <button>{title}</button>
    </div>
  </div>
);

export default FifthPlannerChildren;
