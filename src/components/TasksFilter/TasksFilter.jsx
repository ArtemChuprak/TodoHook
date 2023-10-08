import React from "react";
import PropTypes from "prop-types";

const TasksFilter = ({ todoFilter, status }) => (
  <ul className="filters">
    <li>
      <button
        type="button"
        label="all"
        onClick={() => todoFilter('all')}
        className={status === 'all' ? 'selected' : ''}
      >
        All
      </button>
    </li>
    <li>
      <button
        type="button"
        label="active"
        onClick={() => todoFilter('active')}
        className={status === 'active' ? 'selected' : ''}
      >
        Active
      </button>
    </li>
    <li>
      <button
        type="button"
        className={status === 'completed' ? 'selected' : ''}
        onClick={() => todoFilter('completed')}
      >
        Completed
      </button>
    </li>
  </ul>
);

export default TasksFilter;

TasksFilter.defaultProps = {
  todoFilter: () => {},
  status: 'all',
};

TasksFilter.propTypes = {
  status: PropTypes.string,
  todoFilter: PropTypes.func,
};