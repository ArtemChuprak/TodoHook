import React from "react";
import PropTypes from "prop-types";
import Task from "../Task/Task";



const TaskList = ({ todos, onDeleted, onToggleDone, redactingTask }) => {
  const elements = todos.map((item) => (
    <Task
      {...item}
      key={item.id}
      onDeleted={() => onDeleted(item.id)}
      onToggleDone={() => onToggleDone(item.id)}
      redactingTask={redactingTask}
    />
  ));
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;

TaskList.defaultProps = {
  todos: [],
  onToggleDone: () => {},
  onDeleted: () => {},
  status: 'all',
  redactingTask: () => {},
  min: 0,
  sec: 0,
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
  onToggleDone: PropTypes.func,
  onDeleted: PropTypes.func,
  status: PropTypes.string,
  redactingTask: PropTypes.func,
  min: PropTypes.number,
  sec: PropTypes.number,
};